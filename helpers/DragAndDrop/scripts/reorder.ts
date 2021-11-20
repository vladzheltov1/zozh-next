const reorderItem = (destination, source, items) => {
    const result: Array<any> = Array.from(items);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    return [result, removed];
}

export const reorder = (destination, source, items, gaps) => {
    // Нужно, чтобы избежать ошибок
    if (!destination) {
        return { resultItems: null, resultGaps: null };
    }

    // Перемещение внутри одного блока
    if (destination.droppableId === source.droppableId) {
        const [result] = reorderItem(destination, source, items);
        return { resultItems: result, resultGaps: null };
    }
    // Перемещение извне в общий блок
    else if (destination.droppableId === "menu_box") {
        const result = Array.from(items);
        const child = gaps[source.droppableId];
        result.splice(destination.index, 0, child);
        const resultGaps = { ...gaps, [source.droppableId]: { id: 0, value: null } };
        return { resultGaps, resultItems: result };
    }
    // Перемещение между блоками пропусков
    else if (destination.droppableId !== "menu_box" && source.droppableId !== "menu_box") {
        const child = gaps[source.droppableId];
        const resultItems = [...items];
        const resultGaps = { ...gaps, [destination.droppableId]: child, [source.droppableId]: { id: 0, value: null } };
        return { resultItems, resultGaps };
    }
    // Перемещение из общего блока в пропуск
    else {
        // Зачем нужно это условие?
        // if (gaps[destination.droppableId].value !== null) {
        //     return;
        // }
        const [result, removed] = reorderItem(destination, source, items);
        const resultItems = result.filter((item) => item !== removed);
        const resultGaps = { ...gaps, [destination.droppableId]: removed };
        return { resultItems, resultGaps };
    }
}