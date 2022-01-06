export type IItems = string;

export type IGaps = string | null;

export class DragAndDrop {
    private _result: any;
    private _items: IItems[];
    private _gaps: IGaps[];
    private _rootContainerId: string;

    public constructor(result: any, items: IItems[], gaps: IGaps[], rootContainerId: string) {
        this._result = result;
        this._items = items;
        this._gaps = gaps;
        this._rootContainerId = rootContainerId;
    }

    public reorder = () => {
        const { destination, source } = this._result;

        if (destination === null) {
            return this.makeReturnObject(this._items, this._gaps);
        }

        // Перемещение внутри одного контейнера
        if (destination.droppableId === source.droppableId) {
            const finalItems = Array.from(this._items);
            const [removed] = finalItems.splice(source.index, 1);
            finalItems.splice(destination.index, 0, removed);

            return this.makeReturnObject(finalItems, this._gaps);
        }

        // Перемещение ИЗ rootContainer
        if (source.droppableId === this._rootContainerId) {
            const finalItems = Array.from(this._items);
            const [removed] = finalItems.splice(source.index, 1);
            const finalGaps = this._gaps;
            finalGaps[destination.droppableId] = removed;

            console.log();

            return this.makeReturnObject(finalItems, finalGaps);
        }

        // Перемещение В rootContainer
        if (destination.droppableId === this._rootContainerId) {
            console.log(source);
        }

    }

    private makeReturnObject = (items, gaps) => {
        return { items, gaps };
    }
}