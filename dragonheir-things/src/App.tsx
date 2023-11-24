import { Outlet } from 'react-router-dom';
import { Header } from './component/Header';
import { ModalIngridient } from './component/ModalIngridient';

import "./App.css";

function App() {
  return (
    <section className='app'>
      <Header />
      <Outlet />
      <ModalIngridient />
    </section>
  );
}

export default App;
