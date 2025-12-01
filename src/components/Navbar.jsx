import React from "react";

const Navbar = () => {
    return (
        <div className="w-fit mx-auto mt-4 hidden lg:block">
            <ul className="flex gap-8 font-medium">
                <li>
                    <a href="#">
                        Home<i className="ri-arrow-drop-down-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Shop<i className="ri-arrow-drop-down-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Products<i className="ri-arrow-drop-down-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pages<i className="ri-arrow-drop-down-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog<i className="ri-arrow-drop-down-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">Buy Theme!</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
