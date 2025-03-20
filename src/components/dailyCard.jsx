import { SunIcon } from "lucide-react";

function DailyCard(){
    return (
        <div className="bg-white w-[170px] flex flex-col items-center py-4 px-4 gap-4 rounded-xl shadow-md">
            <h2 className="font-semibold text-xl">Dom</h2>
            <SunIcon size={50} color="#FFDF4A"/>
            <div className="flex gap-1">
                <span className="font-semibold text-lg">17°</span>
                <span className="text-slate-400 text-lg">16°</span>
            </div>
        </div>
    )
}

export default DailyCard;