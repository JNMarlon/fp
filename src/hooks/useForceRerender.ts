import {useState} from "react";

export const useForceRerender=()=>{
    const [, setUpdater] = useState(false)

    const forceUpdate=()=>{
        setUpdater((prev)=> !prev);
    }

    return forceUpdate;
}
