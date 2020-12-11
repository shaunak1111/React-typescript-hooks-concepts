import React from 'react';
import {Movie} from '../../interface/movie.interface';
import {IMG_PATH} from '../../util/constants';


export const List: React.FunctionComponent<{item: Movie}> = ({item}): JSX.Element => {
    const handleClick = () => {   
        // dispatch({
        //     type:"increment",
        //     id: item.id
        // })         
    }

    // we are specifying the img width and height so that the browser calculates the CLS faster
    // ideally there should be blank SVG's https://web.dev/optimize-cls/
    // Also attribute loading="lazy" helps lazy load the images in the view, for older browsers use intersection API

    return (
            <li onClick={handleClick} className="movie-list" >
                <img src={IMG_PATH + '/w300' + item.poster_path}
                srcSet={`${IMG_PATH}/w300${item.poster_path} 500w, ${IMG_PATH}/w400${item.poster_path} 1000w, ${IMG_PATH}/w500${item.poster_path} 1500w`}
                width="300px" height="500px"  loading="lazy"/>
                <p>{item.title}</p>
            </li>
        )
}