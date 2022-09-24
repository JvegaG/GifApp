import React from 'react';
import { render, screen } from '@testing-library/react'
import { GifGrid, OptionEnum } from '../../src/Components/_Component.index'
import { useFetchGiphy } from '../../src/Hooks/useFetchGiphy'
import { ImagesProps } from '../../src/Models/GifModels'

jest.mock('../../src/Hooks/useFetchGiphy');

describe('Test <GifGrid /> element', () => {

    const _searchText = 'Dragon';
    const _optionSearch = OptionEnum.GIFT;

    test('Initialize process', () => {

        (useFetchGiphy as jest.Mock).mockReturnValue({
            imagesData: [],
            isLoading: true,
            pagination: {}
        })

        render(<GifGrid searchText={_searchText} optionSearch={_optionSearch} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(_searchText));

    })

    test('Analize data obtained from hook', () => {

        const giphyImages: ImagesProps[] = [
            {
                id: 'abc',
                imageUrl: 'https://url.goku.jpg',
                title: 'Goku pequeño'
            },
            {
                id: 'abc',
                imageUrl: 'https://url.goku.jpg',
                title: 'Goku pequeño'
            },
        ];

        (useFetchGiphy as jest.Mock).mockReturnValue({
            imagesData: giphyImages,
            isLoading: true,
            pagination: {}
        })

        render(<GifGrid searchText={_searchText} optionSearch={_optionSearch} />)

        const imageHtmlElements = screen.getAllByRole('img');
        expect(imageHtmlElements.length).toBeGreaterThan(0);
        expect(imageHtmlElements.length).toBe(giphyImages.length);


    })

})