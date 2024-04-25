import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header  from "./Header";
import Filter from "./Filter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = ()  => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className = {`App ${darkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} />
      <Filter />
    </div>
  );
}

export default App;
