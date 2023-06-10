import { Navbar } from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contextos/userContext";

export function Layout() {


    return (
        
        <main>
         <UserContextProvider>
          {/* todo lo que este dentro de la etiqueta userContext puede acceder a userContext */}
          
          <Navbar />
  
          <section className="body">
            <Outlet /> {/*importante para que el layout aparezca en todas las rutas/paginas*/}
          </section>
         </UserContextProvider>
        </main>
        
    );
  }