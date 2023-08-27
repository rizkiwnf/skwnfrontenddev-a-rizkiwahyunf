import React from "react";
import Logo from "../components/logo";
import FooterTitle from "../components/footer_title";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container w-full mx-auto py-20">
                <div className="flex flex-col lg:flex-row justify-between items-center px-5 md:px-0">
                    <div className="left-side flex flex-col flex-start gap-16 md:w-[504px] text-[12px] md:text-[16px] pb-9 lga:pb-0">
                        <div className="desc-field flex flex-col items-center md:items-start gap-6">
                            <Logo width="w-[97px]" />
                            <p className="text-center md:text-start">Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.</p>
                        </div>
                        <p className="text-[16px] hidden lg:block">
                            ©Copyright 2022 Dekoor
                        </p>
                    </div>
                    <div className="right-side flex gap-6 md:gap-14 flex-wrap justify-around text-center md:text-start px-9 md:px-0">
                        <div className="support flex flex-col gap-6 text-[14px] md:text-lg">
                            <FooterTitle title="Support"/>
                            <div className="support-menu flex flex-col gap-7 text-[12px] md:text-[16px]">
                                <a href="">FAQ</a>
                                <a href="">Shipping & Returns</a>
                                <a href="">Care guide</a>
                                <a href="">Redeem warranty</a>
                            </div>
                        </div>
                        <div className="social-media flex flex-col gap-6 text-[14px] md:text-lg">
                            <FooterTitle title="Social Media" />
                            <div className="sosmed-menu flex flex-col gap-7 text-[12px] md:text-[16px]">
                                <a href="">Instagram</a>
                                <a href="">Facebook</a>
                                <a href="">Twitter</a>
                                <a href="">Tiktok</a>
                            </div>
                        </div>
                        <div className="about-us flex flex-col gap-6 text-[14px] md:text-lg">
                            <FooterTitle title="About Us" />
                            <div className="aboutus-menu flex flex-col gap-7 text-[12px] md:text-[16px]">
                                <a href="">Our Story</a>
                                <a href="">Designer</a>
                                <a href="">Craftmanship</a>
                                <a href="">Sustainability</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;