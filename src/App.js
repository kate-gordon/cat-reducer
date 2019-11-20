import React, { useReducer } from "react";
import Activity from './components/activity';
import "./App.css";

import { StateProvider } from './context'; 

function App() {
  const initialState = {
    name: "Paulson",
    activity: "purring"
  }

  const docStyle = {
    background: '#f5e5d3'
  }

  const reducer =(state, action) => {
    switch (action.type) {
      case "changeActivity":
        return {
          ...state,
          activity: action.activity
        };
      case 'changeName':
        return{
          ...state,
          name: action.newName
        }
      default: 
      return state; 
    }
  };

  return <div style={docStyle} className="App">
    <StateProvider value={useReducer(reducer, initialState)}>
      <Activity /> 
    </StateProvider>

  </div>;
}

export default App;
