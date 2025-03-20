import { CloudSunIcon } from "lucide-react";
import WeekForecast from "./weekForecast";
import TodayCard from "./components/todayCard";
import TodayWeatherInfos from "./todayWeatherInfox";

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

            <div className="flex flex-col flex-wrap py-12 items-center">
                <WeekForecast/>
            </div>

            <div className="flex flex-col gap-6 flex-wrap">
                {/* wind_speed_10m,  temperature_2m, temperature_2m_min, temperature_2m_max, relative_humidity_2m, 
                 uv_index_max, daylight_duration, apparent_temperature, weather_code (wmo code), sunshine_duration
                */}
                <h2 className="font-bold text-2xl">Tempo Hoje</h2>
                <TodayWeatherInfos/>
            </div>
        </div>
    )
}

export default WeatherInfos;