import React from 'react'
import { motion } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown ,faUser,faLocationDot,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
const LookingforDriver = ({lookingDriver,setlookingDriver,openvehicleconfirm,setopenvehicleconfirm, locations, setIsClicked }) => {
  return (
    <div> <motion.div
    animate={lookingDriver ? {display: "block",scaleY:1, opacity: 1} : {display: "none",scaleY:0, opacity: 0}}
    transition={{ duration: .55 }}
    className=' p-2 w-full  bg-white  absolute bottom-0 left-0 overflow-hidden'>
      <FontAwesomeIcon 
          onClick={() => {
            setIsClicked(false)
            setlookingDriver(false)
            setopenvehicleconfirm(true)
          }
          }
          className='w-full px-2 scale-x-220 text-zinc-300 rounded-full' icon={faChevronDown} />

        <div className='px-2 flex flex-col gap-2 w-full'>
          <h1 className='text-2xl text-zinc-800 font-bold'>Looking For Driver</h1>  
          <img 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQOC_1ewM5hhl6-zsi7P-FZ5yfU1X4yQBGQ&s" 
           className='w-60 align-middle mt-0 mb-0 ml-auto mr-auto' alt="" />
          <div className='flex gap-5 items-center'>
            <FontAwesomeIcon 
            className='text-xl w-5'
            icon={faUser} />
            <div>
            <h1 className='font-medium text-lg '>{locations[0].title}</h1>
            <p className='font-light text-sm '>{locations[0].subtitle} </p>
          </div>
          </div>

          <div className='flex gap-5 items-center'>
            <FontAwesomeIcon 
            className='text-xl w-5'
            icon={faLocationDot} />
            <div>
            <h1 className='font-medium text-lg '>{locations[1].title}</h1>
            <p className='font-light text-sm '>{locations[1].subtitle} </p>
          </div>
          </div>

          <div className='flex gap-5 items-center mb-4'>
            <FontAwesomeIcon 
            className='text-xl w-5'
            icon={faMoneyBill} />
            <div>
            <h1 className='font-medium text-lg '>350.00</h1>
            <p className='font-light text-sm '>Cash Cash </p>
          </div>
          </div>
        
        </div>
    </motion.div></div>
  )
}

export default LookingforDriver