import React from 'react';
import {Main} from "./pages/Main";


function App() {
  return (
    <div className='w-full h-full bg-[#FFFAF5]'>
      <header className='w-full pb-5 pt-10 border-b border-[#C7C7C7]'>
        <img className='ml-[100px]' src="/assets/testLodo.svg" alt="logo"/>
      </header>
      <Main/>
    </div>
  );
}

export default App;
