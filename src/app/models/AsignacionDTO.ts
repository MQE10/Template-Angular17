export interface AssignmentDTO {
    attribId: number
    appId: number
    interfaceId: number
    functionId: number
    stateAssigment: boolean
}
export interface AsigancionDTO {
    createassignmentDTOs: AssignmentDTO[]
}