import React, { useEffect, createContext, useReducer } from 'react';

import { List } from './List';
import './home.css';
import { getAllMovies } from '../../api/movies';
import {MovieReducer} from './Movie.reducer';

// demonstration of use of custom hooks
import { useDebounce } from '../../hooks/useDebounce';
import { Movie } from '../../interface/movie.interface';

import { httpService } from "../../api/http.service";


interface IHomeProps {

}

interface ContextMovie {
    movie: Movie
}

export const idContext = createContext<ContextMovie>({movie: {
    id: null,
    title: null,
    poster_path: null,
    overview: null
}});

const Home: React.FunctionComponent<IHomeProps> = () => {


    const [reducerMovies, dispatch] = useReducer(MovieReducer,[]);

    const [debouncedValue, setValue] = useDebounce<string>('', 1000);

    const getMovies = async () => {
        const url = '?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        const allMovies = await getAllMovies(httpService, url);
        // demonstration of advanced react hooks using useReducer, similar to redux
        dispatch({
            type: "populate",
            movies: allMovies.results
        });
    }
    useEffect(() => {
        getMovies();
    }, []);

    // demontration custom react hooks debounce function to be used on further input events
    useEffect(() => {
        console.log('debounce', debouncedValue);
    }, [debouncedValue]);

    const handleShuffleClick = () => {
        dispatch({
            type: "shuffle"
        })
    }

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

    }

    return (
        <>
        {/* demonstration of use of semantic HTML for accessiblity */}
        <section>
            <label>Debouncing using custom hooks</label>
            <input onChange={handleClick}/>
            <p>Debounced Value: {debouncedValue}</p>
        </section>
        <section>
            <button onClick={handleShuffleClick}>Shuffle</button>
            <ul className="movie-container">
                {
                    reducerMovies.map((item) => {
                        return <List key={item.id} item={item} />
                    })
                }
            </ul>
        </section>
        </>
    );
};

export default Home;
