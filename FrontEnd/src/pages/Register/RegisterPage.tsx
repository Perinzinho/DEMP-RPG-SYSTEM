import RegisterForm from '../../components/RegisterForm/registerForm'
import background from '../../assets/images/LoginBackground01.jpg'

function RegisterPage() {
  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-y-auto bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 w-full py-8">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
