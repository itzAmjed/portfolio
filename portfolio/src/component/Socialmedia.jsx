import React from 'react'
import { FaFacebook , FaInstagram , FaTiktok} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {useAppContext} from '../context.jsx/context.jsx'
const Socialmedia = () => {
 const {setShowSocialMedia} = useAppContext();

    return (
        
        <section id="contact" className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10 px-6 rounded-lg  bg-card flex  gap-6">
            <button className='absolute top-2 right-2 cursor-pointer text-2xl' 
            onClick={() => setShowSocialMedia(false)}
            >
                 <IoClose />
                  </button>
            <label className='flex gap-4 items-center'>
                <a className='flex gap-2 items-center'
                href='https://www.facebook.com/alphanex1'
                target='_blank'>
                    <span><FaFacebook /></span>
                    <p>Facebook </p>
                </a>
            </label>
        <label className='flex gap-4 items-center'>
            <a className='flex gap-2 items-center'
            href='https://www.instagram.com/nex.universe/'
            target='_blank'>
                <span><FaInstagram /></span>
                <p>Instagram </p>
            </a>
        </label>
        <label className='flex gap-4 items-center'>
            <a className='flex gap-2 items-center'
            href='https://www.tiktok.com/@nex.universe'
            target='_blank'>
                <span><FaTiktok /></span>
                <p>Tiktok </p>
            </a>
        </label>
    </section>
  )
}

export default Socialmedia