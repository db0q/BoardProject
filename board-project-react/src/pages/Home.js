import React from 'react';
// import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { async } from '@firebase/util';
// import { collection, addDoc } from "firebase/firestore"; 
// import db from '../firebase';
import TaskCard from '../components/TaskCard';
import { tasks } from '../const';
// import { BrowserRouter } from 'react-router-dom';
// import { Form } from "react-router-dom";

const Home = () => {
    return (
    <div> 
{/*         
        <Form >
      <input type="text"  name="title"  placeholder='title'/>
      <input type="text"   name="assignee"  placeholder='assignee'/>
      <input type='date'  name='date' />
      <input type='checkbox'   name='complete' />
      <textarea name="comment"   form="usrform"> inter details here.. </textarea>
      <Button type="submit" />
       </Form> */}
       
         
        <div>
        {tasks.map((task ,index)=>{
                return <TaskCard {...task} key={index}/>;
            })}
        </div>
      

    </div>
    )
}

export default Home;

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