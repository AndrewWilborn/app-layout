import Footer from "./Footer";
import Main from "./Main";
import NavList from "./NavList";

export default function AppLayout({children}) {

    return (
        <>
            <Main />
            <NavList />
            {children}
            <Footer />
        </>
    )
}