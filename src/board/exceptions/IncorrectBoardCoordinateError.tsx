import BoardError from './BoardError';

export default class IncorrectBoardCoordinateError extends BoardError {
    private static ERROR_NAME = "IncorrectBoardCoordinateError";
    private static ERROR_MESSAGE = "Incorrect Coordinates for board were given. X-coordinates and Y-coordinates must fall within board."
    
    constructor() {
        super(IncorrectBoardCoordinateError.ERROR_NAME, IncorrectBoardCoordinateError.ERROR_MESSAGE);
    }
}