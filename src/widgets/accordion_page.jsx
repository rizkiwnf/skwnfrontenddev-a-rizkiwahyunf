import Sentence from "../components/sub_title";
import { AccComponent } from "../components/acc_component";

const AccordionPage = () => {
    return (
        <div className="search bg-broken-white py-9 md:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center md:items-start text-center md:text-start gap-0 md:gap-11 bg-broken-white px-6 md:px-0">
                    <Sentence className="uppercase text-dark-brown text-sm md:text-2xl tracking-tight bg-broken-white" text="limited deals" />
                    <Sentence className="text-dark-brown text-lg md:text-[64px] font-extrabold md:leading-[4.5rem] overflow-y-hidden bg-broken-white" text="Become a member and get 10% off of your first purchase" />
                    <AccComponent/>
                </div>
            </div>
        </div>
    )

}
export default AccordionPage;