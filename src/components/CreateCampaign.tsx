import { useState } from "react";
import { RiCloseFill, RiImageAddLine } from "@remixicon/react";
import { motion as m } from "framer-motion";

interface CreateCampaignOptions {
  createCampaignModalIsActive: boolean;
  setCreateCampaignModalIsActive: (isActive: boolean) => void;
}

const CreateCampaign = ({
  createCampaignModalIsActive,
  setCreateCampaignModalIsActive,
}: CreateCampaignOptions) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleCreateCampaign = () => {
    console.log(title, tags, goal, description, endDate, image)
  };

  return (
    <m.div
      className={`bg-[rgba(43,45,49,0.71)] w-screen h-screen absolute top-0 left-0 flex justify-center py-20 overflow-y-scroll`}
      initial={{ scale: 0 }}
      animate={{
        scale: createCampaignModalIsActive ? 1 : 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 30,
        },
      }}
    >

      <button 
        className="fixed top-5 right-5"
        onClick={()=>{
            setCreateCampaignModalIsActive(false)
        }}
        >
        <RiCloseFill/>
      </button>

      <div className="bg-[#1E1F22] min-w-[800px] h-fit p-10 rounded-lg">
        <h2 className="text-2xl font-bold">Create Campaign</h2>
        <div className="w-full h-[1px] bg-[#2B2D31] my-5"></div>
        <div className="flex">
          <div className="grow flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="campaignTitle" className="font-semibold">
                Title
              </label>
              <span className="text-neutral-600 text-sm">
                What would you love to call your campaign?
              </span>
              <input
                type="text"
                id="campaignTitle"
                className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="campaignTag" className="font-semibold">
                Tags
              </label>
              <span className="text-neutral-600 text-sm">
                Write tags to help people find your campaign. <br />
                Separate each tag with a comma.
              </span>
              <input
                type="text"
                id="campaignTag"
                className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="campaignGoal" className="font-semibold">
                Goal
              </label>
              <span className="text-neutral-600 text-sm">
                How much worth of ETH are you raising?
              </span>
              <input
                type="text"
                id="campaignGoal"
                className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="campaignDescription" className="font-semibold">
                Description
              </label>
              <span className="text-neutral-600 text-sm">
                Write a short description of your campaign.
              </span>
              <textarea
                id="campaignDescription"
                className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded resize-none h-24"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="campaignEndDate" className="font-semibold">
                End Date
              </label>
              <span className="text-neutral-600 text-sm">
                When will the campaign end?
              </span>
              <input
                type="date"
                id="campaignEndDate"
                className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[300px] shrink-0 border-l border-l-[#2B2D31] ml-5 pl-5 flex justify-center items-center relative">
            <div className="flex flex-col items-center">
              <RiImageAddLine className="w-10 h-10 mb-2" />
              <p className="text-lg font-semibold">
                Upload your campaign image
              </p>
              <p className="text-sm text-center mb-4">
                Click here to upload or Drag and Drop an image to upload
              </p>
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
          </div>
        </div>
        <button 
            className="bg-purple-600 mt-5 w-full py-3 font-semibold rounded duration-200 hover:bg-purple-700 active:scale-90"
            onClick={handleCreateCampaign}
        >
          Create Campaign
        </button>
      </div>
    </m.div>
  );
};

export default CreateCampaign;
