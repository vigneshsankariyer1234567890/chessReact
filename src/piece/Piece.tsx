import ChessBoard from "../board/ChessBoard";
import { Tile } from "../board/Tile";
import DirectionVector from "../move/DirectionVector";

export abstract class Piece {
    
    private isAlive: boolean;
    readonly isWhite: boolean;
    readonly canMoveMultipleStepsAtATime: boolean;
    readonly type: PieceType;
    readonly points: number;

    abstract standardDirectionVectorList: Array<DirectionVector>;
    
    constructor(
        isWhite: boolean, 
        canMoveMultipleStepsAtATime: boolean, 
        type: PieceType, 
        points: number
        ) {
        this.isAlive = true;
        this.isWhite = isWhite;
        this.canMoveMultipleStepsAtATime = canMoveMultipleStepsAtATime;
        this.type = type;
        this.points = points;
    }

    abstract produceListOfPossibleTilesToGoTo(chessBoard: ChessBoard): Array<Tile>;

    public takePiece(): void {
        this.isAlive = false;
    }

    public isPieceAlive(): boolean {
        return this.isAlive;
    }

    public isSameColour(otherPiece: Piece): boolean {
        if (this.isWhite) {
            return otherPiece.isWhite;
        }
        return !(otherPiece.isWhite);
    }

}

export enum PieceType {
    KING = "king", 
    QUEEN = "queen", 
    ROOK = "rook", 
    BISHOP = "bishop", 
    KNIGHT = "knight", 
    PAWN = "pawn" 
}