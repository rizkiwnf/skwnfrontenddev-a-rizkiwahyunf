import Sentence from "../components/sub_title";
import search from "../assets/images/search.png"

const Advantages = () => {
    return (
        <div className="advantages bg-dark-brown py-[32px] md:py-[72px]">
            <div className="container mx-auto ">
                <div className="flex flex-col items-center md:items-start text-center md:text-start gap-0 md:gap-11  px-6 md:px-0 bg-dark-brown">
                    <Sentence className=" bg-dark-brown uppercase text-teal text-sm md:text-2xl tracking-tight " text="limited deals" />
                    <Sentence className="bg-dark-brown text-teal text-lg md:text-[64px] font-extrabold md:leading-[4.5rem] overflow-y-hidden md:tracking-wide" text="We care about details and the quality of our products" />
                    <div className="text-start pt-8 md:pt-0 menu-advantages flex flex-col lg:flex-row lg:justify-between w-full bg-dark-brown gap-4 md:gap-0">
                        <div className="flex gap-[16px] bg-dark-brown items-center">
                            <div className="p-[8px] bg-dark-teal rounded-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-dark-teal text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <Sentence className="md:w-[277px] bg-dark-brown uppercase text-teal text-sm md:text-2xl tracking-tighter font-bold " text="MANUFACTURED WITH QUALITY MATERIALS" />
                        </div>
                        <div className="flex gap-[16px] bg-dark-brown items-center">
                            <div className="py-[8px] px-[12px] bg-dark-teal rounded-xl ">
                                <p className="font-bold text-xl bg-dark-teal text-white">5</p>
                            </div>
                            <Sentence className="md:w-[290px] bg-dark-brown uppercase text-teal text-sm md:text-2xl tracking-tighter font-bold " text="5 YEARS OF WARRANTY FOR EACH PROFUCT" />
                        </div>
                        <div className="flex gap-[16px] bg-dark-brown items-center">
                            <div className="p-[8px] bg-dark-teal rounded-xl ">
                                <svg className="bg-dark-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_4_667)">
                                        <path d="M14 6V4H10V6H14ZM4 9V18C4 18.55 4.45 19 5 19H19C19.55 19 20 18.55 20 18V9C20 8.45 19.55 8 19 8H5C4.45 8 4 8.45 4 9ZM20 6C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19L2.01 8C2.01 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.89 16 4V6H20Z" fill="#F4F4F4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4_667">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <Sentence className="md:w-[294px] bg-dark-brown uppercase text-teal text-sm md:text-2xl tracking-tighter font-bold " text="20 YEARS OF EXPERTISE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advantages;