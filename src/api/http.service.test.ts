
import { BASE_URL } from '../util/constants';
import {constructUrl, httpService} from './http.service';
import pipe from 'lodash/fp/pipe';


jest.mock('lodash/fp/pipe');

const mockPipe = pipe as jest.Mock;


describe('testing http services', () => {
    const url = '/abc';
    it('constructUrl function should return correct url from the given url', () => {
        expect(constructUrl(url)).toEqual(BASE_URL + url);
    });

    it('http service get function to be called with a lodash pipe', async () => {
        mockPipe.mockReturnValueOnce(() => {})
        httpService.get(url);
        expect(mockPipe).toHaveBeenCalled();
    })
})