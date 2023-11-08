import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shooter from './components/Shooter/Shooter';
import Sailing from './components/Sailing/Sailing';
import Permadeath from './components/Permadeath/Permadeath';
import Superhero from './components/Superhero/Superhero';
import Pixel from './components/Pixel/Pixel';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import CounterContextProvider from './Contexts/CounterContext';

let routers=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/> },
    {path:'shooter',element:<Shooter/>},
    {path:'sailing',element:<Sailing/>},
    {path:'Permadeath',element:<Permadeath/>},
    {path:'superhero',element:<Superhero/>},
    {path:'pixel',element:<Pixel/>},
    {path:'GameDetails/:cat/:id',element:<Details/>},
    {path:'*',element:<NotFound/>},
  ]}
])

function App() {
  return <>
  <CounterContextProvider>
    <RouterProvider router={routers} ></RouterProvider>
  </CounterContextProvider>
  </>
}

export default App;
