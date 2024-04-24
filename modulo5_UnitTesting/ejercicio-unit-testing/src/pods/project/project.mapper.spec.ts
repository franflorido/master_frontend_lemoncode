import { mapProjectFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('pods/project/project.mapper spec', () => {
    it.each<apiModel.Project>([undefined, null])("should return empty project and createEmptyProject should have been called",(members:any)=>{
        // Arrange
        const emptyProject = viewModel.createEmptyProject()
        
        const VM = require('./project.vm');
        const createEmptyProjectSpy = jest.spyOn(VM, "createEmptyProject")

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(members)

        // Assert
        expect(result).toEqual(emptyProject)
        expect(createEmptyProjectSpy).toHaveBeenCalled()
    });
    it("should return empty project and createEmptyProject should not have been called",()=>{
        // Arrange
        const emptyProject = viewModel.createEmptyProject()
        
        const VM = require('./project.vm');
        const createEmptyProjectSpy = jest.spyOn(VM, "createEmptyProject")

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(emptyProject)

        // Assert
        expect(result).toEqual(emptyProject)
        expect(createEmptyProjectSpy).not.toHaveBeenCalled()
    });
    it("it should return an array of one item mapped when one item is fed", ()=>{
        // Arrange
        const projectInput: apiModel.Project = {
            id: "testId",
            name: "testName",
            externalId: "testExternalId",
            comments: "testComment",
            isActive: true,
            employees: [{id: "EmpoyeeId1", isAssigned: true, employeeName: "Employee1"},
             {id: "EmpoyeeId2", isAssigned: false, employeeName: "Employee2"},
             {id: "EmpoyeeId3", employeeName: "Employee3"}],
      }

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(projectInput) 

        // Assert
        expect(result).toEqual(projectInput)
    });
});