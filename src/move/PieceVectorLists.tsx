import { PieceType } from "../piece/Piece";
import DirectionVector from "./DirectionVector";

const PieceVectorLists = {
    "king": new Array<DirectionVector>(
        new DirectionVector(1,1), 
        new DirectionVector(-1,1), 
        new DirectionVector(1,-1), 
        new DirectionVector(-1,-1), 
        new DirectionVector(0,1), 
        new DirectionVector(0,-1), 
        new DirectionVector(1,0), 
        new DirectionVector(-1,0)
    ),
    "queen": new Array<DirectionVector>(
        new DirectionVector(1,1), 
        new DirectionVector(-1,1), 
        new DirectionVector(1,-1), 
        new DirectionVector(-1,-1), 
        new DirectionVector(0,1), 
        new DirectionVector(0,-1), 
        new DirectionVector(1,0), 
        new DirectionVector(-1,0)
    ),
    "rook": new Array<DirectionVector>(
        new DirectionVector(0,1), 
        new DirectionVector(0,-1), 
        new DirectionVector(1,0), 
        new DirectionVector(-1,0)
    ),
    "bishop": new Array<DirectionVector>(
        new DirectionVector(1,1), 
        new DirectionVector(-1,1), 
        new DirectionVector(1,-1), 
        new DirectionVector(-1,-1), 
    ),
    "knight": new Array<DirectionVector>(
        new DirectionVector(2,1),
        new DirectionVector(2,-1),
        new DirectionVector(1,2),
        new DirectionVector(-1,2),
        new DirectionVector(-2,1),
        new DirectionVector(-2,-1),
        new DirectionVector(1,-2),
        new DirectionVector(-1,-2),
    ),
    "pawn": new Array<DirectionVector>(
        new DirectionVector(0,1)
    )
}

export const getVectorList = (type: PieceType) => PieceVectorLists[type];