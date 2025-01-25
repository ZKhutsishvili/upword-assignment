import { Tooltip } from "react-tooltip";

const TemplateButton = ({ id, Icon, label, inactive, isActive, onClick, tooltipText }) => {
    return (
      <div
        className={`flex rounded-xl px-1.5 pr-3.5 py-1 gap-0.5 items-center bg-[#313341] hover:bg-[#4F526A] justify-center cursor-pointer border border-solid transition-all duration-500 ${
          isActive ? "border-[#7651F4]" : "border-transparent"
        } ${
          inactive && "opacity-50"
        }`}
        onClick={onClick}
        id={`template-${id}`}
      >
        {Icon && <Icon className="m-2.5" />}
        <p
          className={`font-medium text-sm text-white`}
        >
          {label}
        </p>
        <Tooltip
            anchorSelect={`#template-${id}`}
            content={tooltipText}
            style={{ backgroundColor: "#8C6AFF", color: "#FFFFFF", maxWidth: "200px", zIndex: 50 }}
        />
      </div>
    );
  };
  
  export default TemplateButton;
  