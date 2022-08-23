import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  GlobalSpinner  from '../components/Spinner'
import HorizontalLinearStepper from '../views/SignUp';

const Login = React.lazy(() => import('../views/Login'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));
const NotFound = React.lazy(() => import('../components/NotFound'));


const DefaultRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<GlobalSpinner />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<HorizontalLinearStepper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default DefaultRoutes