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
}

const random = new Random();

export default random;