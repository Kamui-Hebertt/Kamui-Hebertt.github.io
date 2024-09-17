import Counter from "@/app/components/CounterTest";
import Nav from "@/app/components/Navbar";
import Intro from "./components/Introduction";
import net from '../../../public/net.png';
import Overview from "./components/Overview";
import StackCards from "./components/StackCards";
import Square  from "./components/Square";


export default function Home() {


  return (
    <>



   <Nav />


   {/* <Counter /> */}
   <Intro />
   <Overview />
   <StackCards />
    <Square />

    </>
  );
}