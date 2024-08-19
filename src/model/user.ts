export type Users = {
  id:number
  name?:string
  age?: number
  isActive?: boolean
}

export type UsersOmit = Omit<Users,"age"|"isActive">
