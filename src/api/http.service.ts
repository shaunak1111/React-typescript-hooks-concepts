// to reduce the final build size, use lodash like this
import pipe from 'lodash/fp/pipe';   
import { BASE_URL } from '../util/constants';


export const constructUrl = (url: string) => BASE_URL + url;

// demonstration of functional programming
function get(url: string): Promise<Response> {
    return pipe(
        constructUrl,
        fetch
    )(url)
}

export const httpService = {
    get
}

