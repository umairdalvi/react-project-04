const Header = () => {
    return (
        <div className="flex justify-between items-center p-2 lg:p-3 lg:border-b border-b-slate-300">
            <div>
                <div className="gap-5 hidden lg:flex">
                    <p className="cursor-pointer">+1 (973) 435-3638</p>
                    <p className="cursor-pointer">info@furniture.com</p>
                </div>
                <div className="lg:hidden text-xl">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
            <div className="translate-x-4 md:translate-x-10 lg:-translate-x-14">
                <div>
                    <a href="#">
                        <img
                            className="w-24"
                            src="./images/logo.avif"
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
            <div className="">
                <div className="flex gap-4 text-xl">
                    <div>
                        <i className="cursor-pointer ri-search-line"></i>
                    </div>
                    <div className="hidden lg:inline-block">
                        <i className="cursor-pointer ri-user-3-line"></i>
                    </div>
                    <div className="hidden lg:inline-block">
                        <i className="cursor-pointer ri-heart-line"></i>
                    </div>
                    <div>
                        <i className="cursor-pointer ri-shopping-cart-line"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
