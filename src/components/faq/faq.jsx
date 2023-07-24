import { useState } from "react"
import downArrow from "../../images/cheveron-down.svg"
import upArrow from "../../images/cheveron-up.svg"

const Faq = (props) => {

    const [questionOpen, setQuestionOpen] = useState(false)

    return (
        <div className="py-5 border-b-2 border-b-[#E5E5E5] " >
            <div 
                className="flex gap-4 justify-between items-center cursor-pointer "
                onClick={()=>{
                    setQuestionOpen(!questionOpen)
                }}
                >
                <h6 className=" text-[#171717] text-xl font-medium " >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit?
                </h6>
                <img src={questionOpen ? upArrow : downArrow} alt={` ${questionOpen ? 'Up arrow' : 'Down arrow'}`} className="w-5" />
            </div>

            <div className={` ${questionOpen ? 'block mt-6 ':'hidden'} `}>
                <p className="text-[#737373] text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur blanditiis maiores minima earum sed ut 
                    laborum beatae placeat, at nostrum deserunt cum accusantium alias, ad porro, voluptates mollitia eveniet.
                </p>
            </div>

        </div>
    )
}

export default Faq