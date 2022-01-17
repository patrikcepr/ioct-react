import React, { useContext } from 'react';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Places from './components/Places/Places';
import Footer from './components/Layout/Footer';
import Loader from './components/UI/Loader/Loader';
import PlaceDetail from './components/Places/PlaceDetail';

import AppContext from './store/appContext';
import './styles/shared.sass';
import './App.sass';
import Modal from './components/UI/Modal/Modal';

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
    if (ctx.error === 'Request failed with status code 401') {
      content = (
        <div className='error'>
          <span>
            {ctx.lang === 'en'
              ? '401 - Unauthorized Access'
              : '401 - Neautorizovaný přístup'}
          </span>
        </div>
      );
    } else {
      content = (
        <div className='error'>
          <span>{ctx.error}</span>
        </div>
      );
    }
  }

  return (
    <div className='App'>
      <Header />
      <Nav />
      <main>
        {content}
        {ctx.showModalState && (
          <Modal>
            <PlaceDetail />
          </Modal>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
