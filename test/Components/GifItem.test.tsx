import React from 'react'
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/Components/_Component.index'
import { ImagesProps } from '../../src/Models/GifModels'

describe('<GifItem> Testing', () => {

    const imageTest: ImagesProps = {
        id: '2',
        title: 'Goku',
        imageUrl: 'https://dragonball.com/goku'
    }

    test('Create snapshot', () => {
        const { container } = render(<GifItem {...imageTest} />,);

        expect(container).toMatchSnapshot();
    })


    test('Analize if image contains fields correctly', () => {
        render(<GifItem {...imageTest} />,);

        // expect((screen.getByRole('img') as HTMLImageElement).src).toBe(imageTest.imageUrl);
        // expect((screen.getByRole('img') as HTMLImageElement).alt).toBe(imageTest.title);

        const { src, alt} = screen.getByRole('img') as HTMLImageElement;

        expect(src).toBe(imageTest.imageUrl);
        expect(alt).toBe(imageTest.title);

    })

    test('Analize if contains title', () => {
        render(<GifItem {...imageTest} />,);

        expect(screen.getByText(imageTest.title)).toBeTruthy();

    })


})