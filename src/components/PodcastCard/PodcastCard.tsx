import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
    id: number;
    name: string;
    author: string;
    image: string;
}

export function PodcastCard({ id, name, author, image }: Props) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/podcast/${id}`);
    }

    return (
        <Wrapper key={id} onClick={handleNavigation}>
            <ImageContainer>
                <ImageWrapper src={image} alt={`Cover of ${name} podcast`} />
            </ImageContainer>
            <Details>
                <PodcastName>{name}</PodcastName>
                <PodcastAuthor>{author}</PodcastAuthor>
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