import { useParams } from "react-router-dom";
import { usePodcasts } from "../../hooks/usePodcasts"
import styled from "styled-components";
import { usePodcastDetails } from "../../hooks/usePodcastDetails";

export function PodcastDetails() {
    const { id } = useParams();
    const { podcasts, loading } = usePodcasts();
    const { episodes } = usePodcastDetails(Number(id));

    const podcast = podcasts.find(p => p.id == Number(id));

    if (!podcast) {
        return null;
    }

    if (loading) {
        return <p>Loading...</p>
    }

    const { name, author, image, summary } = podcast;

    return <>
        <DetailsWrapper>
            <ImageWrapper>
                <img src={image} alt={`Cover art for ${name}`} />
            </ImageWrapper>
            <div>{name}</div>
            <div>{`by ${author}`}</div>
            <div>
                <div>Description</div>
                {summary}
            </div>
        </DetailsWrapper>
        <EpisodesWrapper>
            <div>Episodes: {episodes.length}</div>
        </EpisodesWrapper>
    </>
}

const DetailsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 16px;
    border: 1px solid #0000001b;
    padding: 16px;
`

const ImageWrapper = styled.div`
    align-self: center;
`;

const EpisodesWrapper = styled.section``;