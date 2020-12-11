
import { Movie } from "../../interface/movie.interface";
import { getRandomInt } from "../../util/common-util";

type State = Movie[];

type Actions = 
| {type: "shuffle"}
| {type: "populate", movies: Movie[]}


export const  MovieReducer  = (state: State, action: Actions) => {
    switch (action.type) {
      case 'shuffle':
        const random = getRandomInt(state.length);
        // return [...state.slice(1), ...state.slice(0, 1)];
        return [...state.slice(random), ...state.slice(0, random)];
      case "populate":
          return [...action.movies]
      default:
        return state;
    }
}