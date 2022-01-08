export type ContainerData = string;

export interface IContainerBundle {
    rootContainer: ContainerData[],
    [key: string]: ContainerData
}