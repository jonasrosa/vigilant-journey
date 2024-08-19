
export const countOccurrences =(occurrences:string[]):Record<string,number>=>{
  const rst:Record<string,number>= {}

  if(occurrences.length > 0){
   occurrences.forEach(occurrence =>{
    if(rst[occurrence]){
      rst[occurrence]++
    }
    else{
      rst[occurrence] = 1;
    }
   })
  }

  return rst
}
