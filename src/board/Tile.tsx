export class Tile {
    readonly size: number;
    readonly x: number;
    readonly y: number;
    readonly tileColour: TileColour;

    constructor(size = 1, x: number, y: number, tileColour: TileColour){
        this.size = size;
        this.x = x;
        this.y = y;
        this.tileColour = tileColour;
    }

    public getStringRepresentation(): string {
        return xToLetterMapper(this.x) + yToCharMapper(this.y);
    }

}

export enum TileColour {
    WHITE, BLACK
}

const letterMapper = ["A","B","C","D","E","F","G","H"];

const xToLetterMapper = (x: number) => letterMapper[x]

const yToCharMapper = (y: number) => (y+1).toString();