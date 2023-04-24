import React from "react";
import EpisodesContext from "../../contexts/episodesContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export function PodcastEpisodeDetails() {
    const { episodeId } = useParams();
    const episodes = React.useContext(EpisodesContext);

    const episode = episodes.find(episode => episode.id == Number(episodeId));

    if (!episode) {
        return null;
    }

    return (
        <>
            <Title>{episode.title}</Title>
            <Content>
                <div>{episode.description}</div>
                <Audio controls role="audio">
                    <source src={episode.audioUrl} type="audio/mpeg" />
                </Audio>
            </Content>
        </>
    );
}

const Title = styled.h2`
    margin-bottom: 16px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Audio = styled.audio`
    width: 100%;
`;