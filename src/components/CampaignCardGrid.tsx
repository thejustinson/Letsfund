import CampaignCard from "./CampaignCard"

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

interface CampaignGridOptions {
  campaignData: CampaignItem[] // Change this to an array
}

const CampaignCardGrid = ({campaignData}: CampaignGridOptions) => {
  return (
    <div className="p-10 grid grid-cols-4 gap-4">
      {campaignData.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  )
}

export default CampaignCardGrid