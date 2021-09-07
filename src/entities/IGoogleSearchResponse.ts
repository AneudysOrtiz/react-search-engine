export interface IGoogleSearchResponse {
    items: Item[];
}

export interface Item {
    kind:        string;
    title:       string;
    htmlTitle:   string;
    link:        string;
    displayLink: string;
    snippet:     string;
    htmlSnippet: string;
    mime:        string;
    fileFormat:  string;
    image:       Image;
}

export interface Image {
    contextLink:     string;
    height:          number;
    width:           number;
    byteSize:        number;
    thumbnailLink:   string;
    thumbnailHeight: number;
    thumbnailWidth:  number;
}

export interface IMixedSearchResults {
    
}