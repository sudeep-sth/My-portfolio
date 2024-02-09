import React, { useState } from 'react'


import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { useTypewriter, Cursor } from 'react-simple-typewriter'

import image from '../Assets/Black Circle with Utensils Restaurant Logo (4).png'
import image2 from '../Assets/Instagram Post circular.png'

import { FaCropAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { ServiceCart } from './ServiceCart';




import Skillbar from './Skillbar';
import CircularSkillBar from './Circularskillbar';


import { SiMinutemailer } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { ProjectCart } from './ProjectCart';


export const Navbar = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Desiner', 'Photographer'],
    loop: true,
  });


  return (


    <div className='w-full bg[#7c5c5d] bg-[#037A90] text-white'>

      {/* Navbar start */}

      <header className='flex justify-between px-10 py-6  bg-[#30c5e7] shadow-[0px_-10px_0px_#0ef))]   w-full fixed' style={{ zIndex: 1000 }} >
        <div className='left-right-slide'>
          <h1 className=''>Portfolio</h1>
        </div>
        <div className='right-left-slide ' >
          <ul className='flex gap-4 ' >
            <li className='cursor-pointer hover:scale-110 transition-all hover:text-[#0ef]'> <a href='#home'>Home</a></li>
            <li className='cursor-pointer hover:scale-110 transition-all'><a href='#about'>About</a></li>
            <li className='cursor-pointer hover:scale-110 transition-all' ><a href='#service'>Services</a></li>
            <li className='cursor-pointer hover:scale-110 transition-all' > <a href='#skill'>Skills</a></li>
            <li className='cursor-pointer hover:scale-110 transition-all'><a href='#portfolio'>Portfolio</a></li>
            <li className='cursor-pointer hover:scale-110 transition-all'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Navbar end */}



      <body  >

        {/* home part start */}
        <div className='flex items-center justify-around relative pt-24' id='home'>
          <div className=' h-[570px] w-[570px]  flex flex-col justify-center gap-5'>
            <h1 className='text-[40px]  buttom-top-slide'>Hi Iam <span className='text-orange-300'>Sudip shrestha</span></h1>
            <div className='h-10  flex items-center left-right-slide'>
              <span className='text-[30px] '>Iam {text}<Cursor /></span>
            </div>
            <p className='buttom-top-slide'>
              Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.

            </p>

            <div className='flex gap-2'>
              <FaFacebookSquare className='icon-css' />
              <FaInstagramSquare className='icon-css' />
              <FaWhatsappSquare className='icon-css' />
              <FaLinkedin className='icon-css' />
              <FaSquareGithub className='icon-css' />

            </div>

            <div className='cursor-pointer my-2'>
              <a className='rounded font-bold hover:scale-90 transition-all bg-[#0ef] p-4 '>More About Me</a>
            </div>
          </div>

          <div className='right-left-slide'>
            <img src={image} alt='' className='hover:scale-105 cursor-pointer  transition-all' />
          </div>
        </div>

        {/* Home part end */}


        {/* About part start */}
        <div className=' flex justify-around items-center mt-20 ' id='about'>
          <div>
            <img src={image2} className='w-72 ' />
          </div>
          <div className=' h-[570px] w-[570px]  flex flex-col justify-center '>
            <h1 className='text-[40px]'>About <span className='text-orange-500'>Me</span></h1>
            <p className='right-left-slide'>
              Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.

            </p>
          </div>
        </div>

        {/* About Part end */}


        {/* my service start */}
        <div className='flex flex-col gap-3 items-center mt-20' id='service'>

          <h1 className='text-[40px] font-semibold p-2 mb-5 '>My Services</h1>
          <div className='flex gap-10 justify-center icon-edit'>


            <ServiceCart
              icon={<FaCode className='icon-edit-inside p-2 m-2' />}
              title={<h1>UI/UX Design</h1>}
              disctiption={<p>UX design is the design of the elements that determine the interaction a user has with a product or service.
                UX design molds the products and services we use daily to make them easy to use, efficient, and enjoyable for the end-users. Its impact is such that it can make or break a business or brand!</p>}
              button={<button>Learn more</button>}
            />



            <ServiceCart
              icon={<FaCropAlt className='icon-edit-inside p-2 m-2' />}
              title={<h1>Web Development</h1>}
              disctiption={<p className='flex justify-evenly'>UX design is the design of the elements that determine the interaction a user has with a product or service.

                UX design molds the products and services we use daily to make them easy to use, efficient, and enjoyable for the end-users. Its impact is such that it can make or break a business or brand!</p>}
              button={<button>Learn more</button>}
            />





            <ServiceCart
              icon={<FaCamera className='icon-edit-inside p-2 m-2' />}
              title={<h1>Photography</h1>}
              disctiption={<p>UX design is the design of the elements that determine the interaction a user has with a product or service.
                UX design molds the products and services we use daily to make them easy to use, efficient, and enjoyable for the end-users. Its impact is such that it can make or break a business or brand!</p>}
              button={<button>Learn more</button>}
            />
          </div>
        </div>

        {/* my service end */}



        {/* my skill start */}

        <div className='flex flex-col  mt-24 p-5' id='skill'>

          <h1 className='text-[40px] font-semibold text-center '>My Skills</h1>
          <div className='flex justify-around'>
            <div>
              <h2 className='text-[25px] font-semibold'>Technical skills</h2>

              <div className='w-[500px]'>
                <Skillbar skill="HTML" percentage={90} />
                <Skillbar skill="CSS" percentage={55} />
                <Skillbar skill="JavaScript" percentage={70} />
                <Skillbar skill="React" percentage={60} />
                <Skillbar skill="Tailwind" percentage={80} />
                <Skillbar skill="Node" percentage={30} />
                <Skillbar skill="SQL" percentage={40} />
                <Skillbar skill="Mongodb" percentage={40} />
                <Skillbar skill="Canva" percentage={70} />
                <Skillbar skill="Photoshop" percentage={70} />
                {/* Add more SkillBar components as needed */}
              </div>

            </div>
            <div>
              <div className=' relative w-[400px]'>
                <h2 className='text-[25px] font-semibold'>Proffesational skill</h2>
                <div className='w-[400px]  flex flex-wrap  absolute  left-[-50px] top-20'>

                  <CircularSkillBar skill="React" percentage={80} />
                  <CircularSkillBar skill="JavaScript" percentage={70} />
                  <CircularSkillBar skill="JavaScript" percentage={70} />
                  <CircularSkillBar skill="JavaScript" percentage={70} />
                  {/* Add more CircularSkillBar components as needed */}

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* my skill end */}










        {/* Portfolio start */}


        <div className='mt-20 flex flex-col justify-center items-center' id='portfolio'>
          <h2 className='text-[40px] font-semibold text-center '>Latest Project</h2>
          <div className='flex w-[1500px] flex-wrap gap-3 justify-center'>



            <ProjectCart

              image={<img src='https://segwitz.com/wp-content/uploads/5757453-scaled.jpg' alt='uiux' />}
              title='UI/UX Design'
              discription="
              User Interface (UI) and User Experience (UX) design are crucial in creating intuitive, visually appealing digital experiences. UI focuses on aesthetics and interactivity, while UX prioritizes user satisfaction through seamless, efficient, and enjoyable interactions, fostering positive connections between users and technology."
            />


            <ProjectCart

              image={<img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Learn_Web_Designing.jpg' alt='web design' className='h-[300px]' />}
              title={'Web Design'}
              discription="Web design is the process of creating visually engaging and functional websites. It involves layout, color schemes, typography, and interactive elements to deliver a seamless and enjoyable online user experience."
            />


            <ProjectCart

              image={<img src='https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg' alt='photography' className='h-[300px]' />}
              title={'Photography'}
              discription="Photography is the art of capturing moments through visual storytelling. It combines technical skills, creativity, and an understanding of composition, lighting, and perspective to convey emotions and narratives visually."
            />

          </div>
        </div>



        {/* portfolio end */}


        {/* Contact me  */}

        <div className='flex justify-around items-center mt-20 pb-10' id='contact'>
          <div className='w-[500px]'>
            <h1 className='text-[40px] font-semibold text-center '>Contact me</h1>
            <p className='text-justify'>
              Feel free to reach out to me for any inquiries, collaboration opportunities, or questions. I'm here to assist you. Looking forward to hearing from you and discussing how we can work together!
              You can contact me via email  or connect with me on social media given below:
            </p>
            <div className='mt-4'>
              <div className='flex items-center gap-2'>
                <SiMinutemailer />
                <div>
                  sudip123@gmail.com
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <FaPhoneVolume />
                <div>9849959838</div>
              </div>
            </div>
            <div className='flex gap-2 mt-5'>
              <FaFacebookSquare className=' w-1 icon-css  ' />
              <FaInstagramSquare className='icon-css' />
              <FaWhatsappSquare className='icon-css' />
              <FaLinkedin className='icon-css' />
              <FaSquareGithub className='icon-css' />

            </div>
          </div>



          <div className='w-[650px]'>
            <div>
              <input type='text' placeholder='Enter your Name' className='py-5 px-2 w-full rounded-lg ' />
            </div>

            <div className='w-full mt-2'>
              <input type='text' placeholder='Enter your Email' className='py-5 px-2 w-full rounded-lg' />
            </div>

            <div className='w-full mt-2'>
              <input type='text' placeholder='Enter your subject' className='py-5 px-2 w-full rounded-lg' />
            </div>

            <div className='w-full mt-2'>
              <textarea type='textarea' rows="8" placeholder='Enter your message' className='py-5 px-2 w-full rounded-lg ' />
            </div>

            <div className='w-full mt-2'>
              <button className='w-full py-5 rounded-lg bg-[#0ef]'>Submit</button>
            </div>

          </div>
        </div>

        {/* contact me end */}

      </body >

      {/* footer section start */}
      <footer>
        <div className='w-full bg-red-500 text-center py-3 capitalize relative'>
          Made and editied by sudip shrestha !!2024!!
          <div className='bg-green-300 w-10 h-10 absolute  right-5 top-[-20px] rotate-45'>
            <a href='#home' className='transition-all  w-10 h-10 flex justify-center items-center absolute left-0'></a>
          </div>
          <div className='bg-green-300 w-14 h-10 absolute  right-[12px] top-0'>
            {/* <a href='#home' className='transition-all  w-10 h-10 flex justify-center items-center absolute left-0'>^</a> */}
          </div>
        </div>
      </footer>

      {/* footer section end */}
    </div >
  )
}
