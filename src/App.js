import './App.css';
import React,{useState} from 'react';
import FormData from './FormData';
import Child from './Child';
import UseEffectHook from './UseEffectHook';
import Reducer from './Reducer';
import RefHook from './RefHook';
import ReferenceHooks from './ReferenceHooks';
import UseLayoutEffect from './UseLayoutEffect';
import MemoHook from './MemoHook';
function App(){
  const [count,setCount]=useState(50);
  const [date,setDate]=useState('');
  const [details]=useState([
   ` firstName: "John",
    lastName: "Doe",
    age: 30,
    department: "Sales",
    jobTitle: "Sales Manager",
    email: "john.doe@example.com",
    phoneNumber: "555-555-5555",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    isFullTime: true,
    hireDate: "2022-01-15",
    salary: 60000`
  ])
  const Incnum=()=>{
    setCount(count+1);
  }
  const showDate=()=>{
    const d = new Date(); // Change 'new date()' to 'new Date()'
    setDate(d.toLocaleString('en-US')); 
  }
  return ( 
  <>
  <div>
  <RefHook />
     <h1>{count}</h1>
     <h1>{date}</h1>
     <div>
      {details}
     </div>
     <button onClick={Incnum}>Click me</button>
     <button onClick={showDate}>Click me</button>
     <FormData/>
     <p>click me</p>
     <UseEffectHook/>
     <Child />
     <Reducer />
     <ReferenceHooks />
     {/* <UseLayoutEffect /> */}
     <MemoHook />
  </div>
  </>
  )
}
export default App;