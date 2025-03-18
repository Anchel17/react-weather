import { CloudSunIcon } from "lucide-react";
import WeekForecast from "./weekForecast";

function WeatherInfos(){
    return (
        <div className="w-[75%] py-10 px-12">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-2">
                    <h1 className="font-bold text-3xl">React Weather</h1>
                    <CloudSunIcon size={32}/>
                </div>

                <div className="flex flex-row gap-3">
                    <button className="font-semibold text-xl text-white bg-black rounded-full py-2 px-3">C°</button>
                    <button className="font-semibold text-xl bg-white rounded-full py-2 px-3">F°</button>
                </div>
            </div>

            <div className="py-20">
                <WeekForecast/>
            </div>
        </div>
    )
}

export default WeatherInfos;