
type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({searchTerm, setSearchTerm}: SearchBarProps)
{
    return(

        <div className="w-full h-8 p-1.5 font-">
            <input 
            type="text"
            placeholder="Search Students"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
             />
        </div>
    )
}


export default SearchBar