import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import GifLookingApp from '../../src/Pages/GifLookingApp'

describe('Testing <GifLookingApp />', () => {

    test('should analize initial states', () => {

        render(<GifLookingApp />);
        // screen.debug();
        expect(screen.getByText('GifLookingApp'))
        expect(screen.getByText('...Empty...'))

        const checkboxGif = screen.getByLabelText('GifUrl') as HTMLInputElement

        expect(checkboxGif.checked).toBeTruthy();

    })

    test('should analize if show image', async () => {

        const inputValue = 'goku';
        render(<GifLookingApp />);

        const inputElement = screen.getByPlaceholderText('Buscar Gif o Sticker') as HTMLInputElement;
        fireEvent.input(inputElement, { target: { value: inputValue } });

        const form = screen.getByRole('form') as HTMLFormElement;
        fireEvent.submit(form);

        await waitFor(
            () => expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
        );

        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);


    })


})