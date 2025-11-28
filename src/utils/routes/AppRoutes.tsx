import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../../features/auth/SignIn'
import { useAppSelector } from '../redux/store'
import Admin from '../../features/admin/Admin'
import Landing from '../../features/landing/Landing'

export default function AppRoutes() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Routes>
      {user ? (
        <>
          <Route path="*" element={<Admin />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}
