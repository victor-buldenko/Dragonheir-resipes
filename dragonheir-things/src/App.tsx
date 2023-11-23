import { Outlet } from 'react-router-dom';
import { Header } from './component/Header';

import "./App.css";

function App() {
  return (
    <section className='App'>
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
