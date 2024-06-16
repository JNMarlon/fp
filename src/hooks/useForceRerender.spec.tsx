import {useForceRerender} from "./useForceRerender";
import {useRef} from "react";
import React from "react";
import {render, screen,fireEvent} from "@testing-library/react";

const INITIAL_REF = '테스트';
const CHANGED_REF = '변경됨';

function TestingComponent(){
    const forceUpdate = useForceRerender();

    const testRef = useRef<string>(INITIAL_REF);


    const onClick=()=> {
        testRef.current = CHANGED_REF;
        forceUpdate();
    }

    return <div><button onClick={onClick}>{testRef.current}</button></div>
}


describe('useForceRerender', () => {
    it('should force-rerender component', () => {
        render(<TestingComponent/>);
        expect(screen.getByText(INITIAL_REF)).toBeInTheDocument();
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText(CHANGED_REF)).toBeInTheDocument();

    })
})
