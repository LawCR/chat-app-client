import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth'
import Swal from 'sweetalert2'

export const RegisterPage = () => {

  const { register } = useContext(AuthContext)


  const [form, setForm] = useState({
    name: 'Alvaro',
    lastname: 'Calderon',
    email: 'alvaro@gmail.com',
    password: '123456',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const verifyEmptyFields = () => {
    return (
            form.name.trim().length === 0 
            || form.lastname.trim().length === 0 
            || form.email.trim().length === 0 
            || form.password.trim().length === 0) ? true : false
  }

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {name, lastname, email, password} = form
    const isRegister = await register(name, lastname, email, password)
    if (isRegister !== true) {
      Swal.fire('Error', isRegister, 'error')
    }
  }

  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">
        Registro
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          value={form.name}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="text" 
          name="lastname" 
          placeholder="Apellido" 
          value={form.lastname}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
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
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="w-full m-t-17">
        <button 
          type='submit'
          className={`disabled:bg-gray-500 transition-all duration-[0.4s] w-full bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-5 px-4 rounded focus:outline-none focus:shadow-outline`}
          disabled={verifyEmptyFields()}
        >
          CREAR CUENTA
        </button>
      </div>

    </form>
  )
}
