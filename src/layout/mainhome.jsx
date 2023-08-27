import AccordionPage from "../widgets/accordion_page";
import Footer from "../widgets/footer";
import Search from "../widgets/search";
import Partners from "../widgets/partners";
import Advantages from "../widgets/advantages";
import Dashboard from "../widgets/dashboard";
import Navbar from "../widgets/navbar";

function MainHome() {
    return (
        <>
        <Navbar />
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