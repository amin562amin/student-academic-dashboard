
function SearchBar()
{
    return(

        <div className="w-full h-8 p-1.5 font-">
            <input 
            type="text"
            placeholder="Search Students"
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
             />
        </div>
    )
}


export default SearchBar