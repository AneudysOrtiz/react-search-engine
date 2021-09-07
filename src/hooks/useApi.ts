import axios from "axios";
import { IBingSearchResponse } from "../entities/IBingSearchResponse";
import { IGoogleSearchResponse } from "../entities/IGoogleSearchResponse";

const BING_API_KEY = '095b83c3c7954874b4212b9227c3c442'
const GOOGLE_API_KEY = 'AIzaSyAuYucO0jCa1lYfWd235tyJRxb8aGVGKUI'
const GOOGLE_API_CX = '4cf935c13c0e105dc'

const GoogleAPI = axios.create({
    baseURL: "https://customsearch.googleapis.com/customsearch",
    headers: {
        "Content-type": "application/json",
    },
    params: {
        key: GOOGLE_API_KEY,
        cx: GOOGLE_API_CX
    }
})

const BingAPI = axios.create({
    baseURL: "https://api.bing.microsoft.com",
    headers: {
        "Content-type": "application/json",
        'Ocp-Apim-Subscription-Key': BING_API_KEY
    }
})

export const useApi = () => {

    const googleSearch = async (searchParams: string) => {
        console.log(searchParams)
        const { data: results } = await GoogleAPI.get<IGoogleSearchResponse>('v1', { params: { q: searchParams, num: 5 } });
        return results;
    }

    const bingSearch = async (searchParams: string) => {
        const { data: results } = await BingAPI.get<IBingSearchResponse>(`/v7.0/search?`, { params: { q: searchParams } })
        return results;
    }

    return { googleSearch, bingSearch }
}