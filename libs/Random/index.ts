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
    public getColor(opacity: number = 1) {
        const randomColor = (() => {
            return () => {
                var h = this.getInt(0, 360);
                var s = this.getInt(42, 98);
                var l = this.getInt(40, 90);
                return `hsla(${h},${s}%,${l}%, ${opacity})`;
            };
        })();

        return randomColor();
    }
}

export default Random;