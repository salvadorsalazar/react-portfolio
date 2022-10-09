import Head from 'next/head'

// import { BsFillMoonStarsFill } from 'react-icons/bs'

// import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Image from "next/image";
import deved from '../public/dev-ed-wave.png'
import sal from '../public/sal.jpeg'


import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ? 'dark': "" }>
      <Head>
        <title>Sal Salazar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' >
    
        <section className=" min-h-screen">

  {/* nav bar start */}

          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Salvador g Salazar</h1>            
              <ul className='flex items-center'>
                <li>
                    {/* <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-teal-500'/> */}
                </li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'  href='#'>Resume</a></li>
              </ul>

           </nav>
{/* navbar end */}

          
          <div className='text-center p-10 '>
            
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sal Salazar</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>Developer.</h3>
{/* paragraph media views changes to keep text center */}
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-teal-500'>
                Junior Software developer utilizing full-stack web developement.
                PHP Laravel , React.js , Next.js , Java , Javascript.
                Check out ny sites below.
              </p>
          
          </div>
       
          {/* <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle />a
              <AiFillLinkedin />
              <AiFillYoutube />
          </div> */}
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
                      <Image src={sal} alt="alt" layout="fill" objectFit="cover" />
            </div>
          
        </section>

        {/* 2nd section */}
        
        <section >
          <div className='dark:text-teal-500'>
            <h3 className='text-3xl py-1'>
              Services I offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray 800 dark:text-teal-500'>
              text to fill up to details ,
              this is a placeholder,this is a plcaehokder,
              text to fill up to details ,
              <span className='text-teal-500'>this is a placeholder</span>,this is a plcaehokder,
              text to fill up to details ,
              this is a placeholder,<span className='text-teal-500'>this is a </span>plcaehokder,
            </p>

             <p className='text-md py-2 leading-8 text-gray 800'>
              text to fill up to details ,
              this is a placeholder,this is a plcaehokder,
              text to fill up to details ,
              <span className='text-teal-500'>this is a placeholder</span>,this is a plcaehokder,
              text to fill up to details ,
              this is a placeholder,<span className='text-teal-500'>this is a </span>plcaehokder,
            </p>

          </div>





{/* card system below */}
          <div className='lg:flex gap-10 dark:text-teal-500'>
{/* above make cards fill correctlt as a media query */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design}alt="alt" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>creating elegant designs suited fir your needs while follwoing degin theory
              </p>
              <h4 className='py-4 text-teal-600'> Design tools i use</h4>
              <p className='text-gray-800 py-1'>vsCode</p>
              <p className='text-gray-800 py-1'>Java</p>
              <p className='text-gray-800 py-1'>IntelliJ</p>

            </div> 

            
               <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-teal-500'>
              <Image src={code}alt="alt" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>creating elegant designs suited fir your needs while follwoing degin theory
              </p>
              <h4 className='py-4 text-teal-600'> Design tools i use</h4>
              <p className='text-gray-800 py-1'>vsCode</p>
              <p className='text-gray-800 py-1'>Java</p>
              <p className='text-gray-800 py-1'>IntelliJ</p>

            </div> 

               <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting}alt="alt" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>creating elegant designs suited fir your needs while follwoing degin theory
              </p>
              <h4 className='py-4 text-teal-600'> Design tools i use</h4>
              <p className='text-gray-800 py-1'>vsCode</p>
              <p className='text-gray-800 py-1'>Java</p>
              <p className='text-gray-800 py-1'>IntelliJ</p>

            </div> 


          </div>



        </section>

{/* portfolio section images below */}
        <section>
          
          <div className='dark:text-teal-500'>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            


             <p className='text-md py-2 leading-8 text-gray 800'>
              Portfoliodetail san dmomds to fill up to details ,
              this is a placeholder,this is a plcaehokder,
              text to fill up to details ,
              <span className='text-teal-500'>this is a placeholder</span>,this is a plcaehokder,
              text to fill up to details ,
              this is a placeholder,<span className='text-teal-500'>this is a </span>plcaehokder,
            </p>



          </div>

          
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'><Image src={web1} alt="alt"   className='rounded-lg object-cover' width={'100%'} height=
              {'100%'} layout='responsive'/></div>
            <div className='basis-1/3 flex-1'><Image src={web2}alt="alt"  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div>
            <div className='basis-1/3 flex-1'><Image src={web3}alt="alt" className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div>
            <div className='basis-1/3 flex-1'><Image src={web4}alt="alt" classNamer='ounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div>
            <div className='basis-1/3 flex-1'><Image src={web5}alt="alt" className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/></div>
            <div className='basis-1/3 flex-1'><Image src={web6}alt="alt" className='rounded-lg object-cover'  width={'100%'} height={'100%'} layout='responsive'/></div>






          </div>

      </section>



      </main>

     
    </div>
  );
}
