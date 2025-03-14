import './App.css'
import Sidebar from './sidebar'
import WeatherInfos from './weatherInfos'

function App() {
  return (
    <div className='bg-gray-300 w-screen h-screen flex flex-row'>
      <Sidebar/>
      <WeatherInfos/>
    </div>
  )
}

export default App
