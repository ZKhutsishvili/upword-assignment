import ChatIcon from "../../assets/icons/Chat";
import EssayIcon from "../../assets/icons/Essay";
import InvestmentMemoIcon from "../../assets/icons/InvestmentMemo";
import MarketReportIcon from "../../assets/icons/MarketReport";
import OutlinedRightArrowIcon from "../../assets/icons/OutlinedRightArrow";
import PencilIcon from "../../assets/icons/Pencil";
import StudyGuideIcon from "../../assets/icons/StudyGuide";
import TemplateIcon from "../../assets/icons/Template";

//This navbar is dummy 
//Not needed as said in interview

const LeftNavbar = () => {
    const upperNavItems = [ChatIcon, EssayIcon, InvestmentMemoIcon, PencilIcon]
    const lowerNavItems = [TemplateIcon, MarketReportIcon, OutlinedRightArrowIcon, StudyGuideIcon]
    return <div className="flex flex-col h-full w-[50px] justify-between py-3">
      <div className="flex flex-col gap-4 items-center">
        {upperNavItems.map((NavItem, index) => (
            <NavItem key={index} width={20} height={20} className="cursor-pointer"/>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-center">
        {lowerNavItems.map((NavItem, index) => (
            <NavItem key={index} width={20} height={20} className="cursor-pointer"/>
        ))}
      </div>
    </div>
}

export default LeftNavbar;