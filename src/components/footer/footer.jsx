import logoBlock from "../../images/Logo block.svg"

const Footer = (props) => {
    
    return(
        <div className="py-16 flex flex-col gap-16 text-sm md:text-base ">
            
            <div className="flex flex-wrap gap-10 md:justify-between ">                                                
                <div className="">
                    <h6 className="text-[#A3A3A3] font-medium mb-2 md:mb-4 " >
                        Get in touch
                    </h6>
                    <div className="text-[#737373] flex md:flex-col font-medium  ">
                        <p className="md:mb-6">
                            26 Obollo Road, <br />
                            Obukpa Nsukka,  <br />
                            Enugu State, Nigeria <br />
                        </p>
                        <a href="mailto:uheresc@gmail.com" className="mr-4 md:mb-6  md:block" >
                            info@uhere.org
                        </a>
                        <a href="tel:+234 814 090 6359" className="" >
                            +234 814 090 6359
                        </a>
                    </div>
                </div>

                <div className="">
                    <h6 className="text-[#A3A3A3] font-medium  mb-2 md:mb-4 " >
                        Quick links
                    </h6>
                    <div className="text-[#737373] font-medium  ">
                        <p className="flex flex-col gap-[2px] md:gap-2">
                            <span>Donate </span>
                            <span>Applications </span>
                            <span>Facilities</span>
                            <span>Activities</span>
                            <span>Gallery</span>
                        </p>                        
                    </div>
                </div>

                <div className="">
                    <h6 className="text-[#A3A3A3] font-medium  mb-2 md:mb-4 " >
                        Social
                    </h6>
                    <div className="text-[#737373] font-medium  ">
                        <p className="flex flex-col gap-[2px] md:gap-2">
                            <span>Instagram</span>
                            <span>Facebook </span>
                            <span>LinkedIn</span>
                            <span>Twitter</span>                            
                        </p>                        
                    </div>
                </div>

                <div className="">
                    <h6 className="text-[#A3A3A3] font-medium  mb-2 md:mb-4 " >
                        Related
                    </h6>
                    <div className="text-[#737373] font-medium  ">
                        <p className="flex flex-col gap-[2px] md:gap-2">
                            <span>E.C.S </span>
                            <span>Opus Dei </span>
                            <span>Hillpoint</span>
                            <span>Irawo</span>
                            <span>Ekulu</span>
                        </p>                        
                    </div>
                </div>
            </div>

            <div className="flex gap-[10px] flex-col md:flex-row items-center md:justify-between">
                <img src={logoBlock} alt="Uhere Logo" className="w-[100px] md:w-[131px] h-[32px] md:h-[44px] " />
                <p className="text-[#A3A3A3] text-center " >
                    © 2023 Uhere Study Centre. All rights reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer