import { useEffect ,useState} from "react"


const GetIdUser = () => {
   const [id, setid] = useState();

  useEffect(()=>{
     const userid =  JSON.parse(localStorage.getItem("user")); 
     setid(userid.id)
  })
  return id;
} 

export default GetIdUser;