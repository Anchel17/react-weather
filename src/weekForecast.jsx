import DailyCard from "./components/dailyCard";

function WeekForecast(){
    return (
        <div className="flex justify-around">
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