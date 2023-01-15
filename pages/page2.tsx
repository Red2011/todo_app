import React, { useState } from 'react';

function Page2() {
    const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
    const [value, setValue] = useState('');

    const result = arr.map((element, index) => {
        return <p key={index}>{element}</p>;
    });

    return (
        <div>
        {result}
        <input className="w" value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={event => setArr([...arr, value])}>Добавить элемент</button>
        </div>
        )

}

export default Page2;