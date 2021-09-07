import styled from 'styled-components';

export const StyledBannerSection = styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    img{
        max-height: 100px;
    }
`
export const StyledSeparator = styled.div`
    border-left: 2px solid black;
    height: 80px;
    margin: 1.5rem;
`

export const StyledSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;

export const StyledButton = styled.button`
    width: 150px;
    height: 60px;
    background: dodgerblue;
    border-radius: 6px;
    border:none;
    font-size: 20px;
    color: white;
`

export const StyledInput = styled.input`
    padding: 1rem;
    margin: 0 1rem;
    width: 400px;
    border-radius: 5px;
`

export const StyledSelect = styled.select`
    height: 60px;
    border-radius: 5px;
`

export const StyledControls = styled.div`
    margin-bottom: 1rem;
`

export const StyledResultsContainer = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
`

export const StyledLoading = styled.img`
    margin-top: 2rem;
`