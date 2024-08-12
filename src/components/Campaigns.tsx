import { RiAddFill, RiSearchLine } from "@remixicon/react"

interface CampaignsOptions{
    setCreateCampaignModalIsActive: (isActive: boolean) => void;
    fetchData: ()=> void
}


const Campaigns = ({setCreateCampaignModalIsActive, fetchData}: CampaignsOptions) => {
  return (
    <div className="w-full">
        <div className="py-5 flex flex-col items-center gap-y-3">
            <div className="bg-[#1E1F22] w-[500px] mx-auto py-3 px-3 rounded flex gap-3 items-center">
                <RiSearchLine/>
                <input type="text" className="bg-transparent outline-none border-none w-full" placeholder="Search for campaigns"/>
                <div></div>
            </div>

            <button className="bg-purple-600 w-[200px] py-2 rounded mx-auto"
                onClick={fetchData}
            >
                Connect Wallet
            </button>
        </div>

        <div className="w-full px-10 flex justify-between items-center bg-[#292B2F] py-10">
            <div className="">
                <h2 className="font-bold text-3xl">Campaigns</h2>
                <p className="text-neutral-500">Check for campaigns you might be interested in.</p>
            </div>
            <div>
                <button 
                    className="flex bg-purple-600 px-3 py-2 items-center font-semibold rounded border border-purple-500 active:scale-90 duration-200"
                    onClick={()=>{
                        setCreateCampaignModalIsActive(true)
                    }}
                >
                    <RiAddFill/>
                    Create a campaign
                </button>
            </div>
        </div>
    </div>
  )
}

export default Campaigns