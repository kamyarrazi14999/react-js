import { useState } from "react";
import "./App.css";


function App() {
  const [islogin, setislogin] = useState(false);

    
  
  if (islogin == true) {
    setislogin((prev) => !prev);
    return (
      <>
        <h1>کاربر لاگین هست</h1>
        
    
      </>
    );
   } else {
      return (
        <>
         <h1>کاربر لاگین نیست</h1>
        </>
      )
    }
  }


export default App;
