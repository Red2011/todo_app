import {FC, ReactNode} from "react";
// import General from "./general";
import Header from "./Header";
import Footer from "./Footer";

type layoutprops = {
    children:ReactNode
}

const Layout:FC<layoutprops> = ({children}) => (
    <>
        {/*<General/>*/}
        <div className="min-h-screen flex flex-col">
            <Header/>
               <main className="flex-auto">{children}</main>
            <Footer/>
        </div>

    </>

);

export default Layout;


