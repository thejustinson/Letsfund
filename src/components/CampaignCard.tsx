import { RiCrosshair2Line, RiHandCoinLine, RiTimerLine } from "@remixicon/react";
import Image from "next/image";

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

interface CampaignCardProps {
  campaign: CampaignItem
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const { data } = campaign;
  const daysLeft = Math.max(0, Math.ceil((new Date(data.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)));

  return (
    <div className="p-4 bg-darkestMain border border-[#292B2F] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={data.image || "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          className="object-cover"
          alt={data.title}
          layout="fill"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
        <div className="text-sm text-neutral-300 bg-[#292B2F] p-3 rounded-lg my-3 shadow-inner">
          <div className="flex justify-between mb-2">
            <span className="flex items-center gap-2">
              <RiCrosshair2Line className="w-4 h-4" /> {data.goal} ETH
            </span>
            <span className="flex items-center gap-2">
              <RiHandCoinLine className="w-4 h-4" /> 0.02 ETH
            </span>
          </div>
          <div>
            <span className="flex items-center gap-2">
              <RiTimerLine className="w-4 h-4" /> {daysLeft > 14 ? '> 2 Weeks' : `${daysLeft} days left`}
            </span>
          </div>
        </div>
        <p className="text-sm line-clamp-3 text-neutral-400 my-3">
          {data.description}
        </p>

        <div className="flex gap-x-3 mt-4">
          <button className="bg-neutral-200 text-neutral-800 py-2  w-1/2 rounded font-medium hover:bg-neutral-300 active:scale-95 transition-all duration-200">See More</button>
          <button className="bg-purple-600 text-white py-2  w-1/2 rounded font-medium hover:bg-purple-700 active:scale-95 transition-all duration-200">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;