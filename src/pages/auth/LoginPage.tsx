import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth';
import Swal from 'sweetalert2'

export const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberme: false
  })

  useEffect(() => {
      const remembermeEmail = localStorage.getItem('email');
      if (remembermeEmail) {
        setForm((form) => ({
          ...form,
          email: remembermeEmail,
          rememberme: true
        }))
      }
  }, [])


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const toogleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme
    })
  }

  const verifyEmptyFields = () => {
    return (form.email.trim().length === 0 || form.password.trim().length === 0) ? true : false
  }

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (form.rememberme) 
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email')

    const {email, password} = form
    const isLogin = await login(email, password)
    if (!isLogin) {
      Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')
    }
  }

  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">
        Ingreso
      </span>
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={form.email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="password" 
          name="password" 
          placeholder="Password" 
          minLength={6}
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div 
          className="col"
          onClick={() => toogleCheck()}
        >
          <input 
            className="input-checkbox100" 
            id="ckb1" 
            type="checkbox" 
            name="rememberme" 
            checked={form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">
            Recordarme
          </label>
        </div>

        <div className="col text-right">
          <Link to="/auth/registro" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="w-full m-t-17">
        <button 
          type='submit'
          className={`disabled:bg-gray-500 transition-all duration-[0.4s] w-full bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-5 px-4 rounded focus:outline-none focus:shadow-outline`}
          disabled={verifyEmptyFields()}
        >
          INGRESAR
        </button>
      </div>
 
		</form>
  )
}
