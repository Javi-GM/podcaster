import styled from "styled-components";
import { PodcastCard } from "../../components/PodcastCard/PodcastCard";
import { usePodcasts } from "../../hooks/usePodcasts";

export const Home = () => {
    const { podcasts, loading, error } = usePodcasts();

    if (error) {
        console.error(error);

        return null;
    }

    return (
        <>
            <h1>Podcaster</h1>
            {!loading &&
                <PodCastsSection aria-label="Most popular podcasts on Apple Podcasts">
                    {podcasts.map(({ id, name, author, image }) => (
                        <PodcastCard key={id} id={id} name={name} author={author} image={image} />
                    ))}
                </PodCastsSection>
            }
        </>
    )
}

const PodCastsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 24px;
    grid-row-gap: 56px;
    margin-block-start: 64px;
`;