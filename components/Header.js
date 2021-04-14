import { MicrophoneIcon, SearchIcon,XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import {useRouter} from 'next/router'
import { useEffect, useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"


const Header = () => {
    const Router = useRouter()

    const searchInputRef = useRef(null)
    useEffect(() => {
        searchInputRef.current.value = Router.query.term
    }, [0])
    const search =  (e) => {
        e.preventDefault()
        const term  = searchInputRef.current.value
        if (!term) return;  
        Router.push(`/search?term=${term}`)
        
    }
    return  <header  className="sticky bg-white top-0" >
               <div className=" flex p-6  items-center" >
                    <Image onClick={()=>Router.push('/')}
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        height={40}
                        width={120}
                        className="cursor-pointer"
                    />
                    <form   className="ml-10 mr-5 flex items-center  w-full  sm:max-w-xl lg:max-w-2xl   border border-gray-200  hover:shadow-lg focus-within:shadow-lg px-6 py-3 rounded-full" > 
                        
                            <input ref={searchInputRef}   type="text" className="focus:outline-none flex-grow " />
                            <XIcon onClick={()=>(searchInputRef.current.value = "")}  className=" text-gray-500 h-7 transform transition duration-100  sm:mr-3 hover:scale-125 cursor-pointer " />
                            <div className="hidden sm:flex  border-l-2 border-gray-300 pl-4 space-x-2  " >
                                <MicrophoneIcon  className="h-6 text-blue-500 " /> 
                                <SearchIcon className="h-6 text-blue-500   " /> 
                            </div>
                            <button type="submit" hidden onClick={search} ></button>
                    </form>
                    <Avatar className="ml-auto" url='https://avatars.githubusercontent.com/u/27131012?v=4' /> 
               </div>
            {/*    HeaderOptions */}
            <HeaderOptions/>
          </header>
}

export default Header
