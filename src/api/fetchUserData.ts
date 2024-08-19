import { Register } from "../model/register";


const baseUrl = 'https://jsonplaceholder.typicode.com/users'

export const fetchUserData = async () => {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }

     const data: Register[] = await response.json();

     const tmspData:Register[] =[]

    if(data.length > 0){
      for(const i of data){
         if(i.name[0].toUpperCase() ==='C'){
            tmspData.push(i)
         }
      }
    }

    return console.log(tmspData)
  } catch (error) {
    console.error('Error:', error);
  }
};


fetchUserData()
