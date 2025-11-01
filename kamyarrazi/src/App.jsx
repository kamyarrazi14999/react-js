import { useState } from "react";
import "./App.css";


function App() {
  const [islogin, setislogin] = useState(false);

    const handelstate=()=>{
      setislogin(prev => !prev)
    }
  
  if (islogin==true) {
  
    return (
      <>
        <h1 onClick={handelstate}>کاربر لاگین هست</h1>
        
    
      </>
    );
   } else {
      return (
        <>
         <h1 onClick={handelstate}>کاربر لاگین نیست</h1>
        </>
      )
    }
  }


export default App;
