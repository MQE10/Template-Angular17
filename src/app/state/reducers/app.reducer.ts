//? aplicaiones

import { createReducer, on } from "@ngrx/store"
import { loadApp } from "../actions/app.actions"

export interface AppState {
    idApp: number
    descripcionApp: string
    enlaceApp: string
    estadoApp: boolean
    interfas: any[]
}

//TODO: Add property to know when data is loaded from backend or if the data comes as null
export const initialState: AppState = {
    idApp: 0,
    descripcionApp: "",
    enlaceApp: "",
    estadoApp: false,
    interfas: []
}

export const appReducer = createReducer(
    initialState,
    on(loadApp, (oldState, { data }) => {
        return data;
    })
)