import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


import { AppState, Sub } from './types/types';

const INITIAL_STATE = [
  {
    nick: "Brian",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=brian",
    description: "Uno dos tres"
  },
  {
    nick: "Alejandro",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=alejandro",
    description: "Cuatro cinco seis"
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className='App'>
      <h1>Subscriptores</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;