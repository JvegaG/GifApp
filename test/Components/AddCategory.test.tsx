import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/Components/AddCategory'

describe('View funcionality of AddCategory Component', () => {

    test('view input on change', () => {
        render(<AddCategory onAddCategory={() => { }} />)
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input, { target: { value: 'Naruto' } });
        expect(input.value).toBe('Naruto');

        // screen.debug();
    })


    test('Analize submit funcion and the function call in the prop types', () => {
        const inputValue = 'Shingeky'
        const addCategoryFunction = jest.fn();

        render(<AddCategory onAddCategory={addCategoryFunction} />)

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;       //need 'aria-label'

        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);

        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(addCategoryFunction).toHaveBeenCalled();
        expect(addCategoryFunction).toHaveBeenCalledTimes(1);
        expect(addCategoryFunction).toHaveBeenCalledWith(inputValue)
    })

    test('should not been call the function of prop types', () => {

        const addCategoryFunction = jest.fn();

        render(<AddCategory onAddCategory={addCategoryFunction} />)

        const form = screen.getByRole('form') as HTMLFormElement;

        fireEvent.submit(form);

        expect(addCategoryFunction).not.toHaveBeenCalled();
    })
})