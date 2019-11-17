import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ContactsList from './ConactsList';
;

function App() {
  return (
    <div>
      <AppHeader />
      <main className="ui main text container">
        <ContactsList />
      </main>
    </div>
  );
}

export default App;
