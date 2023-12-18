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
import ThirdPage from './components/ThirdPage';
import NorthAmericaPage from './components/destinations/NorthAmericaPage';
import SouthAmericaPage from './components/destinations/SouthAmericaPage';
import EuropePage from './components/destinations/EuropePage';
import AfricaPage from './components/destinations/AfricaPage';
import AsiaPage from './components/destinations/AsiaPage';
import OceaniaPage from './components/destinations/OceaniaPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<FirstPage />} />
      <Route path="about" element={<SecondPage />} />
      <Route path="destination" element={<ThirdPage />} />
      <Route path="destination/n-america" element={<NorthAmericaPage />} />
      <Route path="destination/s-america" element={<SouthAmericaPage />} />
      <Route path="destination/europe" element={<EuropePage />} />
      <Route path="destination/africa" element={<AfricaPage />} />
      <Route path="destination/asia" element={<AsiaPage />} />
      <Route path="destination/oceania" element={<OceaniaPage />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
