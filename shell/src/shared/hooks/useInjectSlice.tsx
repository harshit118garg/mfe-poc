import { useEffect, useState } from "react";
import { addDynamicSlice, removeDynamicSlice } from "../../store/store";

export function useInjectSlice(name: string, slice: any) {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        addDynamicSlice(name, slice);
        setIsReady(true);

        return () => {
            removeDynamicSlice(name);
        };
    }, [name, slice]);

    return isReady
}
