import {GlobeIcon} from '@heroicons/react/solid';

const Footer = () => {
    return  <footer className="bg-gray-100 w-full divide-y-[1px]  divide-gray-300 text-sm text-gray-500 " >
                <div  className="px-5 py-3" >
                    <p>Perú</p>
                </div>
                <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  grid-flow-row-dense px-8 py-3 " >
                    <div  className="flex justify-center items-center md:col-span-2 lg:col-span-1  lg:col-start-2 md:row-start-1 " >
                        <GlobeIcon className="h-5 text-green-700" /> 
                        <p>Cómo funciona la Búsqueda</p>
                    </div> 
                    <ul  className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start " >
                        <li>Sobre Google</li>
                        <li>Publicidad</li>
                        <li>Como buscar trabajos</li>   
                    </ul>  
                    <ul   className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto ">
                        <li>Privacidad</li>
                        <li>Condiciones</li>
                        <li>Preferencias</li>     
                    </ul> 
                </div>
               
          </footer>;
}

export default Footer
