"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "./auth-context"

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/page3/login" replace />
  }

  return children
}

export default ProtectedRoute
