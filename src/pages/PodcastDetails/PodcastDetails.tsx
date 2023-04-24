import { Outlet, useParams } from "react-router-dom";
import { usePodcasts } from "../../hooks/usePodcasts"
import styled from "styled-components";
import { usePodcastDetails } from "../../hooks/usePodcastDetails";
import EpisodesContext from "../../contexts/episodesContext";


export function PodcastDetails() {
    const { id } = useParams();
    const { podcasts, loading } = usePodcasts();
    const { episodes } = usePodcastDetails(Number(id));

    console.log("Render: PodcastDetails")

    const podcast = podcasts.find(podcast => podcast.id == Number(id));

    if (!podcast) {
        return null;
    }

    if (loading) {
        return <p>Loading...</p>
    }

    const { name, author, image, summary } = podcast;

    return <>
        <Wrapper>
            <DetailsWrapper>
                <ImageWrapper>
                    <img src={image} alt={`Cover art for ${name}`} />
                </ImageWrapper>
                <section>
                    <Name>{name}</Name>
                    <Author>{`by ${author}`}</Author>
                </section>
                <PodcastSummary>
                    <small>Description</small>
                    <Summary>{summary}</Summary>
                </PodcastSummary>
            </DetailsWrapper>
            <Content>
                <EpisodesContext.Provider value={episodes}>
                    <Outlet />
                </EpisodesContext.Provider>
            </Content>
        </Wrapper>
    </>
}

const Wrapper = styled.div`
    display: flex;
    gap: 48px;
`

const Name = styled.div`
    font-weight: bold;
`;
const Author = styled.div``;

const DetailsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 16px;
    border: 1px solid #0000001b;
    padding: 20px;
    height: 500px;
`
const Content = styled.section`
    flex: 1;
`;

const PodcastSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: scroll;

    & > small {
        font-weight: bold;
    }
`;

const Summary = styled.div`
    font-size: 0.815rem;
`;

const ImageWrapper = styled.div`
    align-self: center;
`;
