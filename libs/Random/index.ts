export const random = {
    /**
     * @param start - incl
     * @param end - incl
     */
    getInt(start: number, end: number) {
        start = Math.ceil(start);
        end = Math.floor(end);
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }
}