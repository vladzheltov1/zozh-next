/**
 * Перемещение внутри общего блока
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @returns [result, gaps]
 */
const moveInHub = (destination, source, items, gaps) => {
    const resultItems: Array<any> = Array.from(items);
    const [removed] = resultItems.splice(source.index, 1);
    resultItems.splice(destination.index, 0, removed);
    return [resultItems, gaps];
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
    const resultItems = Array.from(items);
    const addedItem = gaps[source.droppableId];
    resultItems.splice(destination.index, 0, addedItem);
    const resultGaps = { ...gaps, [source.droppableId]: { id: 0, value: null } };
    return [resultItems, resultGaps];
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
    const addedItem = gaps[source.droppableId];
    const resultGaps = { ...gaps, [destination.droppableId]: addedItem, [source.droppableId]: { id: 0, value: null } };
    return [items, resultGaps];
}

/**
 * Перемещение из общего блока в пропуск
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @deprecated
 * @returns [result, gaps]
 */
const moveFromHub = (destination, source, items, gaps) => {
    const tempResult: Array<any> = Array.from(items);
    const [removedItem] = tempResult.splice(source.index, 1);
    tempResult.splice(destination.index, 0, removedItem);
    const resultItems = tempResult.filter((item) => item !== removedItem);
    const resultGaps = { ...gaps, [destination.droppableId]: removedItem };
    return [resultItems, resultGaps];
}

/**
 * Общая функция, которая обрабатывает логику перемещения: определяет вид перемещения и вызывает нужную функцию
 * @param destination 
 * @param source 
 * @param items 
 * @param gaps 
 * @deprecated
 * @returns [result, gaps]
 */
export const reorder = (destination, source, items, gaps, rootContainerId: string) => {

    if (!destination || !source) return [items, gaps];

    if (destination.droppableId === source.droppableId) {
        return moveInHub(destination, source, items, gaps);
    }
    else if (destination.droppableId === rootContainerId) {
        return appendToTheHubBlock(destination, source, items, gaps);
    }
    else if (destination.droppableId !== rootContainerId && source.droppableId !== rootContainerId) {
        return moveBetweenGaps(destination, source, items, gaps);
    }
    else {
        return moveFromHub(destination, source, items, gaps);
    }
}