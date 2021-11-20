/**
 * Перемещение внутри общего блока
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
const moveInHub = (destination, source, items, gaps) => {
    const result: Array<any> = Array.from(items);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    return [result, gaps];
}

/**
 * Перемещение извне в общий блок
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
const appendToTheHubBlock = (destination, source, items, gaps) => {
    const result = Array.from(items);
    const child = gaps[source.droppableId];
    result.splice(destination.index, 0, child);
    const resultGaps = { ...gaps, [source.droppableId]: { id: 0, value: null } };
    return [result, resultGaps];
}

/**
 * Перемещение между пропусками
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
const moveBetweenGaps = (destination, source, items, gaps) => {
    const child = gaps[source.droppableId];
    const resultItems = [...items];
    const resultGaps = { ...gaps, [destination.droppableId]: child, [source.droppableId]: { id: 0, value: null } };
    return [resultItems, resultGaps];
}

/**
 * Перемещение из общего блока в пропуск
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
const moveFromHub = (destination, source, items, gaps) => {
    const result: Array<any> = Array.from(items);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    const resultItems = result.filter((item) => item !== removed);
    const resultGaps = { ...gaps, [destination.droppableId]: removed };
    return [resultItems, resultGaps];
}

/**
 * Общая функция, которая обрабатывает логику перемещения: определяет вид перемещения и вызывает нужную функцию
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
export const reorder = (destination, source, items, gaps, hubDroppableId: string) => {
    // Нужно, чтобы избежать ошибок
    if (!destination || !source) return [items, gaps];

    if (destination.droppableId === source.droppableId) {
        return moveInHub(destination, source, items, gaps);
    }
    else if (destination.droppableId === hubDroppableId) {
        return appendToTheHubBlock(destination, source, items, gaps);
    }
    else if (destination.droppableId !== hubDroppableId && source.droppableId !== hubDroppableId) {
        return moveBetweenGaps(destination, source, items, gaps);
    }
    else {
        return moveFromHub(destination, source, items, gaps);
    }
}