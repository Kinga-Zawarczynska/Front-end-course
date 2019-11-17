import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ContactsList from './ConactsList';
import Counter from './Counter';
import Input from'./InputName';


function App() {
  return (
    <div>
      <AppHeader />
      <main className="ui main text container">
        <ContactsList />
      </main>
      <Counter/>
      <Input/>
    </div>
  );
}

export default App;
