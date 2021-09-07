import { IBingSearchResponse } from "../entities/IBingSearchResponse";
import { IGoogleSearchResponse } from "../entities/IGoogleSearchResponse";
import { SearchEngines } from "../entities/constants";
import { useApi } from "./useApi";
import { useMapper } from "./useMapper";

export const useSearch = () => {

    const { googleSearch, bingSearch } = useApi();
    const { mapResults } = useMapper();

    const searchItems = async (query: string, searchEngine: number) => {
        const promisesList: Promise<IGoogleSearchResponse | IBingSearchResponse>[] = [];

        switch (searchEngine) {
            case SearchEngines.Google:
                promisesList.push(googleSearch(query))
                break;

            case SearchEngines.Bing:
                promisesList.push(bingSearch(query))
                break;

            case SearchEngines.Both:
                promisesList.push(googleSearch(query))
                promisesList.push(bingSearch(query))
                break;
        }

        const data = await Promise.all(promisesList);
        return mapResults(data);
    }


    return { searchItems }
}