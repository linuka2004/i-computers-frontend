import { Route, Routes, Link } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { FaStore } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";
import AdminUpdateProductPage from "./admin/adminUpdateProductPage";

export default function AdminPage() {
    return (
        <div className="w-full h-full max-h-full flex bg-accent ">
            <div className="w-[300px] bg-accent h-full">
                <div className="w-full h-[100px]  text-primary flex justify-center items-center">
                    <img src="logo.png" className="h-full"/>
                    <h1 className="text-4xl text-white">ADMIN</h1>
                </div>
                <div className="w-full h-[400px] text-white text-2xl flex flex-col pl-[20px] pt-[20px]">
                    <Link to="/admin" className="w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Orders</Link>
                    <Link to="/admin/products"className="w-full flex items-center h-[50px] gap-[10px]"><FaStore />Products</Link>
                    <Link to="/admin/users"className="w-full flex items-center h-[50px] gap-[10px]"><FiUsers />Users</Link>
                    <Link to="/admin/reviews"className="w-full flex items-center h-[50px] gap-[10px]"><MdOutlineRateReview />Reviews</Link>
                    {/* <a href="/admin/products">Products</a>
                    <a href="/admin/users">Users</a>
                    <a href="/admin/reviews">Reviews</a> */}
                </div>

            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full border-[10px] rounded-3xl overflow-y-scroll bg-primary border-accent overflow-auto custom-scrollbar">
                <Routes>
                    <Route path="/"element={<h1>Orders</h1>} />
                    <Route path="/products"element={<AdminProductsPage />} />
                    <Route path="/add-product"element={<AdminAddProductPage />} />
                    <Route path="/update-product" element={<AdminUpdateProductPage />} />
                    <Route path="/users"element={<h1>Users</h1>} />
                    <Route path="/reviews"element={<h1>Reviews</h1>} />

                </Routes>
            </div>


        </div>
        
    );
}