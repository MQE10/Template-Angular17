//? Funcionario

import { createReducer, on } from "@ngrx/store"
import { loadUser } from "../actions/user.actions"

export interface UserState{
    jti: string
    iat: string
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
    id: string
    nombre: string
    primerApellido: string
    segundoApellido: string
    area: string
    exp: number
    iss: string
}

//TODO: Add property to know when data is loaded from backend or if the data comes as null
export const initialState: UserState = {
    jti: "",
    iat: "",
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": "",
    id: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    area: "",
    exp: 0,
    iss: "",
}

export const userReducer = createReducer(
    initialState,
    on(loadUser, (oldState, {data}) => {
        return data;
    })
)