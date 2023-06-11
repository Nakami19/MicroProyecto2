
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { UserContextProvider } from "../../contexts/UserContext";

export function Layout() {


    return (
        <main>
        <UserContextProvider>

          <NavBar/>
          
          <section className="body">
            <Outlet/>
          </section>

           <footer>
            <Footer/>
           </footer>
           </UserContextProvider>
        </main>
    );
  }