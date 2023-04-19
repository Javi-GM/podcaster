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
                <section aria-label="Most popular podcasts on Apple Podcasts">
                    {podcasts.map(({ id }) => (<article key={id}></article>))}
                </section>
            }
        </>
    )
}