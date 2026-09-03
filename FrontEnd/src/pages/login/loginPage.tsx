import LoginForm from '../../components/LoginForm/loginForm'
import background from '../../assets/images/LoginBackground01.jpg'

function LoginPage() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <LoginForm />
    </div>
  )
}

export default LoginPage
