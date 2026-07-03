import {useState} from "react"
import {Button} from "../../components/ui/button"
import backgroundImage from '../../assets/backgroundImages/backgroundImage02.jpg'
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../contexts/userAuth"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"

const registerPage = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[username, setUsername] = useState("")
    const { register } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await register(username, email, password)
        navigate('/login')
    }

    return(
    <div className="flex items-center justify-center min-h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
        <Card className="w-full max-w-lg min-h-[500px] bg-[#365D6F] opacity-93">
            <CardHeader>
                <CardTitle className="text-4xl font-bold text-center text-white pt-6">Cadastrar</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username" className="text-white text-base">
                                Nome de usuário
                            </Label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Digite seu nome de usuário"
                                className="px-4 py-3 border-[#0e9aa7] rounded-md focus:outline-none focus-visible:ring-[#0e9aa7] focus-visible:ring-2 bg-[#084251] text-white" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-white text-base">
                                Email
                            </Label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Digite seu email"
                                className="px-4 py-3 border-[#0e9aa7] rounded-md focus:outline-none focus-visible:ring-[#0e9aa7] focus-visible:ring-2 bg-[#084251] text-white" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-white text-base">
                                Senha
                            </Label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                className="px-4 py-3 border-[#0e9aa7] rounded-md focus:outline-none focus-visible:ring-[#0e9aa7] focus-visible:ring-2 bg-[#084251] text-white" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    <Button type="submit" className="px-4 py-6 text-white bg-[#063343]  rounded-md hover:bg-[#010101] text-lg w-1/2 mx-auto">
                       Cadastrar
                     </Button>
                    </div>
                </form>
            </CardContent>
        <CardContent>
            <CardFooter className="flex-col gap-2 bg-[#365D6F]">
                <p className="text-white">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Faça login
                    </Link>
                </p>
            </CardFooter>
        </CardContent>
        </Card>
    </div>
    );
}

export default registerPage