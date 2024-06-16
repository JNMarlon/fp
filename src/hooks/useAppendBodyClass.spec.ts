import {renderHook} from "@testing-library/react";
import {useAppendBodyClass} from "./useAppendBodyClass";

const TEST_CLASS_NAME = "test-class";
describe("useAppendBodyClass", () => {
    it("should add className to document.body on mount", () => {
        // Arrange
        renderHook(() => useAppendBodyClass(TEST_CLASS_NAME));
        expect(document.body.classList).toContain(TEST_CLASS_NAME);
    });
    it("should remove className from document.body on unmount", () => {
        renderHook(() => useAppendBodyClass(TEST_CLASS_NAME)).unmount();

        expect(document.body.classList).not.toContain(TEST_CLASS_NAME)
    })
})
