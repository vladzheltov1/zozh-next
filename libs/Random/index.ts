/**
 * Class for random numbers generation 
 */
class Random {
    /**
     * @param start - inclusive
     * @param end - inclusive
     */
    public getInt(start: number, end: number) {
        start = Math.ceil(start);
        end = Math.floor(end);
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    /**
     * 
     * @returns random color in RGB format
     */
    public getColor(opacity: number) {
        const randomInt = () => this.getInt(0, 255);
        return `rgba(${randomInt()}, ${randomInt()}, ${randomInt()}, ${opacity})`;
    }
}

export default Random;