import styled from 'styled-components';

export const StyledCardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 16px;
    border-radius: 10px;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 400px;
    margin: 1rem;
    position: relative;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const StyledUrl = styled.a`
    color:blue;
    cursor: pointer;
    margin-bottom: 0.5rem;
    margin-right: 15px;
`

export const StyledTitle = styled.span`
    font-weight: bold;
`

export const StyledDescription = styled.span`
    font-size: 16px;
`

export const StyledImage = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 25px;
`