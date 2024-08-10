import { RiCrosshair2Line, RiHandCoinLine, RiTimerLine } from "@remixicon/react";
import Image from "next/image";

const CampaignCard = () => {
  return (
    <div className="p-3 bg-[#1E1F22] border border-[#292B2F] rounded-lg">
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          className="w-full rounded"
          alt={"Friend's Summit"}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Friend's Summit</h3>
        <div className="text-sm text-neutral-400">
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <RiCrosshair2Line className="w-4" /> 0.3ETH
            </span>
            <span className="flex items-center gap-2">
              <RiHandCoinLine className="w-4" /> 0.02ETH
            </span>
          </div>
          <div>
            <span className="flex items-center gap-2">
              <RiTimerLine className="w-4" /> {"> 2 Weeks"}
            </span>
          </div>
        </div>
        <p className="text-sm line-clamp-3 text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          necessitatibus explicabo molestias doloribus dolorem optio voluptatem
          sunt tenetur, exercitationem sit consequatur vero nobis ducimus, atque
          fuga obcaecati quaerat hic quas.
        </p>

        <div className="flex">
          <button className="">See More</button>
          <button className="bg-purple-600">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
