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
                    {podcasts.map(({ id, name, author, image }) => (<article key={id}>
                        <h3>{name}</h3>
                        {author}
                        <img src={image} alt={`Cover of ${name} podcast`} />
                    </article>))}
                </section>
            }
        </>
    )
}