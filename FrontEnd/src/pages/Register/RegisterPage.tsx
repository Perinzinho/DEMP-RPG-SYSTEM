import RegisterForm from '../../components/RegisterForm/registerForm'
import background from '../../assets/images/LoginBackground01.jpg'

function RegisterPage() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
