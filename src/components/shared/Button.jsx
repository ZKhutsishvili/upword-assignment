
const CustomButton = ({id, LeftIcon, RightIcon, text, color = "#FFFFFF", backgroundColor = "#262833", disabled, isActive, onClick, customClassname}) => {
    return <div 
    id={id}
    className={`flex rounded-full ${text && (LeftIcon ? "pr-3.5" : "px-3.5")} gap-1 items-center justify-center border border-solid ${!disabled && `cursor-pointer ${customClassname && customClassname}`} ${isActive ? "border-[#7651F4]" : `border-transparent`}`} 
    style={{ backgroundColor: disabled ? "#1A1B23" : backgroundColor }}
    onClick={() => disabled ? undefined : onClick()}
    >
      {LeftIcon && <LeftIcon className="m-2" color={disabled ? "#313341" : "white"}/>}
      {text &&
        <p className={`font-medium text-sm`} style={{ color: disabled ? "#313341" : color }}>
            {text}
        </p>
        }
      {RightIcon && <RightIcon className="ml-2" color={disabled ? "#313341" : "white"}/>}
    </div>
}

export default CustomButton;