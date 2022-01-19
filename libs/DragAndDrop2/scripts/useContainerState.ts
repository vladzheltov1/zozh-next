import { useState } from "react";
import { IContainerBundle } from "..";

function useContainerState<K extends string>(initialState: IContainerBundle<string>);
function useContainerState<K extends string>(initialState: IContainerBundle<string>) {
    const [containers, setContainers] = useState<IContainerBundle<string>>(initialState);
    return [containers, setContainers];
}

export {
    useContainerState
};

