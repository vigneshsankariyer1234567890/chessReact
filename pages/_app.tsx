import {ChessBoardComponent, BProps} from '../components/ChessBoardComponent'
import ChessBoard from '../src/board/ChessBoard'

function MyApp() {
  let props: BProps;
  props = {chessBoard: new ChessBoard(), inverted: true}

  return (
    <div id = "chessboard">
      <ChessBoardComponent {...props}/>
    </div>
  )
}

export default MyApp
