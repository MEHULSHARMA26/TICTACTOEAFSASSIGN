import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mark,setMark] = useState([null,null,null,null,null,null,null,null,null])
  const[flag,setFlag]=useState(true);
  const[winner,setWinner]=useState(false);

  function markChangeHandler(idx){

    //setMark("X");
    let newMark=[...mark];

    if(mark[idx]==null){
      newMark[idx]= flag?'X':'O'
      setFlag(!flag);
      setMark(newMark);
    }
    


  }

 


  return (
   <>
   <h1>TIC -TAC-TOE</h1>
   <div className="board">

    <div>
    <button onClick={()=>markChangeHandler(1)} style={{width:"50px",height:"50px"}}>{mark[1]}</button>
    <button onClick={()=>markChangeHandler(2)} style={{width:"50px",height:"50px"}}>{mark[2]}</button>
    <button onClick={()=>markChangeHandler(3)} style={{width:"50px",height:"50px"}}>{mark[3]}</button>
    
    </div>
    <div>

    <button onClick={()=>markChangeHandler(4)} style={{width:"50px",height:"50px"}}>{mark[4]}</button>
    <button onClick={()=>markChangeHandler(5)} style={{width:"50px",height:"50px"}}>{mark[5]}</button>
    <button onClick={()=>markChangeHandler(6)} style={{width:"50px",height:"50px"}}>{mark[6]}</button>
    
    </div>

    <div>
    <button onClick={()=>markChangeHandler(7)} style={{width:"50px",height:"50px"}}>{mark[7]}</button>
    <button onClick={()=>markChangeHandler(8)} style={{width:"50px",height:"50px"}}>{mark[8]}</button>
    <button onClick={()=>markChangeHandler(9)} style={{width:"50px",height:"50px"}}>{mark[9]}</button>
    
    </div>

    <h1>WINNER:{winner}</h1>
   
   
    </div>
   </>
  );
}

export default App
