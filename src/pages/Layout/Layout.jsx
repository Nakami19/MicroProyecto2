
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

export function Layout() {


    return (
        
        <main>
          
          <NavBar/>
          
          <section className="body">
            <Outlet/>
          </section>

           <footer>
            <Footer/>
           </footer>
        </main>
       
    );
  }