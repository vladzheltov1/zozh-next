
export type Container = string | string[];

export type ContainerBundle<Container> = {
    [key: string]: Container
}