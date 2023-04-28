export interface Podcast {
    id: number;
    name: string;
    author: string;
    summary: string;
    image: string;
}

export interface Episode {
    id: number;
    title: string;
    description: string | undefined;
    date: string;
    durationInMilliseconds: number;
    audioUrl: string | undefined;
}