import React, { useEffect, useState } from 'react';
import './App.css';
import Base from './Components/Base';
import Hero from './Components/Hero';
import StackNews from './Components/StackNews';
function App() {
  return (
    <div className="flex flex-col space-y-4">
      <Base>
        <Hero
          title="News"
          description="Make your dailies informative Because you deserve nothing but the truth."
          img="https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <StackNews />
      </Base>
    </div>
  );
}

export default App;
