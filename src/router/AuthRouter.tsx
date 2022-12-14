import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

import '../css/login-register.css';

export const AuthRouter = () => {
  return (
    <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100 p-t-50 p-b-90">
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registro' element={<RegisterPage />} />

                    <Route path='/*' element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}
