import { getAllMovies } from './movies';
import { httpService } from './http.service';

describe('test movie service', () => {
    const url = '?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

    it('http get service should be called', async () => {
        // using spy instead of jest.fn as we want to test the original implementation
        const spy = jest.spyOn( httpService, 'get');
        await getAllMovies(httpService, url);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    })

    it('http get service should be called', async () => {
        const movie = await getAllMovies(httpService, url);
        expect(movie.results.length).toEqual(20);
    })

});