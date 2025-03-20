import DailyCard from "./components/dailyCard";

function WeekForecast(){
    return (
        <div className="flex flex-row flex-wrap gap-5">
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
        </div>
    )
}

export default WeekForecast;