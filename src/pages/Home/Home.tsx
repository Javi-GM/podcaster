import { useState, useMemo } from 'react';
import styled from "styled-components";
import { PodcastCard } from "../../components/PodcastCard";
import { usePodcasts } from "../../hooks/usePodcasts";

export const Home = () => {
    const { podcasts, loading, error } = usePodcasts();

    if (error) {
        console.error(error);

        return null;
    }

    const [search, setSearch] = useState<string>('');

    const filteredPodcasts = useMemo(() => {
        if (!search) {
            return podcasts;
        }

        return podcasts.filter(({ name, author }) => {
            return name.toLowerCase().includes(search.toLowerCase())
                || author.toLowerCase().includes(search.toLowerCase());
        });
    }, [search, podcasts]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <Search>
                <PodcastCounter>{filteredPodcasts.length}</PodcastCounter>
                <SearchInput
                    type="text"
                    name="search"
                    aria-label="Filter podcasts by name or author"
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search for a podcast...'
                />
            </Search>
            {!loading &&
                <PodCastsSection aria-label="Most popular podcasts on Apple Podcasts">
                    {filteredPodcasts.map((podcast) => (
                        <PodcastCard
                            podcast={podcast}
                        />
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

const Search = styled.div`
    display: flex;
    gap: 16px;
    justify-content: end;
`;

const SearchInput = styled.input`
    padding: 2px 4px;
`;

const PodcastCounter = styled.span`
    background: #5c9bff;
    padding: 8px;
    border-radius: 4px;
    color: white;
`;