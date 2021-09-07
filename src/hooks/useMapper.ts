import { IBingSearchResponse } from "../entities/IBingSearchResponse";
import { IGoogleSearchResponse } from "../entities/IGoogleSearchResponse";

export interface MappedResults {
    url: string,
    title: string,
    description: string,
    source: string
}

export const useMapper = () => {

    const mapResults = (source: (IBingSearchResponse | IGoogleSearchResponse)[]) => {
        let target: MappedResults[] = [];

        for (let searchResult of source) {
            if ((searchResult as IGoogleSearchResponse).items) {
                const items = (searchResult as IGoogleSearchResponse).items.map((item) => {
                    return {
                        url: item.link,
                        title: item.title,
                        description: item.snippet,
                        source: "Google"
                    }
                });
                target = [...target, ...items];
            } else if ((searchResult as IBingSearchResponse).webPages) {
                const items = (searchResult as IBingSearchResponse).webPages.value.map((item) => {
                    return {
                        url: item.url,
                        title: item.name,
                        description: item.snippet,
                        source: "Bing"
                    }
                });
                target = [...target, ...items];
            }
        }

        return target;
    }

    return { mapResults }
}