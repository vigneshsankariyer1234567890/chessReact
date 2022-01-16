import { Tile, TileColour } from '../src/board/Tile';
import styles from "../pages/ChessTileStyle.module.css";

export interface TProps {
    chessTile: Tile,
    name: string
}

export default function ChessTileComponent(props: TProps) {

    if (props.chessTile.tileColour == TileColour.BLACK) return <div className = {styles.dark} >[{props.name}]</div>;

    return <div className = {styles.light} >[{props.name}]</div>;

}