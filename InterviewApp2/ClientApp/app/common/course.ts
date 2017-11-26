export interface Course {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    date: Date;
    spots: number;
    freeSpots: number;
}
