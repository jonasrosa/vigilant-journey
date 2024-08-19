import { Users } from "../model/user"

export const mergeArrays =(array1:Users[], array2:Users[]):Users[]=>{
  let rst:Users[] =[]
  const userMap = new Map<number,Users>()

  if(array1.length > 0 ){

    for(const i of array1){
      userMap.set(i.id,{...i})
    }
  }
  if(array2.length > 0){
     for(const j of array2){
        if(userMap.has(j.id)){
            userMap.set(j.id,{...userMap.get(j.id),...j})
        }else{
              userMap.set(j.id,{...j})
        }
      }
  }
  const tmpsArray = Array.from(userMap.values())

  rst = tmpsArray

  return rst
}
