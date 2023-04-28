import { Result } from "../types/applePodcastTypes";

const parseDate = (date: string) =>
    date.split("T")[0].split("-").reverse().join("/");

export class Episode {
    private _id: string;
    private _title: string;
    private _description: string | undefined;
    private _date: string;
    private _durationInMilliseconds: number;
    private _audioUrl: string | undefined;

    public static fromResult(result: Result): Episode {
        return new Episode(
            result.trackId.toString(),
            result.trackName,
            result.description,
            parseDate(result.releaseDate),
            result.trackTimeMillis,
            result.episodeUrl
        );
    }

    private constructor(
        id: string,
        title: string,
        description: string | undefined,
        date: string,
        durationInMilliseconds: number,
        audioUrl: string | undefined
    ) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._date = date;
        this._durationInMilliseconds = durationInMilliseconds;
        this._audioUrl = audioUrl;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get description(): string | undefined {
        return this._description;
    }

    get date(): string {
        return this._date;
    }

    get durationInMilliseconds(): number {
        return this._durationInMilliseconds;
    }

    get audioUrl(): string | undefined {
        return this._audioUrl;
    }
}
