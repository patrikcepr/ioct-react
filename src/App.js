import React, { useContext } from 'react';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Places from './components/Places/Places';
import Footer from './components/Layout/Footer';
import Loader from './components/UI/Loader/Loader';

import AppContext from './store/appContext';
import './styles/shared.sass';
import './App.sass';

function App() {
  const ctx = useContext(AppContext);

  let content = <Loader />;

  if (!ctx.isLoading && ctx.data.length > 0) {
    content = <Places />;
  }

  if (!ctx.isLoading && ctx.data.length === 0 && !ctx.error) {
    content = <span>No data received.</span>;
  }

  if (ctx.error) {
    content = <span>{ctx.error}</span>;
  }

  return (
    <div className='App'>
      <Header />
      <Nav />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;
