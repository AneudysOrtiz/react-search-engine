export interface IBingSearchResponse {
    _type:           string;
    queryContext:    QueryContext;
    webPages:        WebPages;
    entities:        Entities;
    images:          Images;
    relatedSearches: RelatedSearches;
    videos:          Videos;
    rankingResponse: RankingResponse;
}

export interface Entities {
    value: EntitiesValue[];
}

export interface EntitiesValue {
    id:                     string;
    contractualRules:       ContractualRule[];
    webSearchUrl:           string;
    name:                   string;
    url:                    string;
    image:                  Image;
    description:            string;
    entityPresentationInfo: EntityPresentationInfo;
    bingId:                 string;
}

export interface ContractualRule {
    _type:                string;
    targetPropertyName:   string;
    mustBeCloseToContent: boolean;
    license?:             License;
    licenseNotice?:       string;
    text?:                string;
    url?:                 string;
}

export interface License {
    name: string;
    url:  string;
}

export interface EntityPresentationInfo {
    entityScenario:  string;
    entityTypeHints: string[];
}

export interface Image {
    name:         string;
    thumbnailUrl: string;
    provider:     Provider[];
    hostPageUrl:  string;
    width:        number;
    height:       number;
    sourceWidth:  number;
    sourceHeight: number;
}

export interface Provider {
    _type: string;
    url:   string;
}

export interface Images {
    id:               string;
    readLink:         string;
    webSearchUrl:     string;
    isFamilyFriendly: boolean;
    value:            ImagesValue[];
}

export interface ImagesValue {
    webSearchUrl:       string;
    name:               string;
    thumbnailUrl:       string;
    datePublished:      string;
    contentUrl:         string;
    hostPageUrl:        string;
    contentSize:        string;
    encodingFormat:     PurpleEncodingFormat;
    hostPageDisplayUrl: string;
    width:              number;
    height:             number;
    thumbnail:          Thumbnail;
}

export enum PurpleEncodingFormat {
    JPEG = "jpeg",
    PNG = "png",
}

export interface Thumbnail {
    width:  number;
    height: number;
}

export interface QueryContext {
    originalQuery: string;
}

export interface RankingResponse {
    mainline: Mainline;
    sidebar:  Mainline;
}

export interface Mainline {
    items: Item[];
}

export interface Item {
    answerType:   string;
    resultIndex?: number;
    value:        ItemValue;
}

export interface ItemValue {
    id: string;
}

export interface RelatedSearches {
    id:    string;
    value: RelatedSearchesValue[];
}

export interface RelatedSearchesValue {
    text:         string;
    displayText:  string;
    webSearchUrl: string;
}

export interface Videos {
    id:               string;
    readLink:         string;
    webSearchUrl:     string;
    isFamilyFriendly: boolean;
    value:            VideosValue[];
    scenario:         string;
}

export interface VideosValue {
    webSearchUrl:        string;
    name:                string;
    description:         string;
    thumbnailUrl:        string;
    datePublished:       string;
    publisher:           Publisher[];
    isAccessibleForFree: boolean;
    contentUrl:          string;
    hostPageUrl:         string;
    encodingFormat:      FluffyEncodingFormat;
    hostPageDisplayUrl:  string;
    width:               number;
    height:              number;
    duration:            string;
    motionThumbnailUrl?: string;
    embedHtml:           string;
    allowHttpsEmbed:     boolean;
    viewCount:           number;
    thumbnail:           Thumbnail;
    allowMobileEmbed:    boolean;
    isSuperfresh:        boolean;
}

export enum FluffyEncodingFormat {
    Mp4 = "mp4",
}

export interface Publisher {
    name: Name;
}

export enum Name {
    YouTube = "YouTube",
}

export interface WebPages {
    webSearchUrl:          string;
    totalEstimatedMatches: number;
    value:                 WebPagesValue[];
    someResultsRemoved:    boolean;
}

export interface WebPagesValue {
    id:               string;
    name:             string;
    url:              string;
    isFamilyFriendly: boolean;
    displayUrl:       string;
    snippet:          string;
    dateLastCrawled:  string;
    language:         Language;
    isNavigational:   boolean;
}

export enum Language {
    En = "en",
    Es = "es",
}
