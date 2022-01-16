export default class BoardError implements Error {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }
    
}