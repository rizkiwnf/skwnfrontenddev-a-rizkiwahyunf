import Sentence from "../components/sub_title";
import mail from "../assets/images/mail.png"

const Search = () => {
    return (
        <div className="search bg-broken-white py-9 md:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center md:items-start text-center md:text-start gap-0 md:gap-11 bg-broken-white px-6 md:px-0">
                    <Sentence className="uppercase text-dark-brown text-sm md:text-2xl tracking-tight bg-broken-white" text="limited deals" />
                    <Sentence className="text-dark-brown text-lg md:text-[64px] font-extrabold md:leading-[4.5rem] overflow-y-hidden bg-broken-white" text="Become a member and get 10% off of your first purchase" />
                    <div className="flex max-w-[256px] md:max-w-[431px] mt-4 md:mt-0 rounded-xl">
                        <input type="text" id="website-admin" class="bg-white text-dark-brown focus:ring-teal focus:border-2 focus:border-teal block flex-1 w-full text-xs md:text-sm py-4 px-4 md:px-9 md:py-4" placeholder="Enter your email here" />
                        <div class="inline-flex items-center px-4 md:px-3 text-sm bg-teal rounded-r-xl">
                            <img src={mail} alt="" className="bg-teal"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Search;