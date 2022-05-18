import Step from './components/Step';
import './App.css';
import React,{useState} from "react"

function App() {
  const [steps, setSteps] = useState([
    {direction:"left", instructions:"turn left at barlas ave", distance:1.2},
    {direction:"forward", instructions:"cross over the river", distance:1.2},
    {direction:"right", instructions:"turn left at barlas ave", distance:1.2},
    {direction:"left", instructions:"turn left at barlas ave", distance:1.2}

  ])
  const [form, setForm] =useState({
    direction: "left",
    instructions: "",
    distance: 1.0
  }) 
  const onChangeHandler = (event) => {
    setForm({...form,[event.target.name]:event.target.value});
  }

  const onSubmitHandler =(event) => {
    event.preventDefault();
    // console.log("submitted");
    setSteps([...steps,form])
  }
  const onDeleteHandler =(id) => {
    // console.log(props.id)
    steps.splice(id,1);
    setSteps([...steps]);
  }

  return (
    <div className="App">
      <h1>directions app</h1> 
      <form onSubmit={onSubmitHandler}>
        <select name="direction" onChange={onChangeHandler}>
          <option>left</option>
          <option>right</option>
          <option>forward</option>
        </select>
        <input type="text" name="instructions" placeholder='where to'onChange={onChangeHandler}/>
        <input type="number" name="distance" placeholder='miles' onChange={onChangeHandler}/>
        <input type="submit" className='btn btn-dark'/>
      </form>
      {/* <Step direction="left" instruction="turn left at barlas ave" 
      distance={1.2}/> */}
      {
        //her eklemek istediginde bunu yazman gerek
        steps.map((item,i) => {
          return <Step key={i} onDeleteHandler={()=>onDeleteHandler(i)} direction={item.direction} instructions={item.instructions} distance={item.distance} />
        })
      }
      
    </div>
  );
}

export default App;
