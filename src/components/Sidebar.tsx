import {Menu, PenAlt, ChartSine, Cog} from '@boxicons/react';
import {useState} from 'react';
function Sidebar()
{
    const[pressed, setPressed] = useState(false);

    const globalStyling = "absolute top-0 left-0 h-screen w-20 bg-[#12171e] px-3 py-2 transition-all duration-500 ease-in-out m-0 p-0 box-border font-serif"
    return(
        <aside className={`${globalStyling} ${pressed ? "w-64" : "w-20"}`}>
           
       <div className="logo">
        <button onClick={() => setPressed(!pressed)}>             
            <Menu className='btn'/>  
        </button>
       </div> 
       <ul>
        <li>
            <a href="#" 
            className="flex items-center gap-3">
                <PenAlt className='text-2xl' />
                {pressed && <span> Dashboard </span>}
            </a>
            <span className="tooltip"></span>
        </li>

        <li>
            <a href="#"
            className="flex items-center gap-3">
                <PenAlt className='text-2xl' />
                {pressed && <span>Modules </span>}
            </a>
            <span className="tooltip"></span>
        </li>
        <li>
            <a href="#"
            className="flex items-center gap-3">
                <ChartSine className='text-2xl' />
                {pressed &&<span>Analytics </span>}
            </a>
            <span className="tooltip"></span>
        </li>
        <li>
            <a href="#"
            className="flex items-center gap-3">
                <Cog className='text-2xl' />
                {pressed && <span>Settings </span>}
            </a>
            <span className="tooltip"></span>
        </li>
       </ul>

       </aside>
    );
}


export default Sidebar