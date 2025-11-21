//rfc kiyala gehuwama enw

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate() // to navigate programmatically

	async function login() {
		console.log("Login button clicked");
		console.log("Email:", email);
		console.log("Password:", password);

		try {
			const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
				email: email,
				password: password,
			});

            console.log(res)

			localStorage.setItem("token", res.data.token);

            if(res.data.role == "admin"){

                // window.location.href = "/admin"; // Redirect to admin dashboard
                // return
                navigate("/admin") // Redirect to admin dashboard without reloading

            }else{

                // window.location.href = "/";
                navigate("/")

            }

            //alert("Login successful! Welcome back.");

            toast.success("Login successful! Welcome back.");

		} catch (err) {

            //alert("Login failed! Please check your credentials and try again.");
            toast.error("Login failed! Please check your credentials and try again.");  // to show error message in professional way. use toast library.

            console.log("Error during login:");
			console.log(err);
		}
	}

    // async function login(){
    //     console.log("Login button clicked");
    //     console.log("Email",email);
    //     console.log("Password", password);

    //     try{
    //     const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
    //         email : email,
    //         password : password,
    //     });
    //     console.log(res);
    //     toast.success("Login succesful");

    //    } catch (err) {

    //         //alert("Login failed! Please check your credentials and try again.");
    //         toast.error("Login failed! Please check your credentials and try again.");

    //         console.log("Error during login:");
	// 		console.log(err);
	// 	}
    // }


    return (
        <div className="w-full h-screen bg-[url('/bglogin.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">
                <img src="/logo.png" alt="logo" className="w-[200px] h-[200px] mb-[20px] object-cover"/>
                <h1 className="text-[50px] text-gold text-shadow-accent text-shadow-2xs font-bold text-center">Plug In. Power Up. Play Hard</h1>
                <p className="text-[30px] text-white font-semibold italic">Your Ultimalte Destination for Gaing Gear</p>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col justify-center items-center p-[30px]">
                    <p className="text-[40px] font-bold mb-[20px] text-accent text-shadow-white ">Login</p>
                    <input
                    onChange={
                        (e) => 
                            setEmail(e.target.value)
                    }
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full h-[50px] mb-[20px] border rounded-lg border-accent p-10 text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" 
                    />
                    <input 
                    onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    } 
                    type="password" 
                    placeholder="Your Password" 
                    className="w-full h-[50px] mb-[20px] border rounded-lg border-accent p-10 text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" 
                    />

                    <p className="text-white not-italic w-full text-right mb-[20px]">Forget password  <Link to="/register" className="text-gold italic">Reset it here</Link></p>
                     
                    <button onClick={login} className="w-full h-[50px] bg-accent text-secondary font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent">Login</button>                
                    
                    <p className="text-white not-italic">Dont't have an account?  <Link to="/register" className="text-gold italic">Register here</Link></p>

                 

                    
                </div>
            </div>
        </div>
    );
}

