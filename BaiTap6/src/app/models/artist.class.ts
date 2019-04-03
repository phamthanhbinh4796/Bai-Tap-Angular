import { Image } from '../models/image.class';
export class Artist {
    artists: any;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    genres: string[];
}