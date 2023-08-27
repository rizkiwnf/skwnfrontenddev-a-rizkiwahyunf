import AccordionPage from "../widgets/accordion_page";
import Footer from "../widgets/footer";
import Search from "../widgets/search";
import Partners from "../widgets/partners";
import Advantages from "../widgets/advantages";
import Dashboard from "../widgets/dashboard";

function MainHome() {
    return (
        <>
            <Dashboard />
            <Advantages />
            <Partners />
            {/* <AccordionPage /> */}
            <Search />
            <Footer />
        </>
    )

}
export default MainHome;