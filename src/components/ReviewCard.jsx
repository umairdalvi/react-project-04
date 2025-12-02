const ReviewCard = ({ name, profileImgUrl, rating, reviewTitle, review }) => {
    const getRating = () => {
        switch (rating) {
            case 1:
                return <i className="ri-star-s-fill"></i>;
            case 2:
                return (
                    <>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                    </>
                );
            case 3:
                return (
                    <>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                    </>
                );
            case 4:
                return (
                    <>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                    </>
                );
            case 5:
                return (
                    <>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                    </>
                );
        }
    };

    return (
        <div className="min-w-full max-w-fit mt-5">
            <div className="bg-gray-100 p-5 rounded-md">
                <div className="flex items-center gap-3 w-fit">
                    <div className="rounded-full w-14 h-14 overflow-clip border border-gray-300">
                        <img src={profileImgUrl} alt={name} />
                    </div>
                    <div className="font-medium">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-2xl tracking-[-0.15rem] text-amber-400">
                        {getRating()}
                    </p>
                </div>
                <div className="mt-3">
                    <p className="font-semibold text-lg">{reviewTitle}</p>
                    <p className="text-gray-700 mt-2">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
