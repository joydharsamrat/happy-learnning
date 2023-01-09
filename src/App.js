import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
