
const NavBar = () => {

    return (
        <div className="fixed flex top-0 w-full border-b border-custom-gray px-[8%] py-4 h-16 bg-black/50 justify-between">
            <h1 className="flex items-center text-3xl gap-[1px]">
                <p className="font-bold text-3xl text-white">Learn </p>
                <span className="font-bold text-[18px] mt-[11px] text-custom-purple">ify.</span>
            </h1>
            <div className="flex items-center justify-center space-x-4">
              
                <button className="px-4 py-2 text-sm font-semibold rounded-md">Log in</button>
                <button className="bg-custom-purple px-4 py-2 text-sm font-semibold rounded-md">Sign up</button>
            </div>
            
        </div>
    )

}

export default NavBar