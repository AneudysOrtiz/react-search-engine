import { StyledCardContainer, StyledDescription, StyledImage, StyledTitle, StyledUrl } from './styles'

import React from 'react'
import bingIcon from "../../assets/bing.png";
import googleIcon from "../../assets/google.png";

export interface ICardProps {
    url: string,
    title: string,
    description: string,
    source: string,
}

export const Card = ({ url, title, description, source }: ICardProps) => {

    const logoUrl = () => {
        return source === "Google" ? googleIcon : bingIcon;
    }

    return (
        <StyledCardContainer>
            <StyledImage data-testid='image' src={logoUrl()}></StyledImage>
            <StyledUrl data-testid='url' href={url} target="_blank">{url}</StyledUrl>
            <StyledTitle data-testid='title'>{title}</StyledTitle>
            <StyledDescription data-testid='description' >{description}</StyledDescription>
        </StyledCardContainer>
    )
}
