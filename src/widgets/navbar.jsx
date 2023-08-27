import Logo from "../components/logo";
import { useState } from "react";

const Navbar = () => {
    let Links = [
        { name: "About Us", link: "/" },
        { name: "Furniture", link: "/" },
        { name: "Partnerships", link: "/" },
        { name: "Contact", link: "/" },
    ]
    let [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full z-10 shadow-md ">
            <div className="navbar">
                <div className="container mx-auto my-[15px] ">
                    <div className="flex flex-col md:flex-row justify-between md:items-center px-10 md:px-0">
                        <div className="logo">
                            <Logo width="w-[161px]" />
                        </div>
                        <div className={`menu  py-4 md:py-0 `}>
                            <ul className={` bg-white px-5 md:px-0 md:flex md:gap-12 font-semibold absolute md:static w-full md:w-auto ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-0`}>
                                {Links.map((link) => (
                                    <li className="my-1">
                                        <a href={link.link}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`buttons flex gap-4 font-semibold ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-0`}>
                            <button className="px-6 py-3 bg-teal rounded-xl">Sign Up</button>
                            <button className="px-3 py-3 bg-dark-brown rounded-xl">
                                <svg className="bg-dark-brown text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" fill="#E5F1B5" />
                                </svg>
                            </button>

                        </div>
                        <div onClick={()=>setOpen(!open)} className="popup absolute right-8 top-6 cursor-pointer md:hidden flex">
                            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar