import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <header className="mx-auto sticky top-0 z-50 bg-white">
                <Navbar></Navbar>
            </header>
            <div className="container mx-auto p-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Root;