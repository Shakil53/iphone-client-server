
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Phone from './components/Phone/Phone';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/phones'),
          element: <Home></Home>,

        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/phones/:id',
          element: <Phone></Phone>,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
