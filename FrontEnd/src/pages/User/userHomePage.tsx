import {useState} from "react"
import Header from "../../components/shared/header"

const userHomePage = () => {
  const [user, setUser] = useState(null)


  return(
    <div>
      <Header/>
    </div>
  );
}


export default userHomePage;