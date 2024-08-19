import { CategoryProps } from "../model/category"

export const groupByCategory = (categoryList:CategoryProps[])=> {
  const rst:{[key:string]:typeof categoryList}= {}

  if(categoryList.length >0 ){
      categoryList.forEach(item =>{
        const {category} = item
        if(!rst[category]){
          rst[category] = []
        }
          rst[category].push(item)
      })
    }

    return rst
}
