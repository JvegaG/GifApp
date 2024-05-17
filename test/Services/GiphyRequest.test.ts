import { getGiftBySearch, searchRequestOptions } from '../../src/Services/GiphyRequest'

describe('Verify GiphyRequest.ts File', () => {

    const input: searchRequestOptions = {
        search: 'goku',
        limit: 10,
        offset: 0
    }

    test('should verify if receive everything you want ', async () => {

        const { data } = await getGiftBySearch(input);

        expect(data.length).toBeGreaterThan(0);
        expect(data[0]).toEqual(expect.objectContaining({
            id: expect.any(String),
            images: expect.any(Object),
            title: expect.any(String)
        }))

    })
})