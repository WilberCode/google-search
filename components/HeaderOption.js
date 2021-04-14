 

const HeaderOption = ({Icon, title, selected}) => {
    return (
        <li className={` flex space-x-1 items-center border-transparent  cursor-pointer  border-b-4 hover:text-blue-500  hover:border-blue-500  pb-3   ${ selected && 'text-blue-500 border-blue-500' }  `} >
            <Icon className="h-4" />
            <span  className='hidden sm:inline-flex' >{title}</span>
        </li>
    )
}

export default HeaderOption
