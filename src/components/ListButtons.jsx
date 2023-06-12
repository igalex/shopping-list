const ListButtons = ({fetch}) => {

    return (
        <div>
            <button onClick={() => fetch("")} className="m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">All</button>
            <button onClick={() => fetch("isCompleted=true")} className="m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Completed</button>
            <button onClick={() => {fetch("isCompleted=false")}} className="m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Uncompleted</button>
        </div>
    )
};

export default ListButtons;
