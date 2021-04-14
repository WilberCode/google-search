import HeaderOption from "./HeaderOption"

import { 
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from "@heroicons/react/outline" 

const HeaderOptions = () => {
    return <div className="flex justify-evenly lg:justify-start  w-full text-gray-700 text-sm lg:text-base lg:space-x-36 
    lg:pl-52 border-b " >
            {/* Left */}
            <div>
                <ul  className="flex space-x-6" >
                    <HeaderOption Icon={SearchIcon} title='All' selected ></HeaderOption> 
                    <HeaderOption Icon={PhotographIcon} title='Images' ></HeaderOption> 
                    <HeaderOption Icon={PlayIcon} title='Videos' ></HeaderOption> 
                    <HeaderOption Icon={NewspaperIcon} title='News' ></HeaderOption> 
                    <HeaderOption Icon={MapIcon} title='Maps' ></HeaderOption> 
                    <HeaderOption Icon={DotsVerticalIcon} title='More' ></HeaderOption> 
                </ul>
            </div>
            {/* Right */}
            <div>
                <ul  className="flex space-x-4" >
                    <li className="link" >Settings</li>
                    <li className="link" >Tools</li>
                </ul>
            </div>
        </div> 
}

export default HeaderOptions
