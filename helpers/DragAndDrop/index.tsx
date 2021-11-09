const reorderItem = (destination, source, items) => {
    const result = Array.from(items);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    return [result, removed];
}

export const reorder = (destination, source, items, gaps) => {
    if (!destination) {
        return { resultItems: null, resultGaps: null };
    }

    if (destination.droppableId === source.droppableId) {
        const result = reorderItem(destination, source, items);

        return { resultItems: result, resultGaps: null };
    }
    else if (destination.droppableId === "menu_box") {
        const child = gaps[source.droppableId];
        const resultItems = [...items, child];
        const resultGaps = { ...gaps, [source.droppableId]: { id: 0, value: null } };

        return { resultGaps, resultItems };
    }
    else {
        if (gaps[destination.droppableId].value != null) {
            return;
        }

        const [result, removed] = reorderItem(destination, source, items);

        const resultItems = result.filter((item) => item !== removed);
        const resultGaps = { ...gaps, [destination.droppableId]: removed };
        return { resultItems, resultGaps };
    }
}