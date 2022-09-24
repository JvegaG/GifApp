import { renderHook, waitFor } from '@testing-library/react'

import { OptionEnum } from '../../src/Components/SelectOption';
import { useFetchGiphy } from '../../src/Hooks/useFetchGiphy';

describe('testing useFetchGiphy custom Hook', () => {

    const _search = 'Goku';
    const _option = OptionEnum.GIF;
    const _offset = 0;

    test('should get initial data', () => {

        const { result } = renderHook(() => useFetchGiphy(_search, _option, _offset));
        const { imagesData, isLoading, pagination } = result.current

        expect(imagesData.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })

    test('should get an array of images and isLoading parameter with true value', async () => {

        const { result } = renderHook(() => useFetchGiphy(_search, _option, _offset));

        await waitFor(
            () => expect(result.current.imagesData.length).toBeGreaterThan(0)       // wait to this condition will executed
        );

        const { imagesData, isLoading, pagination } = result.current

        expect(imagesData.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    })

})