import ChessBoard from "../src/board/ChessBoard";
import ChessTileComponent, { TProps } from "./ChessTileComponent";
import styles from "../pages/ChessBoardStyle.module.css";

export interface BProps {
    chessBoard: ChessBoard,
    inverted: boolean
}

export const ChessBoardComponent = (props: BProps) => {
    const matrix = props.chessBoard.getTileMatrix(props.inverted);

    let board = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let prop: TProps;
            prop = {chessTile: matrix[i][j], name: matrix[i][j].getStringRepresentation()};
            board.push(<div id="chesstiles">
                <ChessTileComponent {...prop}/>
            </div>);
        }
    }
    return <div className={styles.chessboard}>{board}</div>;
}