import { Tile, TileColour } from './Tile';
import IncorrectBoardCoordinateError from './exceptions/IncorrectBoardCoordinateError';
import { Piece } from '../piece/Piece';

export default class ChessBoard {

    public static readonly TILE_SIZE = 1;
    public static readonly X_COUNT = 8;
    public static readonly Y_COUNT = 8;
    private tileMatrix: Array<Array<Tile>>;

    constructor() {
        this.tileMatrix = new Array();
        this.awake();
    }

    private awake() {
        this.generateAllTiles(ChessBoard.TILE_SIZE, ChessBoard.X_COUNT, ChessBoard.Y_COUNT);
    }

    private generateAllTiles(tileSize: number, xCount: number, yCount: number) {
        this.tileMatrix = new Array<Array<Tile>>(xCount);

        for (let i = 0; i < xCount; i++) {
            this.tileMatrix[i] = new Array<Tile>(yCount);
            for (let j = 0; j < yCount; j++) {
                this.tileMatrix[i][j] = new Tile(tileSize, i, j, (i+j)%2 == 0 ? TileColour.BLACK : TileColour.WHITE);
            }
        }
    }

    public getTileMatrix(inverted: boolean): Array<Array<Tile>> {
        if (!inverted) {
            return this.tileMatrix;
        }

        let copy: Array<Array<Tile>>;

        copy = new Array<Array<Tile>>(this.tileMatrix.length);

        for (let i = 0; i < this.tileMatrix.length; i++) {
            copy[i] = new Array<Tile>(this.tileMatrix[i].length);
            for (let j = 0; j < this.tileMatrix[i].length; j++) {
                copy[i][j] = this.getInvertedTile(i, j);
            }
        }

        return copy;
    }

    protected getInvertedTile(row: number, column: number): Tile {
        if (row < 0 || column < 0 || row >= this.tileMatrix.length || column >= this.tileMatrix[row].length) {
            throw new IncorrectBoardCoordinateError();
        };

        return this.tileMatrix[this.tileMatrix.length - row - 1][column];
    }

    public getTile(row: number, column: number): Tile {
        if (row < 0 || column < 0 || row >= this.tileMatrix.length || column >= this.tileMatrix[row].length) {
            throw new IncorrectBoardCoordinateError();
        };

        return this.tileMatrix[row][column];
    }

    public getCurrentTileOfPiece(piece: Piece): Tile {
        throw new Error("Method not implemented.");
    }
}