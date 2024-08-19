import { Users, UsersOmit } from "../model/user"

export const transformData =(listUser:Users[]):UsersOmit[]=>{
  const rst:UsersOmit[] =[]

  if(listUser.length > 0){
     for(const user of listUser){
      if(user.isActive){
        rst.push({id:user.id, name:user.name})
      }
     }
  }

  return rst
}
