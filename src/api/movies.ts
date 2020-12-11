import { httpGet } from "../interface/http.interface";

// demonstration of dependency injection
export const getAllMovies = async (http:httpGet, url: string ) => {
    try {
        return (await http.get(url))
        .json();
    } catch (e: unknown) {
        // demonstration of new typescript 4.0 feature
        if (typeof e === "string") {
            console.error(e);
        }
        console.error(e);
    }
}
