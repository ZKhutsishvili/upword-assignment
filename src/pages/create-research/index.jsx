import CreateResearchInput from "../../components/create-research/CreateResearchInput";
import RecentProjects from "../../components/create-research/RecentProjects";
import LeftNavbar from "../../components/shared/LeftNavbar";

const CreateResearchPage = () => {
 
  return (
    <div className="w-screen h-full p-5 pl-0 flex">
      <LeftNavbar />
      <div className="w-full h-full flex flex-col pt-44 items-center justify-between bg-[#262833] rounded-[14px]">
        <div className="flex flex-col gap-10 max-w-[800px] w-4/5">
          <p className="font-medium text-[34px] text-white w-full font-[New_Spirit] text-center">
            Let's start a new research
          </p>
          <CreateResearchInput />
        </div>
        <div className="max-w-[800px] w-4/5">
          <RecentProjects />
        </div>
      </div>
    </div>
  );
};

export default CreateResearchPage;
