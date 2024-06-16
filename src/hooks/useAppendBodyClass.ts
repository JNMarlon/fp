import {useLayoutEffect} from "react";

export const useAppendBodyClass=(className:string)=>{
    useLayoutEffect(() => {
        document.body.classList.add(className)


        return ()=>{
            document.body.classList.remove(className)
        }
    }, []);

}
