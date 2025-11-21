const Header = () => {
    return (
        <div className="flex justify-between items-center py-4 px-3 border-b border-b-slate-300">
            <div className="">
                <div className="flex gap-5">
                    <p className="cursor-pointer">+1(973)435-3638</p>
                    <p className="cursor-pointer">info@furniture.com</p>
                </div>
            </div>
            <div className="">
                <div>
                    <a href="#">
                        <img className="w-32" src="./images/logo.avif" alt="logo" />
                    </a>
                </div>
            </div>
            <div className="">
                <div className="flex gap-4 text-xl">
                    <i className="cursor-pointer ri-search-line"></i>
                    <i className="cursor-pointer ri-user-3-line"></i>
                    <i className="cursor-pointer ri-heart-line"></i>
                    <i className="cursor-pointer ri-shopping-cart-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Header