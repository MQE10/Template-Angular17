export interface App {
    idApp: number
    descripcionApp: string
    enlaceApp: string
    estadoApp: boolean
    interfas: Interfa[]
}

export interface Interfa {
    idInterfas: number
    descripcionInterfas: string
    estadoInterfas: boolean
    appid: number
    app: any
    funciones: Funcione[]
}

export interface Funcione {
    idFunciones: number
    descripcionFunciones: string
    estadoFunciones: boolean
    interfasId: number
    atributos: Atributo[]
    interfas: any
}

export interface Atributo {
    idAtributos: number
    descripcionAtributos: string
    estadoAtributos: boolean
    funcionesId: number
    check: any
    interfaceId: number
    appId: number
    hidden?: boolean;
}