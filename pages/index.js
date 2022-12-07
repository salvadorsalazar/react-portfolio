import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import sal from "../public/sal.jpeg";
import calc from "../public/calculator.png";
import lara from "../public/lara.png";
import poke from "../public/poke.png";
import movie from "../public/movie.png";
import food from "../public/food.jpeg";



import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900   md:px-10 lg:px-40 overflow-x-auto">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            {/* <h1 className="font-burtons text-5xl">              <a href="https://www.linkedin.com/in/salvador-salazar-73a45a21b/"><AiFillLinkedin /></a>
         <a href="https://github.com/salvadorsalazar"><AiFillGithub /></a>
</h1> */}
            

  <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGoogleCircle />
              <a href="https://www.linkedin.com/in/salvador-salazar-73a45a21b/"><AiFillLinkedin /></a>
         <a href="https://github.com/salvadorsalazar"><AiFillGithub /></a>


            </div>



            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1X6HUD6GMnIVtcfuX7DcKfA1CWw21R9i6SPVegIcus3g/edit"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
Salvador Salazar            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Fullstack Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
             Hello, I'm Salvador! 👋 I am a Junior Web Developer in San Antonio , Texas.

📕 Skills: Javascript, HTML, CSS, Bootstrap, JQuery, Java, MySQL, Spring Boot, React.js , Next.js, C++ , C# , PHP Laravel . 
            </p>
            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <a href="https://www.linkedin.com/in/salvador-salazar-73a45a21b/"><AiFillLinkedin /></a>
              <AiFillYoutube />
            </div> */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative object-position: 50% 50% overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={sal} className="max-auto" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      
        <section className="py-10">
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">Portfolio</h3>
          
          </div>
          <div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap">

            <div className="basis-1/3 flex-1 ">
              {/* <div>  <p className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Fully functional Calculator bult using React.js</p></div> */}
              <div className="py-5"> <p className=" text-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md">Basic Calculator built with React.js .<br></br><br></br><br></br>
              
              
              </p></div>


             <a href="https://salvadorsalazar.github.io/react-calculator" target="_blank">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={calc}
                />
                
                </a>
            </div>

            
            <div className="basis-1/3 flex-1">
                                      <div className="py-5"> <p className=" text-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md">Job Posting website based on PHP Laravel.Database used is MySql and styled with Tailwind Css. Login and Registration pages are authenticated </p></div>

<a href="https://github.com/salvadorsalazar/sitesPHP/tree/master/laragigs" target="_blank">

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={lara}
                />
                </a>
            </div>

            <div className="basis-1/3 flex-1">

              <div className="py-5"> <p className=" text-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md">Pokeman Index using react.js <br></br><br></br><br></br>
              
              
              </p></div>

<a href="https://poke-app-2buu.vercel.app/" target="_blank">
{/*  */}
{/*  poke needs updating*/}

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={poke}
              /></a>
            </div>

            <div className="basis-1/3 flex-1">
              <div className="py-5"> <p className=" text-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md">Movie databse using react<br></br><br></br><br></br>
              
              
              </p></div>
<a href="https://movieapp-sage.vercel.app/" target="_blank">


              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={movie}
              /></a>
            </div>


            <div className="basis-1/3 flex-1">

              <div className="py-5"> <p className=" text-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md">IntelliFridge<br></br><br></br><br></br>
              
              
              </p></div>


              <a href="https://github.com/Capstone-project-Paris-Sal-Sergio-Joe/IntelliFridge" target="_blank">

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={food}
              /></a>
            </div>

           
          </div>
        </section>
      </main>
    </div>
  );
}
