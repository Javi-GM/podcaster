import { Entry } from "../types/applePodcastTypes";

export class Podcast {
    private _id: number;
    private _name: string;
    private _author: string;
    private _summary: string;
    private _image: string;

    public static fromApplePodcastEntry(applePodcastEntry: Entry): Podcast {
        return new Podcast(
            Number(applePodcastEntry.id.attributes["im:id"]),
            applePodcastEntry["im:name"].label,
            applePodcastEntry["im:artist"].label,
            applePodcastEntry.summary.label,
            applePodcastEntry["im:image"][2].label
        );
    }

    private constructor(
        id: number,
        name: string,
        author: string,
        summary: string,
        image: string
    ) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._summary = summary;
        this._image = image;
    }

    get id(): number {
        return this._id;
    }

    get author(): string {
        return this._author;
    }

    get name(): string {
        return this._name;
    }

    get summary(): string {
        return this._summary;
    }

    get image(): string {
        return this._image;
    }
}
