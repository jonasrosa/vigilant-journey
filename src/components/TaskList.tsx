import { useState, useEffect, useCallback } from "react"


interface ITask{
  key:string
  name:string
  active: boolean
}

const TaskList=()=>{

const [name, setName]= useState("")
const [list, setList] = useState<ITask[]>([])
const [oldList, setOldsList] = useState<ITask[]>([])
const [isFilter, setIsFilter] = useState(true)

const addTask =useCallback((nameTask:string)=>{
    const task :ITask[] = [...list]

    const newId = crypto.randomUUID();


    task.push({key:newId, name:nameTask, active:false})

    setList(task)
    setOldsList(task)


},[list])

const filter =(isFilter:boolean)=>{
  const taskList :ITask[] = []
if(isFilter){

  if(list.length> 0){
    console.log(list)
    for(const i of list){
      if(i.active===true){
        taskList.push(i)
      }
    }

    setList(taskList)
  }
  }else{
    setList(oldList)
  }
}

const handleUpdateListTask = (task:ITask)=>{
  const taskList:ITask[] = [...list]

 const updateItemList = taskList.findIndex(i => i.key === task.key)

  if(updateItemList !== -1){
    taskList[updateItemList].active = task.active
  }

  setList(taskList)
}

  return(
    <div >
      <div>
        <h3>
          Incluir task
        </h3>
      <div>
      <div style={{ width:"100%", alignItems:"center", display:"flex" , flexDirection:"column", justifyContent:"center"}}>
        <input style={{width:300, margin:5,border:"solid 1px"}} placeholder="Nome da task" onChange={(e)=>{ setName(e.currentTarget.value)}} value={name}/>
        <div style={{width:300, display:'flex',justifyContent:'space-between'}}>
          <button style={{background:"blue", color:"white"}} onClick={()=>{
            if(name.length >0){
              addTask(name)
              setName("")
            }
          }}>
            adicionar task
          </button>
          <button  onClick={()=>{
            setIsFilter(!isFilter)
            filter(isFilter)
          }}>
            {isFilter? "Filtar ativas":"Limpar filtro"}
          </button>
          </div>
        </div>
      </div>
        </div>
    <ul>
      {list.map((task)=>{
        return(
          <Task task={task} key={task.key} onSetValue={handleUpdateListTask}/>
        )
      })}
    </ul>
  </div>
  )
}

interface ITaskProps{
  task:ITask
  onSetValue:(task:ITask)=> void
}

const Task = (props:ITaskProps)=>{
  const {task,onSetValue}=props
  const [active, setActive] = useState(task.active)

  useEffect(()=>{

  },[])
  return(
    <li style={{margin:5 ,border:"solid 1px"}}>
    <div style={{width:'100%' ,  display:'flex', justifyContent:'space-between'}} >
      <label style={{minWidth:200, textAlign:'center'}}>{task.name}</label>
      <button type="button" style={{width:100, fontSize:12, background:active?"green":"red", color:"white"}} onClick={(e)=>{
        setActive(!active)
        onSetValue({key:task.key, name:task.name, active:true})
      }}>
        {active?"Concluido":"Não Concluido"}
      </button>
    </div>
  </li>
  )
}

export{TaskList}
