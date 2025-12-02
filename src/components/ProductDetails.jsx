const ProductDetails = () => {
    return (
        <div className="p-2 md:p-8 lg:p-16 flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-6/12">
                <div className="sticky top-5">
                    <img src="./images/sofa.webp" alt="sofa" />
                </div>
            </div>
            <div className="w-full lg:w-6/12">
                <div>
                    <p className="text-gray-700 text-sm mb-1">Wayfair</p>
                    <h3 className="text-xl sm:text-3xl font-semibold mb-1">
                        Petrie Midcentury Sofa
                    </h3>
                    <div className="flex gap-5 text-sm mb-3">
                        <p className="tracking-[-0.25rem] text-amber-400">
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                        </p>
                        <p>1 review</p>
                        <p>🔥15 sold in last 24 hrs</p>
                    </div>
                    <p className="text-xl sm:text-2xl font-medium mb-3">
                        $420.00
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas ipsum consectetur omnis dolores magnam labore.
                    </p>
                </div>
                <div className="p-3 flex flex-col gap-4 border rounded-md mt-3">
                    <div className="border-b border-dashed pb-3 flex items-center gap-4">
                        <i className="ri-truck-line text-xl sm:text-2xl"></i>
                        <p className="text-sm sm:text-base">
                            Estimate delivery times:
                            <span className="font-semibold">
                                {" "}
                                3-5 days International.
                            </span>
                        </p>
                    </div>
                    <div className="border-b border-dashed pb-3 flex items-center gap-4">
                        <i className="ri-discount-percent-line text-xl sm:text-2xl"></i>
                        <p className="text-sm sm:text-base">
                            Use code "
                            <span className="font-semibold">WELCOME15</span>"
                            for discount 15% on your first order.
                        </p>
                    </div>
                    <div className=" flex items-center gap-4">
                        <i className="ri-box-3-line text-xl sm:text-2xl"></i>
                        <p className="text-sm sm:text-base">
                            Free shipping & returns:
                            <span className="font-semibold">
                                {" "}
                                On all orders over $150.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 mt-5">
                    <div className="w-7 h-6 rounded-sm bg-black text-center">
                        <p className="text-white">
                            <i className="ri-eye-line"></i>
                        </p>
                    </div>
                    <p className="text-gray-700">
                        18 people are viewing this right now
                    </p>
                </div>
                <div className="border-t mt-5 py-4 flex justify-between items-center">
                    <div className="rounded-full border border-gray-300 bg-gray-200 px-2 py-3 w-4/12 sm:w-3/12 flex items-center justify-between gap-5">
                        <p className="cursor-pointer">
                            <i className="ri-subtract-fill"></i>
                        </p>
                        <p>0</p>
                        <p className="cursor-pointer">
                            <i className="ri-add-fill"></i>
                        </p>
                    </div>
                    <div className="w-4/12 sm:w-7/12 lg:w-6/12">
                        <button className="rounded-full w-full bg-black text-white font-medium py-3 inline-block">
                            Add to Cart
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-lg text-black cursor-pointer rounded-full w-10 h-10 p-3 border flex items-center justify-center hover:bg-black hover:text-white transition-all">
                            <i className="ri-stack-line"></i>
                        </p>
                        <p className="text-lg text-black cursor-pointer rounded-full w-10 h-10 p-3 border flex items-center justify-center hover:bg-black hover:text-white transition-all">
                            <i className="ri-heart-line"></i>
                        </p>
                    </div>
                </div>
                <div>
                    <button className="w-full rounded-full py-3 text-white bg-stone-800 mt-2">
                        Buy it Now
                    </button>
                </div>
                <div className="mt-2">
                    <p className="flex items-center text-sm ms:text-base">
                        <span className="text-green-600 text-2xl me-1">
                            <i className="ri-check-fill"></i>
                        </span>
                        <span className="text-gray-700">
                            Pickup available at{" "}
                            <span className="font-semibold text-black">
                                Shop location.
                            </span>{" "}
                            Usually ready in 24 hrs
                        </span>
                    </p>
                </div>
                <div className="mt-5 text-gray-700 text-sm sm:text-base">
                    <p className="mb-2">
                        <span className="inline-block w-24">SKU:</span> FUR_11
                    </p>
                    <p className="mb-2">
                        <span className="inline-block w-24">Available:</span> In
                        stock
                    </p>
                    <p className="mb-2">
                        <span className="inline-block w-24">Collections:</span>{" "}
                        Art & mirrors, Bedding, Bedroom, Decor, Dining room,
                        Home page, Lighting, Living room
                    </p>
                </div>
                <div className="mt-5 w-full cursor-pointer">
                    <p className="flex justify-between py-4 border-y">
                        <span className="font-semibold">Description</span>
                        <span>
                            <i className="ri-add-large-line"></i>
                        </span>
                    </p>
                    <p className="flex justify-between py-4 border-b">
                        <span className="font-semibold">
                            Shipping and Returns
                        </span>
                        <span>
                            <i className="ri-add-large-line"></i>
                        </span>
                    </p>
                    <p className="flex justify-between py-4 border-b">
                        <span className="font-semibold">Return Policies</span>
                        <span>
                            <i className="ri-add-large-line"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
