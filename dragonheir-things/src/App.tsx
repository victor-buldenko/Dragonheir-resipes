import { Outlet } from 'react-router-dom';
import { Header } from './component/Header';
import { ModalIngridient } from './component/ModalIngridient';
import { Footer } from './component/Footer';
import { ScrollUp } from './component/ScrollUp';

import "./App.css";

function App() {
  return (
    <section className='app'>
      <Header />
      <Outlet />
      <ModalIngridient />
      <ScrollUp />
      <Footer />
    </section>
  );
}

export default App;
