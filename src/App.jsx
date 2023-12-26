//react-router-dom
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//components
//components/authentication
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';

//components/destinations
import AfricaPage from './components/destinations/AfricaPage';
import AsiaPage from './components/destinations/AsiaPage';
import EuropePage from './components/destinations/EuropePage';
import NorthAmericaPage from './components/destinations/NorthAmericaPage';
import OceaniaPage from './components/destinations/OceaniaPage';
import SouthAmericaPage from './components/destinations/SouthAmericaPage';

//components(others)
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import FirstPage from './components/FirstPage';
import Header from './components/Header';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

//style
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<FirstPage />} />
      <Route path="about" element={<SecondPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="destination" element={<ThirdPage />} />
      <Route path="destination/africa" element={<AfricaPage />} />
      <Route path="destination/asia" element={<AsiaPage />} />
      <Route path="destination/europe" element={<EuropePage />} />
      <Route path="destination/n-america" element={<NorthAmericaPage />} />
      <Route path="destination/oceania" element={<OceaniaPage />} />
      <Route path="destination/s-america" element={<SouthAmericaPage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
