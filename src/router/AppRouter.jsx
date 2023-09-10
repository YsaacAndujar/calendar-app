import { Login } from 'components/auth/Login'
import { CalendarScreen } from 'components/calendar/CalendarScreen'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route element={<CalendarScreen/>} path='/'/>
        <Route path="*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
} 
