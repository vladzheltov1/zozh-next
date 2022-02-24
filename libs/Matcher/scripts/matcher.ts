import { Color } from "@/types/Color";

export type Pair = {
    left: string,
    right: string,
    color: Color | string
}

export class MatcherData {
    private pairs: Pair[]

    public constructor(pairs: Pair[]) {
        this.pairs = pairs;
    }

    public checkIfExistsAndDeletePair(item): Pair[] {
        const itemIndex = this.findPairWithItem(item);
        if (itemIndex !== -1) {
            const updatedPairsList = this.deletePair(itemIndex);
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
        this.pairs.splice(index, 1);
        return this.pairs;
    }
}