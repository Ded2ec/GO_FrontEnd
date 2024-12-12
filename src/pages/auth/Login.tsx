import AuthLayout from '@/components/layouts/AuthLayout'
import { useForm,SubmitHandler } from 'react-hook-form';
import { NavLink } from 'react-router-dom'
import { authLogin } from '@/services/authUserAPI';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';

// กำหนด interface สำหรับข้อมูลฟอร์ม
interface IFormInput {
    email: string
    password: string
}

// กำหนดประเภทของ Error ที่ได้รับจาก API
interface APIError {
    message: string
    status: number
}

function Login() {

     document.title = 'Login'

     //Create Hook form

     const { register, handleSubmit,formState: { errors }} = useForm<IFormInput>();

    // Handle form submit
     const onSubmit:SubmitHandler<IFormInput> = (data) =>{
        // console.log(data)
            const authData = {
                "email": data.email,
                "password": data.password
                            }

     //Call API
     authLogin(authData)
     .then(response => {

         // console.log(response)
         // แสดงข้อความ Success ด้วย SweetAlert
         Swal.fire({
             icon: 'success',
             title: 'Success',
             text: 'Login successful'
         })

         // ถ้า Login สำเร็จ ให้เก็บข้อมูลลง localStorage
         localStorage.setItem('access_token', response.data.access_token)
         localStorage.setItem('refresh_token', response.data.refresh_token)
         localStorage.setItem('user', JSON.stringify(response.data.user))

         setTimeout(() => {
             // Redirect ไปหน้า Home
             window.location.href = "/"
         }, 2000)
         

     })
     .catch((err: AxiosError<APIError>) => {
         if (err.response) {
             console.log(`Error: ${err.response.data.message}, Status: ${err.response.status}`)
             // แสดงข้อความ Error ด้วย SweetAlert
             Swal.fire({
                 icon: 'error',
                 title: 'Error',
                 text: 'Invalid email or password'
             })
         } else {
             console.log('An unexpected error occurred')
         }
     })

}

  return (
    <AuthLayout>
    <div className="flex h-screen bg-indigo-700">

        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">

            {/* header */}
            <header className="mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full mx-auto"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </header>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text"
                        {...register('email',
                            {
                                required: true,
                                minLength: 5,
                                maxLength: 50,
                                pattern: /^\S+@\S+$/i
                            })
                        }
                    />
                    {errors.email && <p className="text-red-500">This field is required</p>}
                    {errors.email?.type === 'minLength' && <p className="text-red-500">This field required min length of 5</p>}
                    {errors.email?.type === 'maxLength' && <p className="text-red-500">This field required max length of 50</p>}
                    {errors.email?.type === 'pattern' && <p className="text-red-500">Invalid email format</p>}
                </div>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password"
                        {...register('password',
                            {
                                required: true,
                                minLength: 6,
                                maxLength: 50
                            })
                        }
                    />
                    {errors.password && <p className="text-red-500">This field is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">This field required min length of 6</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-500">This field required max length of 50</p>}
                </div>
                <div>
                    <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Login" />
                </div>
            </form>

            {/* footer */}
            <footer>
                <NavLink className="text-indigo-700 hover:text-pink-700 text-sm float-left" to="/forgotpassword">Forgot Password?</NavLink>
                <NavLink className="text-indigo-700 hover:text-pink-700 text-sm float-right" to="/register">Create Account</NavLink>
            </footer>
        </div>

    </div>
</AuthLayout>
  )
}

export default Login
