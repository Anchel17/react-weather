import { CircleXIcon, CloudRainIcon, CloudyIcon, SearchIcon } from "lucide-react";

function getTemperatura(){
    return '15°c';
}

function getDia(){
    return 'Segunda-feira';
}

function getHora(){
    return '15:00';
}

function getClimaDoDia(){
    return 'Nublado';
}

function getChanceDeChuva(){
    return '50%';
}

function getBackgroundImage(){
    return {backgroundImage: "url('src/assets/teste.jpg')"};
}

function getCidadePais(){
    return 'Natal, Brasil'
}

function Sidebar(){
    return (
        <div className="bg-white h-screen w-[25%] flex flex-col items-center">
            <div className= "flex flex-row gap-3 pt-12 w-[100%] justify-center">
                <div className="bg-gray-100 flex flex-row rounded-md px-2 py-1 gap-3 w-[70%]">
                    <SearchIcon/>
                    <input type="text" placeholder="Digite uma cidade..." className="bg-gray-100 outline-none"/>
                </div>

                <CircleXIcon className="bg-gray-100 rounded-full my-1"/>
            </div>

            <div className="w-[100%] py-10 flex flex-col items-center">
                <CloudRainIcon size={250}/>
                <span className="text-9xl py-5">{getTemperatura()}</span>
                <div className="flex gap-1">
                    <span className="text-2xl font-bold">{getDia()},</span>
                    <span className="text-2xl text-gray-500">{getHora()}</span>
                </div>
            </div>

            <hr className="w-[75%] border border-gray-200"/>

            <div className="w-[75%] flex flex-row py-5 gap-2">
                <CloudyIcon size={32}/>
                <span className="font-bold text-2xl">{getClimaDoDia()}</span>
            </div>

            <div className="w-[75%] flex flex-row gap-2">
                <CloudRainIcon color="blue" size={32}/>
                <span className="font-bold text-2xl">{getChanceDeChuva()}</span>
            </div>

            <div style={getBackgroundImage()} 
            className="w-[75%] h-[15%] mt-10 flex justify-center items-center rounded-xl">
                <span className="text-white font-bold">{getCidadePais()}</span>
            </div>
        </div>
    );
}

export default Sidebar;