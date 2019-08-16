
export enum validRoles {
    ADMIN_ROLE ,
    USER_ROLE
}

// Usuario Model
export class Usuario {

    constructor(
        public nombre: string ,
        public email: string ,
        public password: string ,
        public img?: string ,
        public role?: validRoles ,
        public google?: boolean ,
        public id?: number
    ) { }

}
