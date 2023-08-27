import SubTitle from "../components/sub_title"
import sponsor1 from "../assets/images/sponsor1.png"
import sponsor2 from "../assets/images/sponsor2.png"
import sponsor3 from "../assets/images/sponsor3.png"
import sponsor4 from "../assets/images/sponsor4.png"

const Partners = () => {
    return (
        <div className="partners bg-broken-white py-[80px]">
            <div className="container mx-auto items-center md:items-start text-center md:text-start bg-broken-white px-6 md:px-0 ">
                <div className="flex flex-col lg:flex-row justify-between items-center bg-broken-white gap-6 lg:gap-0">
                    <div className="number flex flex-col gap-0">
                        <SubTitle className="bg-broken-white xs:text-2xl md:text-[96px] font-bold" text="25+" />
                        <SubTitle className="bg-broken-white text-sm md:text-2xl" text="PARTNERED BRANDS" />
                    </div>
                    <div className="sponsor bg-broken-white flex flex-row flex-wrap justify-between w-full lg:w-[761px]">
                        <img className="w-[49px] md:w-auto bg-broken-white" src={sponsor1} alt="" />
                        <img className="w-[40px] md:w-auto bg-broken-white" src={sponsor2} alt="" />
                        <img className="w-[83px] md:w-auto bg-broken-white" src={sponsor3} alt="" />
                        <img className="w-[57px] md:w-auto bg-broken-white" src={sponsor4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners