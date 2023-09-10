import { Login } from 'components/auth/Login';
import { CalendarScreen } from 'components/calendar/CalendarScreen';
import React from 'react'
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { AppRouter } from "router/AppRouter";
export default function CalendarApp() {
  return (
      <AppRouter/>
  );
}

