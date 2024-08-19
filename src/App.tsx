import React, { useEffect } from 'react';
import './App.css';
import { transformData } from './util/transformData';
import { countOccurrences } from './util/countOccurrences';
import { Users } from './model/user';
import { CategoryProps } from './model/category';
import { groupByCategory } from './util/groupByCategory';
import { mergeArrays } from './util/mergeArrays';
import { TaskList,  } from './components/TaskList';
import { fetchUserData } from './api/fetchUserData';




function App() {

  useEffect(()=>{
    //desafio 1
    const users:Users[] = [
      { id: 1, name: 'Alice', age: 25, isActive: true },
      { id: 2, name: 'Bob', age: 30, isActive: false },
      { id: 3, name: 'Charlie', age: 22, isActive: true }
    ];
      console.log("Desafio 1 \n",transformData(users))

    // desafio 2
      fetchUserData()

      //desafio 3
      const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

      console.log("Desafio 3 \n",countOccurrences(fruits))

     //desafio 4
      const items:CategoryProps[] = [
        { name: 'apple', category: 'fruit' },
        { name: 'carrot', category: 'vegetable' },
        { name: 'banana', category: 'fruit' },
        { name: 'broccoli', category: 'vegetable' }
      ];

     console.log("Desafio 4 \n",groupByCategory(items))

     //desafio 5
     const array1 = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 }
    ];

    const array2 = [
      { id: 1, age: 26, email: 'alice@example.com' },
      { id: 3, name: 'Charlie', age: 22 }
    ];

   console.log("Desafio 5 \n",mergeArrays(array1, array2))
  },[])


  return (
    <div className="App">
      <TaskList/>
    </div>
  );
}

export default App;
