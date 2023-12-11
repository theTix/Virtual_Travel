//react
import { useState } from 'react';

//react-router-dom
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//style
import './App.css';

//pages
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import Header from './components/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<FirstPage />} />
      <Route path="about" element={<SecondPage />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
