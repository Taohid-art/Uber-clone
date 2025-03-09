import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const DriverSingup = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userdata, setUserdata] = useState({})
  const [vehicleData, setVehicleData] = useState({
    color: "",
    plateNo: "",
    capacity: "",
    type: "",
  });
  
    useEffect(() => {
    console.log(userdata);
  }, [userdata]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const submitHandaler =(e)=>{
  e.preventDefault()
  setUserdata({
    fullname: {
      firstname: firstname,
      lastname: lastname,
    },
    password: password,
    email: email,
    vehicle: {
      color: vehicleData.color,
      plateNo: vehicleData.plateNo,
      capacity: vehicleData.capacity,
      type: vehicleData.type,
    },
  });
  
 
  setVehicleData({
    color: '',
    plateNo: '',
    capacity: '',
    type: ''
  });
  setEmail('')
  setPassword('')
  setFirstname('')
  setLastname('')
}

return (
  <div className="h-screen w-screen bg-white">
    <img
      className="w-16 pl-6 pt-6"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD09PRhYWGtra0jIyNVVVXe3t6lpaUnJycHBwfm5ua0tLQrKyvj4+NeXl5OTk4eHh7CwsJJSUlsbGyampoVFRVxcXHu7u53d3ePj499fX26uro4ODjJycnPz8+Hh4dCQkJYjJYlAAAHyUlEQVR4nO2d6aKqKhSAk3JIM8vUyCH1/V/y5E5wAJZmeHHfzffzuD3ypQKLYbnbaTQajUaj0Wg0Go1Go9FoeiCEvWeYn/LwWdoYI6S6QEtBXnmqLq7R4e/T3PZ+oZAdpjeDR12F9q/ywc/4wjV5U6ThWXUR54LyzAdUGpLIsVUXcxZ5NKXS4Aaxp7qkk9iTd4XeHeugurATOMVMlQYzwqrLC4CCD1R+HrZcdZGFlNcPXV5kqgst4JB87mIY1hYfNRS70yXncStVF50BxYvuS8NlazYoXqqyQRtn4TPW2myqO5Cb37hsqxYo57b6QiLVCh1f3peGVLUD4f69i2FspBI4yXAxkk1EbPiTviXAQ7VIQybHxTg+VZu8arJakoxhKX/QkKwb87o1yoO1UNIb06A6VkOpPBfjqDhUK/mDYwup1L41jkwXo1BaoXmRVBnDUSlTLo7I+EQqx9LApyy5coEiH1dhDw1DXcxjGnIBh6MUNjU2NLZ0EbQaDnRSpq6pKaEfeZFMoW56AHxlFsmoC2vQQ77M6b9V6EBgv2yZTKyqE4ChUi2UuauS8VaQqVXJPEGZepGMqaxuPkOIeiawjLGh4cAZ/CWZ7U/b9vlLMqoeM+SBCM7aqExoBQCPRVVzokwG/IlvglsDyxSqGk0wAljYAwj+T30zZaNNGJxkWiajLG5G4EDTMhl1I2fyI01X3bwzWJ1dBE8/KLNX1zU7H4FyFbnNJYMGzpQFmq8aABwEKLhtqQW+MqEyl93uABVsAUqXany/mmFIqnJOA8ubBGxQvDBQzhoAgtJJgFd9tpcpEyt1kTt1ZqleqWVb0lxc1TfmdWukTZ5d1G8QwLJuTaL+xrwqtAWrmXkoC8sGgH2a+WxjwRmGupuz2cJD1gCPBcyjUC1BkbCAZhMvzJuvF2ps44V5g77r1Wxs54n3TWtzdTb0kDXYn+4D6jgqjJUF2EvfG/+wOZdXNLAsUPNPG3R5NZ5Ltp3cNrAAmAsKP94UkG14ogx/WA1s8XXpAc/ZDNlv+La8QenMaK3e6tsywKuKyU1bprWtRh/gnFrQ6KBbR79GpQHl2Z6/gCu5RfGWupXz8PI429f9wC0pLo/0UG67BhOCzmV4iOO0qqo0jp38Wf6ulTE80A+qS6HRaDQajUaj0Wg0Gs0f53lo4R9GofM+zNlzWJ6cA4PjHMISHHfF4eEEk4/HPVDIXqi91OBPi6v5Q8K/su2/j18t5lB2O7bn9rlej8UtAFJLPqPC9EHM8SD0OSjYC5nXJDFfl7ofur+mo1oCGXL4whQKHH+9Fnv+4lE8Y4ZtnFsPPsWsM/LL0WHhT2UmV5q53F3XM9Z0MQkbJqd9ru2l1pPh7yGfIcM80TPWswTntWV42xSmZRLmrDmLc372Hn0v4yZDelew2PVw0zLsMhoq447on5ZLkXnEQzKr82EnlKhMcc8eA7I3D7YRIDJ+lQ7Jgu51arLXfS/D1Fp2TNfTsWsvqMwHSRmIDLtXwjt1uZTLVWR66+kyqTI3zildghVnJZknuTUBc3nZMju6Bum+kgwms4Ds1nPpMjkphyVDhjNrjIgMu71JugzNSlCsLcMmXpAuQ/ckHleSscnl2eRL0mXQ2jJ0GTo7ryxdhpbQlyHDFvhct4c4C0qky9C1VFIqgBDj3l5z7Nk5yeCWcNYuUJm7jZmN6gI/UIami6tkyAT3IeS2GG4F9ZqL6B6NSfkhqrgHsENd/u7nmr1mn1s0sKMpePSozBn1wBjbYUV7ToW3oowbcSNnSMYULKkhMuZ90DO9P/a9JTpNxbmeTBHxEi9BMnfBQMiceOZmrynzwuQs8oVkRCkBZ8gcfzpVq0aaUKPJIsxDPy3jvzuIUmQesdMFZ07cKy9TvoFMcbl1XIS5ACZlgjailSDDbn3pMgUw+b47mWJ2IgNY5vqgNQ2RMQUypOoDwmbeebQpG7/TVCaZv4Suk0nqi0Vw2ZLRNkcgk7CnjGS49SndIDT++bsewPy1s1Sm6H+0hoaz3YtJa2p+e0ULxQxmQcHZrhspHT9n3/TNhr8bfWh8amjBZaKb5O8fypA7WkuUGSaloV+JcOlwbiX6Cd8nkCXkLlPJTsiQn+0oUWbUN7NrIkmiEBpCc58z+pSxr+uEjKhikRkC0CKQgLZL7MerlehDeGUOwTL9YHY1GboD6UqqGVqJsmO8vW1+7Bd8YBl65rjikBqc0f7/vm01u/wEySjrA+rlyWUHjUGZ7uGt1pTpJnvaVxr1Mnv7DiY+6Nzffblnr9C1M2gI9vqZf8dxAJWJyjM/l4ttn0f9U3GkmZOWpWjf6XAwmG5Vh5NzcrK6/4+8rGNUJoHyMQfj0+YkEChGtQ0QNtOWs32qUDq1qSLhBSazes1sNuk5MuOqCJDp8qu01TOu4C0vPjfOmCOTsAHNDBkmpT40oEG37e3bS2Hww3EWP1PvCsEZueD4LEimS7FEKmNUVoL/2PBjwST4tEzA27U4LcPm0pg3bubTq6GSu72qdoRf8rQ5f97nwf9oJpr89A77JRraz+MOz9I3vur9o50/hvuRiuoJfWT1mQV7LsH+Eee2qBnBMf8sejbbdsfvCwXs1NVPOaz28LDeQNhuvn7bcMqf56ltIghg6Xn8U+H/ddZFNRqNRqPRaDQajUaj0Wg2yT99d49ABkFgVwAAAABJRU5ErkJggg=="
      alt=""
    />
    <form 
     onSubmit={(e)=>{
      submitHandaler(e)
     }}
    action="" className="mt-3 mr-5 ml-5 flex flex-col ">
    
    <div className="flex gap-3 w-full">
      <div>
    <label htmlFor="" className="text-xl font-semibold"> First Name</label>
     <input 
     required
     value={firstname}
     onChange={(e)=>{
      setFirstname(e.target.value)
     }}
     type="text"
      placeholder="First Name" 
     className=" mt-2 mb-2  w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
     /></div>
    <div>
    <label htmlFor="" className="text-xl font-semibold"> Last Name</label>
     <input 
     required
     value={lastname}
     onChange={(e)=>{
      setLastname(e.target.value)
     }}
     type="text"
      placeholder="Last Name" 
     className=" mt-2 mb-2 w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
     /> </div>
     </div>
     <label htmlFor="" className="text-xl font-semibold">What's your Email</label>
     <input 
     required
     value={email}
     onChange={(e)=>{
      setEmail(e.target.value)
     }}
     type="text"
      placeholder="Type your email" 
     className=" mt-2  bg-gray-100 text-lg p-2.5 rounded outline-none"
     />
      <label htmlFor="" className="text-xl mt-2 font-semibold">Password</label>
     <input
     required
      value={password}
      onChange={(e)=>{
       setPassword(e.target.value)
      }}
      type="password" 
      placeholder="Type your Password" 
      className=" mt-2  bg-gray-100 text-lg p-2.5 rounded outline-none"
     />
<div className="flex mt-3 gap-3 w-full">
  <div>
    <label className="text-xl font-semibold">Vehicle Color</label>
    <input 
      required
      name="color"
      value={vehicleData.color}
      onChange={handleChange}
      type="text"
      placeholder="Color"
      className="mt-2 mb-2 w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
    />
  </div>
  <div>
    <label className="text-xl font-semibold">Plate No.</label>
    <input 
      required
      name="plateNo"
      value={vehicleData.plateNo}
      onChange={handleChange}
      type="text"
      placeholder="Plate No."
      className="mt-2 mb-2 w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
    />
  </div>
</div>

<div className="flex gap-3 w-full">
  <div>
    <label className="text-xl font-semibold">Capacity</label>
    <input 
      required
      name="capacity"
      value={vehicleData.capacity}
      onChange={handleChange}
      type="number"
      max={12}
      placeholder="Capacity"
      className="mt-2 mb-2 w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
    />
  </div>
  <div>
    <label className="text-xl font-semibold">Type</label>
    <input 
      required
      name="type"
      value={vehicleData.type}
      onChange={handleChange}
      type="text"
      placeholder="Car/Auto/Cycle"
      className="mt-2 mb-2 w-full bg-gray-100 text-lg p-2.5 rounded outline-none"
    />
  </div>
</div>

     
     <input type="submit"
     className="mt-3  p-2 bg-zinc-900 text-white text-center text-xl  rounded " value="Creat Account"/>
  <div className="flex items-center justify-center mt-2"  >
      <span>Already have a account</span><Link to='/' className="ml-1 text-blue-600"> Login</Link>
  </div>
  <Link to='/user-singup' className="mr-64 cursor-pointer p-2 bg-green-500 text-white text-center text-xl  rounded absolute bottom-5  w-[90%]">Singup as User</Link>
    </form>
  
  </div>
);
}

export default DriverSingup