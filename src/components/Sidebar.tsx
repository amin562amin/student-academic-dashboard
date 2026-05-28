import {Menu, PenAlt, ChartSine, Cog, BookOpen} from '@boxicons/react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Sidebar()
{
    const[pressed, setPressed] = useState(false);

    const globalStyling = "absolute top-0 left-0 h-screen bg-[#12171e] px-3 py-2 transition-all duration-500 ease-in-out m-0 p-0 box-border font-serif"
    const textStyling = "text-white flex items-center no-underline rounded-xl"
    return(
        <aside className={` ${globalStyling} ${pressed ? "w-48" : "w-16"}`}>
           
       <div className={`logo mb-4 ${textStyling}`}>
        <button onClick={() => setPressed(!pressed)}>             
            <Menu className='btn'/>  
        </button>
       </div> 
       <ul className='space-y-4'>
        <li>
            <Link
            to="/"
            className={`flex items-center gap-3 ${textStyling}`}>
                <PenAlt className='text-2xl' />
                {pressed && <span> Dashboard </span>}
            </Link>
        </li>

        <li>
            <Link
            to="/students"
            className={`flex items-center gap-3 ${textStyling}`}>
                <BookOpen className='text-2xl' />
                {pressed && <span>Students </span>}
            </Link>
        </li>
        <li>
            <Link
            to="/analytics"
            className={`flex items-center gap-3 ${textStyling}`}>
                <ChartSine className='text-2xl' />
                {pressed &&<span>Analytics </span>}
            </Link>           
        </li>
        <li>
           <Link
            to="/settings"
            className={`flex items-center gap-3 ${textStyling}`}>
                <Cog className='text-2xl' />
                {pressed && <span>Settings </span>}
            </Link>           
        </li>
       </ul>

       </aside>
    );
}


export default Sidebar