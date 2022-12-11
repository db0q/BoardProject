import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { async } from '@firebase/util';
// import { collection, addDoc } from "firebase/firestore"; 
// import db from '../firebase';
import TaskCard from '../components/TaskCard';
import { tasks } from '../const';



const Home = () => {
  const [newTask , setNewTask]= useState({});
  const [taskList , setTaskList] = useState(tasks);


  const handleOnChange = (event)=>{
  const keyName = event.target.name;
  const value = event.target.value ;
  setNewTask((prev)=>{
    return { ...prev , [ keyName ]: value};
  });
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(newTask,'submited')
    setTaskList((prev)=>{
    return[ ...prev ,newTask];
   
   });
   setNewTask({})
  }
  console.log(newTask)
  return (
  <div> 
      <div   >
      <Form className='forms' style={{display:'flex',flexDirection:'column',width:'20rem',padding:'6px'}}>
    <input  style={{margin:'6px'}} type="text"  name="title"  placeholder='title' value={newTask.title} onChange={handleOnChange}/>
    <input  style={{margin:'6px'}} type="text"   name="assignee"  placeholder='assignee' value={newTask.assignee} onChange={handleOnChange}/>
    <input style={{margin:'6px'}} type='date'  name='date' value={newTask.date} onChange={handleOnChange}/>
    <div style={{display:'flex',flexDirection:'row',margin:'6px'}}>
    <label for="todo" data-content="Get out of bed">Completed &nbsp;</label>
    <input  type='checkbox' name='complete' value={newTask.complete} onChange={handleOnChange}/>
    </div>
   
    
    <input onChange={handleOnChange} name="details"  style={{margin:'6px'}}  form="usrform" placeholder='enter details here..' value={newTask.details} />
    <Button onClick={handleSubmit} variant="primary"  style={{margin:'6px'}}>Add new task</Button>
     </Form >
     </div>
       
      <div>
      {taskList.map((task)=>{
              return <TaskCard {...task} />;
          })}
      </div>
    

  </div>
  )
}
export default Home ;
   

// export default 
// const [newTask , setNewTask]= useState({});
// const [taskList , setTaskList] = useState(tasks);

// const handleOnChange = (event)=>{
//     const KeyTitle = event.target.title;
//     const value = event.target.value ;
//     setNewTaskInput((prev)=>{
//       return [newTaskInput , ...prev];
//     });
// };
// const handleSubmit = async (event)=>{
//     event.preventDefault();
//    setTasksList((prev)=>{
//     return[newTaskInput, ...prev]
//    });


//     const docRef = await addDoc(collection(db, "tasks"), {
//       ...newTaskInput,
//       });
//     setNewTaskInput({
//         title:'',
//         date:'',
//         assignee:'',
//         details:'',
//         complete:''
//     });
  
// };

    
// return(
// <Fragment>
//     <div style={{margin:'10rem'}}>
//          <Table>

//              {
//                 tasks.map((task)=>{
//                    return(
//                     <div>
//                              <thead>
//             <tr>
//                 <tv>
//                     title
//                 </tv>
//                 <tv>
//                     date
//                 </tv>
//                 <tv>
//                   assignee
//                 </tv>
//                 <tv>
//                   completed?
//                 </tv>
//                 <tv>
//                   details
//                 </tv>
//             </tr>
//            </thead>
//            <tbody>
//             <td>{task.title}</td>
//             <td>{task.date}</td>
//             <td>{task.assignee}</td>
//             <td>{task.complete}</td>
//             <td>{task.details}</td>
//             <td><Button onClick={(task.id)}>Edit</Button>
//             &nbsp;
//             <Button onClick={(task.id)}>Delete</Button>
//             </td>
//            </tbody>
//                     </div>
//                    ) 
//                 })
//              }


//          </Table>

//     </div>


// </Fragment>

// )