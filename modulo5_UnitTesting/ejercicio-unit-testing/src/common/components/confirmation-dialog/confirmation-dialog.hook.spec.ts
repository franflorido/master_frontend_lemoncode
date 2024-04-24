import { renderHook, act, waitFor } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import { createEmptyLookup, Lookup } from 'common/models';

describe("common/Confirmation-DialogHook", () => {
    beforeEach(()=>{
        jest.useFakeTimers();
    });

    afterAll(()=>{
        jest.runOnlyPendingTimers();
        jest.useRealTimers()
    });

    it("should return object = false, itemToDelete = emptyLookUp and has to have 3 functions onAccept, onClose and onOpenDialog", () => {
        // Arrange
        const emptyLookup = createEmptyLookup()
        
        // Act
        const {result} = renderHook(()=>useConfirmationDialog());

        // Assert
        expect(result.current.isOpen).toEqual(false)
        expect(result.current.itemToDelete).toEqual(emptyLookup)
        expect(result.current.onAccept).toEqual(expect.any(Function))
        expect(result.current.onClose).toEqual(expect.any(Function))
        expect(result.current.onOpenDialog).toEqual(expect.any(Function))
    });
    it("it should set isOpen to true and a ItemToDelete = item", () => {
        // Arrange
        const LookUpItem = {id:"test", name:"test"}
        
        // Act
        const {result} = renderHook(()=>useConfirmationDialog());
        act(()=>{
            result.current.onOpenDialog(LookUpItem);
        })

        // Assert
        expect(result.current.isOpen).toEqual(true)
        expect(result.current.itemToDelete).toEqual(LookUpItem)
    });
    it("it should set isOpen = flase", () => {
        // Arrange
        const LookUpItem = {id:"test", name:"test"}
        
        // Act
        const {result} = renderHook(()=>useConfirmationDialog());
        act(()=>{
            result.current.onOpenDialog(LookUpItem);
            result.current.onClose()
        })

        // Assert
        expect(result.current.isOpen).toEqual(false)
        expect(result.current.itemToDelete).toEqual(LookUpItem)
    });
    /*
    });
    it("should set a new user object", async () => {
        
        const adminUser: User = {email:"admin@mail.com", role:"admin"}
        const loginStub = jest.spyOn(api, 'login').mockResolvedValue(adminUser);

        const {result} = renderHook(()=>useLogin());

        // Hay que meterlo dentro del act porque el set del credential es asincrono
        result.current.onLogin();
        
        expect(loginStub).toHaveBeenCalled()

        await waitFor(()=>{
            expect(result.current.user).toEqual(adminUser)
        })
    });
    */
});