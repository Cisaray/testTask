import React from 'react';
import {Home, NotFound} from "./pages";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/*'} element={<NotFound/>}/>
      </Routes>
    </>

  );
}

export default App;
