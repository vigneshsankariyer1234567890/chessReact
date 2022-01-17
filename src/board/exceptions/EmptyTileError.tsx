import BoardError from './BoardError';

export default class EmptyTileError extends BoardError {
    private static ERROR_NAME = "EmptyTileError";
    private static ERROR_MESSAGE = "Tile was empty and has no piece on it."
    
    constructor() {
        super(EmptyTileError.ERROR_NAME, EmptyTileError.ERROR_MESSAGE);
    }
}