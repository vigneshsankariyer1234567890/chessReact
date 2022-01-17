export default class DirectionVector {
    private xMagnitude: number;
    private yMagnitude: number;

    constructor(x: number, y: number) {
        this.xMagnitude = x;
        this.yMagnitude = y;
    }

    public getXMagnitude(): number {
        return this.xMagnitude;
    }

    public getYMagnitude(): number {
        return this.yMagnitude;
    }

}