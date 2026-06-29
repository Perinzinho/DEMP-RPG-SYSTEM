import {useState} from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../components/ui/card"
import {Label} from "../../components/ui/label"
import {Button} from "../../components/ui/button"
import backgroundImage from '../../assets/backgroundImages/backgroundImage01.png'
import {Link, useNavigate} from "react-router-dom"


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <Card className="w-full max-w-lg min-h-[500px] bg-[#365D6F] opacity-93">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-white pt-6">Login</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-12">
                     <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white text-base ">
                          Email
                        </Label>
                        <input 
                          type="email" 
                          id="email" 
                          className="px-4 py-3 border-[#0e9aa7] rounded-md focus:outline-none focus-visible:ring-[#0e9aa7] focus-visible:ring-2 bg-[#084251] text-white" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="password" className="text-white text-base">
                          Password
                        </Label>
                        <input 
                          type="password" 
                          id="password" 
                          className="px-4 py-3 border-[#0e9aa7] rounded-md focus:outline-none focus-visible:ring-[#0e9aa7] focus-visible:ring-2 bg-[#084251] text-white" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <Button type="submit" className="px-4 py-6 text-white bg-[#063343]  rounded-md hover:bg-[#010101] text-lg w-1/2 mx-auto">
                       Login
                     </Button>
                    
                </div>
            </form>
        </CardContent>
        <CardContent>
            <CardFooter className="flex-col gap-2 bg-[#365D6F]">
                <p className="text-white">
                    Não tem uma conta?{' '}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage