import { useEffect, useState } from "react";
import { dummyTemplates } from "../../assets/data/dummyData";
import ChatIcon from "../../assets/icons/Chat";
import OutlinedRightArrowIcon from "../../assets/icons/OutlinedRightArrow";
import RightArrowIcon from "../../assets/icons/RightArrow";
import TemplateIcon from "../../assets/icons/Template";
import CustomButton from "../shared/Button";
import TemplateButton from "../shared/TemplateButton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const CreateResearchInput = () => {
    const [isTemplateActive, setIsTemplateActive] = useState(false)
    const [activeTemplate, setActiveTemplate] = useState()
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (!isTemplateActive) {
            setActiveTemplate()
        }
    }, [isTemplateActive])

    return <>
        <div className="flex flex-col bg-[#141415] justify-between p-5 rounded-[30px] gap-16">
        <textarea 
        rows={1}
        className="w-full resize-none placeholder-gray-500 font-normal text-xl outline-none text-white bg-transparent overflow-hidden"
        placeholder="Enter your research topic..."
        onInput={(e) => {
            e.target.style.height = "auto"; // Reset height
            e.target.style.height = `${e.target.scrollHeight}px`; // Set height dynamically
            setValue(e.target.value)
        }}
        />
        <div className="flex justify-between">
            <div className="flex gap-2.5">
                <CustomButton LeftIcon={OutlinedRightArrowIcon} />
                <CustomButton LeftIcon={TemplateIcon} text="Template" isActive={isTemplateActive} onClick={() => setIsTemplateActive(!isTemplateActive)}/>
                <CustomButton LeftIcon={ChatIcon} text="Chat"/>
            </div>
            <CustomButton 
            id="create-button"
            RightIcon={RightArrowIcon} 
            text="Create" 
            disabled={value.length === 0} 
            customClassname="[background:linear-gradient(269.51deg,#7651F4_3.4%,#8731FF_94.69%)]"
            onClick={() => navigate("/research")}
            />
            {value.length === 0 &&  
            <Tooltip
                anchorSelect={`#create-button`}
                content={"Make sure you: selected a template and added your research subject in the text box"}
                style={{ backgroundColor: "#AD1538", color: "#FFFFFF", maxWidth: "200px", zIndex: 50 }}
                place="right"
            />
            }
        </div>
    </div>
    {isTemplateActive &&
        <div className="flex gap-2.5 flex-wrap justify-center">
            {dummyTemplates.map(template => (
                <TemplateButton 
                key={template.id} 
                {...template} 
                onClick={() => setActiveTemplate(template)} 
                isActive={template.id === activeTemplate?.id} 
                inactive={activeTemplate?.id && activeTemplate.id !== template.id}/>
            ))}
        </div>
    }
  </>
}

export default CreateResearchInput;