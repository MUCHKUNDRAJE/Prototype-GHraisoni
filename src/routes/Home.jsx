import Login from "../components/resusable/login-button-supa";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="h-screen  w-full text-white flex items-center relative justify-center bg-[url(https://images.unsplash.com/photo-1462524500090-89443873e2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center ">
     <div className="h-full w-full absolute top-0 left-0 bg-black opacity-20 ">

     </div>
      <Card className={"h-52 w-96 rounded-3xl backdrop-blur-3xl z-40  "}>
        <CardHeader>
          <CardTitle  className={"text-center"}>Login</CardTitle>
          <CardDescription className={"text-center"}>
            Please log in to your account
          </CardDescription>
        </CardHeader>
          <Login/>
        <CardContent className={"flex items-center justify-center"}>
          <p className="text-center">Don't have an account? Sign up</p>
        </CardContent>

       
      </Card>
    </div>
  );
}

export default Home;
