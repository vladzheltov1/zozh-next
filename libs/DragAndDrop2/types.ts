export type ContainerData = string;

export type IContainerBundle = {
    rootContainer: ContainerData[]
} & {
        [key in string]: ContainerData
    }