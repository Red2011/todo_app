import Index from "../pages/[board]";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));


describe('board', ()=>{

    test('Задачи', () => {
        mockRouter.push("/example")
        render(<Index />);
        const button_add = screen.getByText('Add task');
        const input_add = screen.getByPlaceholderText('task...')
        expect(button_add).toBeInTheDocument();
        expect(input_add).toBeInTheDocument();

        //add task
        fireEvent.input(input_add, {
            target: {value: 'Сделать поставленную задачу'}
        });
        expect(screen.getByDisplayValue('Сделать поставленную задачу')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('Сделать поставленную задачу')).toBeInTheDocument();

        // //delete task
        const button_del = screen.getByTestId('btn-Сделать поставленную задачу');
        expect(button_del).toBeInTheDocument();
        fireEvent.click(button_del);
        expect(screen.queryByText('Сделать поставленную задачу')).toBeNull()
        expect(screen.queryByTestId('Сделать поставленную задачу')).toBeNull()
    })
    test("adding 4 todos", ()=>{
        mockRouter.push("/example")
        render(<Index />);
        const button_add = screen.getByText('Add task');
        const input_add = screen.getByPlaceholderText('task...')

        fireEvent.input(input_add, {
            target: {value: 'Купить пса'}
        });
        expect(screen.getByDisplayValue('Купить пса')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('Купить пса')).toBeInTheDocument();

        fireEvent.input(input_add, {
            target: {value: 'Write the poem'}
        });
        expect(screen.getByDisplayValue('Write the poem')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('Write the poem')).toBeInTheDocument();

        fireEvent.input(input_add, {
            target: {value: 'expect the todo 2'}
        });
        expect(screen.getByDisplayValue('expect the todo 2')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('expect the todo 2')).toBeInTheDocument();


        //add NoName to do
        fireEvent.input(input_add, {
            target: {value: ''}
        });
        fireEvent.click(button_add);
        expect(screen.queryByText('todo_4: ')).toBeNull();
        //

        fireEvent.input(input_add, {
            target: {value: 'todos'}
        });
        expect(screen.getByDisplayValue('todos')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('todos')).toBeInTheDocument();
        expect(screen.getByText('todo_4: todos')).toBeInTheDocument();
    })
})


