import Header from "./Components/Layout/Header.js";
import Meals from "./Components/Meals/Meals.js";
import React from 'react';
function App() {
  return (
    <React.StrictMode>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </React.StrictMode>
  );
}

export default App;
