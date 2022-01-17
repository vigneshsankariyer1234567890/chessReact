import DirectionVector from "../move/DirectionVector";
import { Piece, PieceType } from "./Piece";
import { getVectorList } from "../move/PieceVectorLists"
import { Tile } from "../board/Tile";
import ChessBoard from "../board/ChessBoard";

export class King extends Piece {
    standardDirectionVectorList: DirectionVector[];

    constructor(isWhite: boolean) {
        super(isWhite, false, PieceType.KING, Number.MAX_SAFE_INTEGER);
        this.standardDirectionVectorList = getVectorList(PieceType.KING)
    }

    produceListOfPossibleTilesToGoTo(chessBoard: ChessBoard): Tile[] {

        // i need to know the tile that the piece is on:
        let currentTile: Tile = chessBoard.getCurrentTileOfPiece(this);

        let tileList: Tile[];

        this.standardDirectionVectorList.forEach(direction => {
            let x: number = currentTile.x + direction.getXMagnitude();
            let y: number = currentTile.y + direction.getYMagnitude();

            while (x >= 0 || y >= 0 || x < ChessBoard.X_COUNT || y < ChessBoard.Y_COUNT) {
                //check if the tile does not have a piece or if the tile's piece is a different colour. if so add

                let tileOnBoard: Tile = chessBoard.getTile(x, y);

                if (tileOnBoard.isEmpty() || this.isSameColour(tileOnBoard.getPiece())) {
                    tileList.push(tileOnBoard);
                }

                x += direction.getXMagnitude();
                y += direction.getYMagnitude();
            }
        });
        
        throw new Error("Method not implemented.");
    }
    

}