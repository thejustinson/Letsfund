import CampaignCardGrid from "@/components/CampaignCardGrid";
import Campaigns from "@/components/Campaigns";
import CreateCampaign from "@/components/CreateCampaign";
import SideBar from "@/components/SideBar";
import { useEffect, useState } from "react";
import { start } from "./api/initWeaveDB";
import Toast from "@/components/Toasts";
import SuccessModal from "@/components/SuccessModal";

type MessageType = "success" | "error";

// interface ErrorMessage {
//   [key: string]: string;
// }

// interface CampaignMessage {
//   type: MessageType;
//   messages: ErrorMessage;
// }

interface CampaignItem {
  id: string;
  setter: string;
  data: {
    title: string;
    goal: number;
    description: string;
    endDate: string;
    image: string;
  };
}

const campaigns = () => {
  // const db = new WeaveDB({ contractTxId: process.env.NEXT_PUBLIC_CONTRACT_TXID })
  // await db.init()

  const [createCampaignModalIsActive, setCreateCampaignModalIsActive] =
    useState(false);
  const [SuccessModalIsVisible, setSuccessModalIsVisible] = useState(false);

  const [campaignData, setCampaignData] = useState<CampaignItem[]>([]);

  // const [createCampaignMessage, setCreateCampaignMessage] = useState<CampaignMessage | null>(null);

  const fetchData = async () => {
    try {
      const result = (await start()).db;
      const d = await result.cget("pp_campaign")
      setCampaignData(d);
      console.log(d)
    } catch (error) {
      console.error("Error fetching campaign data:", error);
      // Handle the error appropriately
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = (await start()).db;
  //       const d = await result.cget("pp_campaign")
  //       setCampaignData(d);
  //       console.log(d)
  //     } catch (error) {
  //       console.error("Error fetching campaign data:", error);
  //       // Handle the error appropriately
  //     }
  //   };

  //   // fetchData();
  // }, []);

  return (
    <main className="flex relative w-full">
      <SideBar />
      <div className="flex flex-col w-full max-h-screen overflow-x-hidden overflow-y-scroll">
        <Campaigns
          setCreateCampaignModalIsActive={setCreateCampaignModalIsActive}
          fetchData={fetchData}
        />
        <CampaignCardGrid campaignData={campaignData}/>
      </div>
      <CreateCampaign
        createCampaignModalIsActive={createCampaignModalIsActive}
        setCreateCampaignModalIsActive={setCreateCampaignModalIsActive}
        setSuccessModalIsVisible={setSuccessModalIsVisible}
        // setCreateCampaignMessage={setCreateCampaignMessage}
      />
      <SuccessModal
        SuccessModalIsVisible={SuccessModalIsVisible}
        setSuccessModalIsVisible={setSuccessModalIsVisible}
      />
      {/* <Toast createCampaignMessage={createCampaignMessage}/> */}
    </main>
  );
};

export default campaigns;
