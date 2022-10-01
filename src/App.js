import React , { useState, useEffect } from 'react'
import people from './data'
import Person from './Person'
function App() {
  const [index,setIndex]=useState(0)
  const[person,setPerson]=useState(people[index])
  useEffect(()=>{
    setPerson(people[index])
  },[index])
  const checkValue=(number)=>{
    if(number<0){
      number=people.length -1
    }
    if(number>people.length -1){
      number=0
    }
    return number
  }
  return (
    <main className='container-fluid'>
      <div className="row content container-fluid">
        <div className="p2 col-sm-6">
          <Person person={person}/>
        </div>
        <div className="p1 col-sm-6">
          <div className="img-container">
            <img className="profile" src={person.image} alt={person.name}/>
            <div className='btns'>
              <button type='button' className="btn1 btn" onClick={()=>{setIndex(checkValue(index-1))}}>
                <i className="fa-solid fa-chevron-left"></i> 
              </button>
              <button type='button' className="btn2 btn" onClick={()=>{setIndex(checkValue(index+1))}}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
