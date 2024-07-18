import { useState } from "react"
import axios from "axios"
function Frontend() {
    const [input, setinput] = useState('')
    const handleinput = (evt) => {
        setinput(evt.target.value)
    }


    var [weatherdata,setweatherdata]=useState('')
    var [weathertemp,setweathertemp]=useState('')
    var [weatherdisc,setweatherdisc]=useState('')
    function Backend() {
        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=752cb85e2b6b3e6174c5e98db8df452f`)
        weatherdata.then(function (success) {
           setweatherdata(success.data.weather[0].main)
            setweatherdisc(success.data.weather[0].description)
            setweathertemp(success.data.main.temp)
        }).catch(function(reject){
            alert('Please enter Valid city name')
        })

    }


    return (
        <>
            <div className="bg-black p-10">
                <div className="bg-green-500 p-10 rounded-md">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-medium text-2xl">Weather Report 🌤️</h1>
                        <p>I can give you a weather report about your city!</p>
                        <input className='p-1 rounded-md w-fit' value={input} onChange={handleinput} placeholder="Enter city name" type="text" />
                        <button className="bg-black text-white p-1 rounded-md w-fit" onClick={Backend}>Get Report</button>
                    </div>
                    <div>
                        <h1 className="font-medium ">Weather: <p className="inline text-white">{weatherdata}</p></h1>
                        <h1 className="font-medium ">Temperature: <p className="inline text-white">{weathertemp}</p></h1>
                        <h1 className="font-medium ">Description: <p className="inline text-white">{weatherdisc}</p></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontend