export interface ProfileDTO {
    perfilId: number
    codUsuario: number
    estadoPermisoUsuario: boolean
    perfil: PerfilDTO
}
export interface PerfilDTO {
    idPerfil: number
    descripcionPerfil: string
    estadoPerfil: boolean
    perfilUsuarios: any[]
}

export interface CUPerfilDTO {
    description: string
    state: boolean
}
export interface ResponseProfileDTO {
    idPerfil: number
    descripcionPerfil: string
    estadoPerfil: boolean
}