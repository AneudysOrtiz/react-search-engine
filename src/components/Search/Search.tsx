import { StyledBannerSection, StyledButton, StyledControls, StyledInput, StyledLoading, StyledResultsContainer, StyledSearchContainer, StyledSelect, StyledSeparator } from './styles';

import { Card } from '../Card/Card';
import { MappedResults } from '../../hooks/useMapper';
import { SearchEngines } from '../../entities/constants';
import bingLogo from "../../assets/bing-banner.png";
import googleLogo from "../../assets/google-banner.png";
import loadingImg from "../../assets/loading.svg";
import { useSearch } from '../../hooks/useSearch';
import { useState } from 'react'

export const Search = () => {
    const [query, setQuery] = useState("");
    const [searchEngine, setSearchEngine] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState<MappedResults[]>([]);
    const { searchItems } = useSearch();

    const handleSubmit = async () => {
        setLoading(true);
        setSearchResults(await searchItems(query, searchEngine));
        setLoading(false)
    }

    const handleInputChange = (event: any) => { setQuery(event.target.value) }

    const handleSelectChange = (event: any) => setSearchEngine(parseInt(event.target.value))

    const renderOptions = () => {
        const options = Object.keys(SearchEngines).map((key) => {
            const value = (SearchEngines as any)[key];
            return <option value={value} key={key}>{key}</option>
        });
        return options;
    }

    return (
        <>
            <StyledBannerSection>
                <img src={googleLogo} alt="Logo" />
                <StyledSeparator />
                <img src={bingLogo} alt="Logo" />
            </StyledBannerSection>

            <StyledSearchContainer>
                <StyledControls>
                    <StyledInput placeholder="Search a topic..." value={query} onChange={handleInputChange} />
                    <StyledSelect value={searchEngine} onChange={handleSelectChange}>
                        <option value={0}>-Select Engine-</option>
                        {renderOptions()}
                    </StyledSelect>
                </StyledControls>

                <StyledButton onClick={handleSubmit}>Search</StyledButton>

            </StyledSearchContainer>

            {
                loading ?
                    <StyledLoading src={loadingImg} alt="loading" />
                    : <StyledResultsContainer>
                        {searchResults.map(item => <Card {...item} />)}
                    </StyledResultsContainer>
            }
        </>
    )
}
