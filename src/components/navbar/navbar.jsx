import logo from "../../images/logo.svg"
import arrowdown from "../../images/cheveron-down.svg"
import logoBlock from "../../images/Logo block.svg"
import logoBlockMobile from "../../images/Logoblockmobile.svg"
import menuIcon from "../../images/menu.svg"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import About from "../../pages/about/about"

function Navbar(props){
    
    const isMobile = useMediaQuery({
        query:'(max-width:640px)'
    })

    return(
        <div className="flex flex-row py-[24px] items-center justify-between text-[#171717]" >
            <div className="flex gap-[10px] items-center ">
                {/* <img src={logo} alt="Uhere logo" className="w-[35px] h-[40px] " />
                <div className="text-center ">
                    <p className=" text-xl font-bold " >UHERE</p>
                    <hr className="border-[1px] border-[#176DFF]" />
                    <p className=" text-[10px] font-medium " >STUDY CENTRE</p>
                </div> */}
                <img src={ isMobile ? logoBlockMobile : logoBlock} alt="Logo block" className="w-[100px] h-[32px] md:w-[131px] md:h-[44px] " />
            </div>

            <nav className="hidden md:flex flex-col lg:flex-row gap-[24px] ">
                <Link to= '/about' >
                    <div className="flex items-center gap-[6px]" >
                        <span className="text-base font-medium leading-6" >About Us</span>
                        <img src={arrowdown} alt="Down arrow icon" className="w-5" />
                    </div>
                </Link>

                <Link to = '/prospectivestudents' >
                    <div className="flex items-center gap-[6px] cursor-pointer " >
                        <span className="text-base font-medium leading-6" >Prospective Students</span>
                        <img src={arrowdown} alt="Down arrow icon" className="w-5" />
                    </div>
                </Link>

                <Link to = '/activities' >
                    <div className="flex items-center gap-[6px] cursor-pointer " >
                        <span className="text-base font-medium leading-6" >Activities</span>
                        <img src={arrowdown} alt="Down arrow icon" className="w-5" />
                    </div>
                </Link>

                <Link to = '/donate' >
                    <div className="flex items-center gap-[6px] cursor-pointer " >
                        <span className="text-base font-medium leading-6" >Donate</span>
                    </div>
                </Link>

                <Link to = '/contact' >
                    <div className="flex items-center gap-[6px] cursor-pointer " >
                        <span className="text-base font-medium leading-6" >Contact</span>
                    </div>
                </Link>

                <div className="flex items-center gap-[6px] cursor-pointer " >
                    <span className="text-base font-medium leading-6" >News and Events</span>
                    <img src={arrowdown} alt="Down arrow icon" className="w-5" />  
                </div>
            </nav>

            <button className="hidden md:block w-[115px] h-[40px] px-5 py-2 bg-[#6366F1] text-white rounded-[6px]  " >
                Join Us
            </button>            
            
            <img src={menuIcon} alt="Menu Icon" className="md:hidden w-[20px] h-[18px] " />            
        </div>
    )
}

export default Navbar