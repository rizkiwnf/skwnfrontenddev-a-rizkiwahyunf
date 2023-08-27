import Sentence from "../components/sub_title"
import sofa from "../assets/images/sofa.png"
import sofaresp from "../assets/images/sofaresp.png"


const Dashboard = () => {
    return (
        <div className="dashboard mt-40 lg:mt-[45px]">
            <div className="">
                <div className="flex flex-col md:flex-row justify-end gap-16 items-center">
                    <div className="title-main  md:ml-[142px] md:w-[712px] flex flex-col gap-4 md:gap-12 text-center md:text-start tracking-wide md:tracking-normal px-4 md:px-0">
                        <p className="text-[32px] md:text-[64px] font-extrabold text-dark-brown leading-relaxed md:leading-tight">The kind of <span className="text-young-brown">furniture</span> you have been looking for</p>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                            <div className="inline-flex gap-4 bg-teal py-4 px-6 md:px-9 md:py-6 w-auto rounded-xl">
                                <svg className="bg-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_4_639)">
                                        <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09 2.53002 2.53 6.09001 3.05 10.32C3.39 13.12 5.61 15.44 8.39 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.50002C5 7.01002 7.01 5.00002 9.5 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.5 14Z" fill="#553B33" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4_639">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="bg-teal">SEARCH CATALOG</p>
                            </div>
                            <div className="inline-flex gap-4 py-4 px-6 md:px-9 md:py-6 w-auto rounded-xl border-2 border-dark-brown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#553B33" />
                                </svg>
                                <p className="">WATCH VIDEOS</p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-0 py-0">
                        <div className="medium relative">
                            <img className="hidden md:block" src={sofa} alt="" />
                            <div className="absolute bottom-36 left-8 px-4 py-2 bg-white/50 rounded-xl">
                                $329
                            </div>
                            <p className="absolute bottom-16 left-5 px-4 bg-transparent text-[64px] text-white">
                                Pösht Sofa
                            </p>
                            <div className="absolute bottom-5 left-8 px-4 py-3 bg-dark-brown rounded-xl">
                                <div className="flex bg-dark-brown w-[149px] justify-between items-center ">
                                    <p className="bg-dark-brown text-sm text-white">VIEW DETAILS</p>
                                    <svg className="bg-dark-brown" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_4_1489)">
                                            <path d="M6.66668 4L5.72668 4.94L8.78002 8L5.72668 11.06L6.66668 12L10.6667 8L6.66668 4Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_1489">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="small relative">
                            <img className="block md:hidden w-full" src={sofaresp} alt="" />
                            <div className="absolute top-5 left-8 bg-transparent text-xs text-white">
                                HIGHLIGHTED PRODUCT
                            </div>
                            <div className="absolute bottom-24 left-8 px-4 py-2 bg-white/50 rounded-xl">
                                $329
                            </div>
                            <p className="absolute bottom-16 left-5 px-4 bg-transparent text-2xl">
                                Pösht Sofa
                            </p>
                            <div className="absolute bottom-5 left-8 px-4 py-3 bg-dark-brown rounded-xl">
                                <div className="flex bg-dark-brown w-[114px] justify-between items-center ">
                                    <p className="bg-dark-brown text-xs text-white">VIEW DETAILS</p>
                                    <svg className="bg-dark-brown" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_4_1489)">
                                            <path d="M6.66668 4L5.72668 4.94L8.78002 8L5.72668 11.06L6.66668 12L10.6667 8L6.66668 4Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_1489">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;