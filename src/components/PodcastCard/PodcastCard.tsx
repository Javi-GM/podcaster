import styled from "styled-components";

interface Props {
    id: number;
    name: string;
    author: string;
    image: string;
}

export function PodcastCard({ id, name, author, image }: Props) {
    return (
        <Wrapper key={id}>
            <ImageContainer>
                <ImageWrapper src={image} alt={`Cover of ${name} podcast`} />
            </ImageContainer>
            <Details>
                <h3>{name}</h3>
                {author}
            </Details>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    border: 1px solid hsla(0, 0%, 0%, 0.15);
    width: 250px;
    height: 175px;

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