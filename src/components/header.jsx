import { Link } from "react-router-dom";
import UserData from "./userData";



export default function Header() {
    return (
        <header className="w-full h-[80px] bg-accent flex">
            <img src="/logo.png" className="w-[79px] h-full " alt="logo.png"></img>
            <div className="w-full h-full flex text-primary justify-center items-center text-xl gap-[30px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>           
            
            
        </header>
    );
}