
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import NoPage from './components/SignUp'
import MyCases from './components/MyCases'
import Fees from './components/Fees'
import Clients from './components/Clients'
import Profile from './components/Profile'
import ForgetPassword from './components/ForgetPassword'
import LandingPage from './components/landingpage'
import ProtectedRoute from './components/ProtectedRoute'; // import this at the top

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signUp",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    )
  },
  {
    path: "/myCases",
    element: (
      <ProtectedRoute>
        <MyCases/>
      </ProtectedRoute>
    )
  },
  {
    path: "/fees",
    element: (
      <ProtectedRoute>
        <Fees/>
      </ProtectedRoute>
    )
  },
  {
    path: "/clients",
    element: (
      <ProtectedRoute>
        <Clients/>
      </ProtectedRoute>
    )
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile/>
      </ProtectedRoute>
    )
  },
  {
    path: "/forget-password",
    element: <ForgetPassword/>
  },
  {
    path: "*",
    element: <NoPage/>
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App
