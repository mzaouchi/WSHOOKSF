import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Rating from '@mui/material/Rating';

function App() {
  const [show,setShow] = useState(false)
  const [rate,setRate] = useState(0)
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {
        show && <Counter/>
      }
      <br></br>
       <Rating name="simple-controlled" onChange={(e)=> setRate(e.target.value)}/>
       <h5>{rate}</h5>
    </div>
  );
}

export default App;
