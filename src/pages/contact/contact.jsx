import instagram from "../../images/contact/instagram.svg"
import location from "../../images/contact/location.svg"
import mail from "../../images/contact/mail.svg"
import phone from "../../images/contact/phone.svg"
import twitter from "../../images/contact/twitter.svg"
import facebook from "../../images/contact/facebook.svg"
import linkedin from "../../images/contact/linkedin.svg"
import whatsapp from "../../images/contact/whatsapp.svg"

import placeholder from "../../images/Content.png"

import Navbar from "../../components/navbar/navbar";
import Faq from "../../components/faq/faq";
import Footer from "../../components/footer/footer";

function Contact() {
    return (
        <div className="px-4 md:px-[50px] 2xl:px-[112px]" >
            <header>
                <Navbar />
            </header>
            <main className="text-[#171717]" >
                
                <div className="py-10 flex flex-col items-center ">
                    <h1 className=" text-[40px] leading-[48px] text-[#171717] font-bold text-center mb-3" >
                        Get in touch with Us
                    </h1>
                    <hr className="border-1 border-[#6366F1] w-[220px] mb-[24px] " />                    
                </div>

                <div className="py-[52px] flex md:justify-between gap-[72px] ">
                    <section className="flex-1" >
                        <h3 className="text-[32px] font-semibold mb-10 " >
                            Contact Information
                        </h3>
                        <div className="flex items-start gap-4 mb-8 " >                            
                            <div className="pt-1">
                                <img src={location} alt="" />                                
                            </div>
                            <p className="text-lg font-medium text-[#404040] " >
                                26 Obollo Road,<br />
                                Obukpa, Nsukka,<br />
                                Enugu State, Nigeria.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mb-8 " >
                            <img src = {mail} alt="" />
                            <p className="text-lg font-medium text-[#404040] " >
                                info@uhere.org
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mb-10 " >
                            <img src = {phone} alt="" />
                            <p className="text-lg font-medium text-[#404040] " >
                                +234 814 090 6359
                            </p>
                        </div>
                        <div className="flex gap-6 mb-16 " >
                            <img src = {instagram} alt="" />
                            <img src = {facebook} alt="" />
                            <img src = {linkedin} alt="" />
                            <img src = {twitter} alt="" />
                            <img src = {whatsapp} alt="" />
                        </div>
                        <h4 className=" text-xl font-semibold " > 
                            How to get here
                        </h4>
                        <Faq title = 'From Peace Park' />
                        <Faq title = 'From UNN Second Gate' />

                    </section>
                    <section className="flex-1" >
                        <h3 className="text-[32px] font-semibold mb-3 " >
                            We’d love to hear from you  
                        </h3>
                        <p className="text-[#404040] mb-10 " >
                            Contact us regarding any concerns or inquiries.
                        </p>
                        <form>
                            <div className="flex gap-[22px] mb-8 ">
                                <div className="flex flex-col gap-1 " >
                                    <label htmlFor="firstName" className=" text-base font-medium " >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className=" border-[1px] border-[#D4D4D4] bg-[#FFFFFF] rounded-md px-3 py-[10px] "
                                    />
                                </div>
                                <div className="flex flex-col gap-1 " >
                                    <label htmlFor="lastName" className=" text-base font-medium " >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        className=" border-[1px] border-[#D4D4D4] bg-[#FFFFFF] rounded-md px-3 py-[10px] "
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 mb-6 " >
                                <label htmlFor="email" className=" text-base font-medium " >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    className=" border-[1px] border-[#D4D4D4] bg-[#FFFFFF] rounded-md px-3 py-[10px] "
                                />
                            </div>

                            <div className="flex flex-col gap-1 mb-6 " >
                                <label htmlFor="phone" className=" text-base font-medium " >
                                    Phone number
                                </label>
                                <input
                                    type= "tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+234  802-345-6789"
                                    className=" border-[1px] border-[#D4D4D4] bg-[#FFFFFF] rounded-md px-3 py-[10px] "
                                />
                            </div>

                            <div className="flex flex-col gap-1 mb-6 " >
                                <label htmlFor="message" className=" text-base font-medium " >
                                    Message
                                </label>
                                <textarea                                    
                                    name="message"
                                    id="message"
                                    placeholder="Please provide a short description of yourself and any questions you have about Uhere Study Centre."
                                    className=" border-[1px] border-[#D4D4D4] bg-[#FFFFFF] rounded-md px-3 py-[10px] "
                                />
                            </div>

                            <button className="px-[56px] py-[10px] bg-[#6366F1] rounded-md text-lg font-medium text-white " >
                                Submit
                            </button>

                        </form>
                    </section>
                </div>

                <div className=" py-16  " >
                    <h4 className="text-[32px] font-semibold mb-10 " >
                        Uhere on the map
                    </h4>
                    <img src={placeholder} alt="" className="w-full max-h-[520px] "  />
                </div>

            </main>

            <footer className="bg-[#E5E5E5] -mx-4 md:-mx-[50px] 2xl:-mx-[112px] px-4 md:px-[50px] 2xl:px-[112px] " >
                <Footer />
            </footer>
        </div>
    )
}

export default Contact;