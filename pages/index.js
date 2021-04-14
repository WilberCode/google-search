import Head from 'next/head'
import Avatar from '../components/Avatar'
/* import styles from '../styles/Home.module.css' */
import {ViewGridIcon,MicrophoneIcon} from '@heroicons/react/solid'
import { SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import {useRouter} from 'next/router';

export default function Home() {

  const searchInputRef = useRef(null)
  const router =  useRouter()

  const search= (e)=> {
   e.preventDefault()
   const term =  searchInputRef.current.value
   if(!term) return;
   router.push(`/search?term=${term}`)

  }
  return (
    <div className="flex flex-col  justify-center items-center h-screen   ">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header  className="flex w-full items-center justify-between p-5  text-sm  text-gray-700" >
        {/* Left */}
        <div className="flex space-x-4  items-center" >
          <p className="link" >About</p>
          <p className="link" >Sore</p>
        </div>
        {/* Right */}

        <div className="flex space-x-4  items-center" >
          <p className="link" >Gmail</p>
          <p className="link" >Image</p>
          {/* Icon */}
          <ViewGridIcon className="w-10 h-10  p-2 rounded-full hover:bg-gray-100 cursor-pointer " /> 
          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/27131012?v=4" /> 
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow  w-4/5  " >

        <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
         />
         <div  className="flex items-center  w-full  sm:max-w-xl lg:max-w-2xl mt-5 border border-gray-200  hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full " >
            <SearchIcon className="h-5 text-gray-500   " />
            <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow " />
            <MicrophoneIcon  className="h-5" />
         </div>
         <div  className="flex flex-col sm:flex-row  w-1/2 space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8"> 
            <button  onClick={search}  className="btn" >Google Search</button>
            <button  onClick={search}  className="btn" >I'm Feeling Lucky</button>
         </div>
      </form>
      {/* Footer */}
      <Footer/>

    </div>
  )
}
