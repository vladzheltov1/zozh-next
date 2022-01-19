export type CurrentPairs = {
    left: string,
    right: string
}

export type CorrectPairs = {
    [key: string]: string
}

export const checkIfPairsMatch = (currentPairs: CurrentPairs[], correctPairs: CorrectPairs): boolean => {
    if (!currentPairs) return false;

    let isCorrect = true;

    currentPairs.map((pair) => {
        if (pair.right != correctPairs[pair.left]) {
            isCorrect = false;
            return;
        }
    })

    return isCorrect;
}