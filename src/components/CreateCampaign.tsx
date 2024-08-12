import { useRef, useState } from "react";
import { RiCloseFill, RiImageAddLine } from "@remixicon/react";
import { motion as m, AnimatePresence } from "framer-motion";
import { start } from "@/pages/api/initWeaveDB";
import { useValidateCampaignForm } from "@/Hooks/useValidateCampaignForm";
import Image from "next/image";

// interface createCampaignMessage {
//   type: "success" | "error";
//   messages: {
//     [key: string]: string;
//   };
// }

interface CreateCampaignOptions {
  createCampaignModalIsActive: boolean;
  setCreateCampaignModalIsActive: (isActive: boolean) => void;
  setSuccessModalIsVisible: (SuccessModalIsVisible: boolean) => void;
  // setCreateCampaignMessage: React.Dispatch<React.SetStateAction<createCampaignMessage | null>>;
}

const CreateCampaign = ({
  createCampaignModalIsActive,
  setCreateCampaignModalIsActive,
}: // setCreateCampaignMessage
CreateCampaignOptions) => {
  const [title, setTitle] = useState("");
  // const [tags, setTags] = useState("");
  const [goal, setGoal] = useState(0);
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const imageRef = useRef<HTMLInputElement>(null);

  const { errors, validateForm } = useValidateCampaignForm();

  const clearImage = () => {
    if (imageRef.current) {
      imageRef.current.value = "";
    }
    setImage(null);
    setImagePreview("");
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImage(null);
      setImagePreview("");
      // setIpfsHash('');
    }
  };

  const handleCreateCampaign = async () => {
    const { isValid, errors: validationErrors } = validateForm(
      title,
      goal,
      description,
      endDate,
      image
    );

    if (isValid) {
      const endDateInMilliseconds = new Date(endDate).getTime();
      const endDateInSeconds = endDateInMilliseconds / 1000;
      const data = {
        title,
        goal,
        description,
        endDate: endDateInSeconds,
        image: "",
      };

      console.log(data.image);

      try {
        // Upload to IPFS
        // const added = await ipfs.add(file);
        // setIpfsHash(added.path);
        

        if(image !== null){
          const formData = new FormData()
          formData.append("file", image, image?.name)

          const request = await fetch("/api/files/route", {
            method: "post",
            body: formData,
          });
          console.log(request.json())
        }else{
          throw new Error("Put picture na")
        }
        

        

        
        
      } catch (error) {
        console.error("Error uploading to IPFS:", error);
      }

      // try {
      //   const db = (await start()).db;
      //   const res = await db.add(data, "pp_campaign");
      //   console.log(res);
      // } catch (error) {
      //   console.error("Error adding campaign:", error);
      //   // Handle error here (e.g., show an error message to the user)
      // }
    } else {
      console.log(errors);

      // const createCampaignFeedback: createCampaignMessage = {
      //   type: "error",
      //   messages: Object.fromEntries(
      //     Object.entries(errors).map(([key, value]) => [key, String(value)])
      //   )
      // };

      // setCreateCampaignMessage(createCampaignFeedback)
    }

    // const endDateInMilliseconds = new Date(endDate).getTime()
    // const endDateInSeconds = endDateInMilliseconds / 1000
    // const data = { title,  goal, description, endDate: endDateInSeconds, image };

    // try {
    //   const db = (await start()).db;
    //   const res = await db.add(data, 'pp_campaign');
    //   console.log(res);
    // } catch (error) {
    //   console.error("Error adding campaign:", error);
    //   // Handle error here (e.g., show an error message to the user)
    // }
  };

  return (
    <AnimatePresence>
      {createCampaignModalIsActive && (
        <m.div
          className="bg-[rgba(43,45,49,0.71)] w-screen h-screen absolute top-0 left-0 flex justify-center py-20 overflow-x-hidden overflow-y-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <m.div
            className="bg-[#1E1F22] relative min-w-[800px] h-fit p-10 rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-5 right-5"
              onClick={() => {
                setCreateCampaignModalIsActive(false);
                setTitle("");
                setGoal(0);
                setDescription("");
                setEndDate("");
                setImage(null);
              }}
            >
              <RiCloseFill />
            </button>
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
                  <span className="text-sm text-red-500">
                    {errors.title ? errors.title : null}
                  </span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="campaignGoal" className="font-semibold">
                    Goal
                  </label>
                  <span className="text-neutral-600 text-sm">
                    How much worth of ETH are you raising?
                  </span>
                  <input
                    type="number"
                    id="campaignGoal"
                    className="border-b border-b-[#2B2D31] bg-[#2B2D31] outline-none p-2 rounded"
                    value={goal}
                    onChange={(e) => setGoal(parseFloat(e.target.value))}
                  />
                  <span className="text-sm text-red-500">
                    {errors.goal ? errors.goal : null}
                  </span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="campaignDescription"
                    className="font-semibold"
                  >
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
                  <span className="text-sm text-red-500">
                    {errors.description ? errors.description : null}
                  </span>
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
                  <span className="text-sm text-red-500">
                    {errors.endDate ? errors.endDate : null}
                  </span>
                </div>
              </div>
              <div className="w-[300px] shrink-0 border-l border-l-[#2B2D31] ml-5 pl-5 flex justify-center items-center relative">
                <div className="flex items-center">
                  <div
                    className={`${
                      image !== null ? "hidden" : "flex flex-col items-center"
                    }`}
                  >
                    <RiImageAddLine className="w-10 h-10 mb-2" />
                    <p className="text-lg font-semibold">
                      Upload your campaign image
                    </p>
                    <p className="text-sm text-center mb-4">
                      Click here to upload or Drag and Drop an image to upload
                    </p>
                    <span className="text-sm text-red-500">
                      {errors.image ? errors.image : null}
                    </span>
                  </div>

                  <div
                    className={`${
                      image === null
                        ? "hidden"
                        : "relative w-full h-full z-[2] flex flex-col items-center"
                    }`}
                  >
                    <Image
                      src={imagePreview !== "" ? imagePreview : ""}
                      className="rounded-lg"
                      alt="title"
                      width={300}
                      height={300}
                    />
                    <span
                      className="text-red-500 text-sm font-semibold cursor-pointer"
                      onClick={() => {
                        setImage(null);
                        setImagePreview("");
                        clearImage();
                      }}
                    >
                      Remove Image
                    </span>
                  </div>

                  <input
                    type="file"
                    ref={imageRef}
                    accept="image/*"
                    className="absolute z-[1] top-0 left-0 w-full h-full opacity-0"
                    onChange={handleImageChange}
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
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default CreateCampaign;
