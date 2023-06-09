import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Podcast } from "../models/Podcast";

interface Props {
    podcast: Podcast
    onClick: () => void
}

export function PodcastCard({ podcast, onClick }: Props) {

    return (
        <Wrapper key={podcast.id} onClick={onClick}>
            <ImageContainer>
                <ImageWrapper src={podcast.image} alt={`Cover of ${podcast.name} podcast`} />
            </ImageContainer>
            <Details>
                <PodcastName>{podcast.name}</PodcastName>
                <PodcastAuthor>{podcast.author}</PodcastAuthor>
            </Details>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    border: 1px solid hsla(0, 0%, 0%, 0.15);
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.10), 0 4px 11px hsla(0, 0%, 0%, 0.10);
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-inline: 16px;
`;

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    margin-block: -32px 16px;
    margin-inline: auto;
`;

const ImageWrapper = styled.img`
    border-radius: 50%;
`;

const PodcastName = styled.h3`
    overflow: hidden;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: ellipsis;
    text-align: center;
`;

const PodcastAuthor = styled.span`
    font-size: 0.975rem;
    font-weight: 600;
    color: #0000008d;
    text-align: center;
`;