import { Gauge } from "@mui/x-charts";

function getCardDescription(cardInfo){
    if(cardInfo === 'gauge'){
        return <Gauge width={200} height={150} value={5} valueMax={18} startAngle={-90} endAngle={90} />;
    }

    return <span className="py-16 text-3xl">{cardInfo}</span>
}

function TodayCard({titulo, cardInfo}){
    return (
        <div className="flex flex-col py-3 px-3 bg-white w-[30%] h-56 items-center rounded-xl shadow-md">
            <h2 className="font-bold text-xl">{titulo}</h2>
            {getCardDescription(cardInfo)}
        </div>
    )
}

export default TodayCard;