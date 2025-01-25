import { dummyRecentProjects } from "../../assets/data/dummyData";

const RecentProjects = () => {
    return <div className="flex flex-col w-full items-center gap-5">
        <div className="w-full flex items-center gap-5">
            <p className="w-fit text-[#85889E] text-[10px] text-nowrap">
                Recent Projects
            </p>
                <div className="w-full bg-[#4F526A] rounded-full h-[1px]">
            </div>
        </div>
        <div className="w-full grid grid-cols-4 items-center gap-4 pb-10">
            {dummyRecentProjects.map(project => (
                <div key={project.project.id} className="flex flex-col rounded-2xl bg-[#313341] p-2 h-[104px] gap-2 hover:bg-[#4F526A] transition-all duration-500 cursor-pointer">
                    <div className="flex gap-0.5 items-center">
                        <project.template.Icon width={12} height={12}/>
                        <p className="font-medium text-[10px] text-[#85889E]">
                            {project.template.label}
                        </p>
                    </div>
                    <p className="font-medium text-sm text-white">
                        {project.project.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
};

export default RecentProjects