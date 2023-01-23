import Index from "../pages";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BoardList from "../pages/api/BoardList.json";



describe('boards', ()=>{

    test('Доски', () => {
        render(<Index />);
        const button_add = screen.getByTestId(/buton/i);
        const input_add = screen.getByPlaceholderText('something...')
        expect(button_add).toBeInTheDocument();
        expect(input_add).toBeInTheDocument();
        //add board
        fireEvent.input(input_add, {
            target: {value: 'Board 2'}
        });
        expect(screen.getByDisplayValue('Board 2')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId('Board 2')).toBeInTheDocument();

        //delete Board 2
        const button_del = screen.getByTestId('btn-Board 2');
        expect(button_del).toBeInTheDocument();
        fireEvent.click(button_del);
        expect(screen.queryByText('Board 2')).toBeNull()
        expect(screen.queryByTestId('Board 2')).toBeNull()
    })
    test('Add NoName board', ()=>{
        render(<Index/>);
        const button_add = screen.getByTestId(/buton/i);
        const input_add = screen.getByPlaceholderText('something...')
        fireEvent.input(input_add, {
            target: {value: ''}
        });
        expect(screen.getByDisplayValue('')).toBeInTheDocument();
        fireEvent.click(button_add);
        expect(screen.queryByTestId("btn-")).toBeNull()
    })

    test('Доски, созданные по умолчанию', () => {
        render(<Index/>);
        BoardList.map((item) => {
            expect(screen.queryByTestId(item.name.toString()))
        })
    })

});



