import { Link } from "react-router-dom";
import UserData from "./userData";
import { BiShoppingBag } from "react-icons/bi";



export default function Header() {
    return (
        <header className="w-full h-[80px] bg-accent flex relative">
            <img src="/logo.png" className="w-[79px] h-full " alt="logo.png"></img>
            <div className="w-full h-full flex text-primary justify-center items-center text-xl gap-[30px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>     
            <Link to="/cart" className="absolute right-10 top-[20px] translate-y-1/2 text-primary text-2xl">
                <BiShoppingBag />
            </Link>      
            
            
        </header>
    );
}