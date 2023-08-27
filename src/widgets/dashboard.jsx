import Sentence from "../components/sub_title"
import sofa from "../assets/images/sofa.png"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="">
                <div className="flex flex-col md:flex-row justify-end gap-16 items-center">
                    <div className="title-main md:ml-[142px] md:w-[712px]">
                        <p className="text-[64px] font-extrabold text-dark-brown leading-tight">The kind of <span className="text-young-brown">furniture</span> you have been looking for</p>
                    </div>
                    <img src={sofa} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;