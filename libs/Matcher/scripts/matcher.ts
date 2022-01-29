import { Color } from "@/types/Color";

export type Pair = {
    left: string,
    right: string,
    color: Color | string
}

export class MatcherManager {
    private pairs: Pair[]

    public constructor(pairs: Pair[]) {
        this.pairs = pairs;
    }

    public checkIfExistsAndDeletePair(item): Pair[] {
        const candidate = this.findPairWithItem(item)
        if (candidate !== -1) {
            const updatedPairsList = this.deletePair(candidate);
            this.pairs = updatedPairsList;
        }
        return this.pairs;
    }

    private findPairWithItem(item: string): number {
        for (let i = 0; i < this.pairs.length; i++)
            if (this.pairs[i].left === item || this.pairs[i].right === item)
                return i;
        return -1;
    }

    private deletePair(index) {
        const tempArray = Array.from(this.pairs);
        tempArray.splice(index, 1);
        return tempArray;
    }
}