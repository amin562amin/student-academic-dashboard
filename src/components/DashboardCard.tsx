type PassInProp = {
    title: string
    value: string
};

function DashboardCard({
    title,
    value
}: PassInProp) {

    return(
        <div className="bg-zinc-800 p-6 rounded-2xl text-white">
            <p className="text-zinc-400 text-sm">
                {title}
                </p>
            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
}

export default DashboardCard;