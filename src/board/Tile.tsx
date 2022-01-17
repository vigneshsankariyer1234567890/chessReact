import { Piece } from "../piece/Piece";
import EmptyTileError from "./exceptions/EmptyTileError";

export class Tile {
    
    readonly size: number;
    readonly x: number;
    readonly y: number;
    readonly tileColour: TileColour;
    private piece: Piece | undefined;

    constructor(size = 1, x: number, y: number, tileColour: TileColour, piece?: Piece | undefined){
        this.size = size;
        this.x = x;
        this.y = y;
        this.tileColour = tileColour;
        this.piece = piece;
    }

    public getStringRepresentation(): string {
        return xToLetterMapper(this.x) + yToCharMapper(this.y);
    }

    public isEmpty(): boolean {
        return this.piece ? true : false;
    }

    public getPiece(): Piece {
        if (this.piece) {
            return this.piece;
        }

        throw new EmptyTileError();
    }

}

export enum TileColour {
    WHITE, BLACK
}

const letterMapper = ["A","B","C","D","E","F","G","H"];

const xToLetterMapper = (x: number) => letterMapper[x]

const yToCharMapper = (y: number) => (y+1).toString();