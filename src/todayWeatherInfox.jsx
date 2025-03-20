import TodayCard from "./components/todayCard";

export function TodayWeatherInfos(){
    return (
        <div className="flex flex-wrap gap-10 justify-between">
            <TodayCard titulo={"Índice UV"} cardInfo={"gauge"}/>
            <TodayCard titulo={"Velocidade do vento"} cardInfo={"15 KM"}/>
            <TodayCard titulo={"Umidade Relativa"} cardInfo={"50%"}/>
            <TodayCard titulo={"Duração de luz do dia"} cardInfo={"13:57"}/>
            <TodayCard titulo={"Sensação Térmica"} cardInfo={"30°c"}/>
            <TodayCard titulo={"Duração da luz do sol"} cardInfo={"11:50"}/>
        </div>
    )
}

export default TodayWeatherInfos;