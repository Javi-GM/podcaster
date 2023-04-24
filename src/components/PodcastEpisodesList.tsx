import React from "react";
import EpisodesContext from "../contexts/episodesContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const parseDuration = (duration: number) => {
    const durationInSeconds: number = Math.floor(duration / 1000);
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function PodcastEpisodesList() {
    const { id } = useParams();
    const episodes = React.useContext(EpisodesContext);

    return (
        <>
            <Header>Episodes: {episodes.length}</Header>
            <ListOfEpisodes>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map(({ id: episodeId, title, date, durationInMilliseconds }) => (
                            <tr key={episodeId}>
                                <td>{<a href={`/podcast/${id}/episodes/${episodeId}`}>{title}</a>}</td>
                                <td>{date}</td>
                                <td>{parseDuration(durationInMilliseconds)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ListOfEpisodes>
        </>
    );
}

const Header = styled.h2`
    padding: 8px 16px;
    font-size: 1.25rem;
`;

const ListOfEpisodes = styled.main`
    margin-top: 24px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border-top: 1px solid #0000001b;
        border-bottom: 1px solid #0000001b;

        padding: 8px 16px;
        text-align: left;
    }
    tr:nth-child(even) {
        background-color: #a8a8a81b;
    }
`;
