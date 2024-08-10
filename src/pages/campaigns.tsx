import CampaignCardGrid from "@/components/CampaignCardGrid";
import Campaigns from "@/components/Campaigns";
import CreateCampaign from "@/components/CreateCampaign";
import SideBar from "@/components/SideBar";
import { useEffect, useState } from "react";
// import { start } from "./api/initWeaveDB";

const campaigns = () => {
  // const db = new WeaveDB({ contractTxId: process.env.NEXT_PUBLIC_CONTRACT_TXID })
  // await db.init()

  const [createCampaignModalIsActive, setCreateCampaignModalIsActive] =
    useState(false);

  // useEffect(()=>{
  //   start()
  // })

  return (
    <main className="flex relative w-full">
      <SideBar />
      <div className="flex flex-col w-full max-h-screen overflow-scroll">
        <Campaigns
          setCreateCampaignModalIsActive={setCreateCampaignModalIsActive}
        />
        <CampaignCardGrid />
      </div>
      <CreateCampaign
        createCampaignModalIsActive={createCampaignModalIsActive}
        setCreateCampaignModalIsActive={setCreateCampaignModalIsActive}
      />
    </main>
  );
};

export default campaigns;
