import ReviewCard from "./ReviewCard";

const ReviewDisplay = ({ reviews }) => {
    return (
        <div className="p-3">
            <div className="text-center font-semibold text-3xl my-6">
                <p>Customer Reviews</p>
            </div>
            {reviews.map(r => {
                return (
                    <ReviewCard
                        key={r.key}
                        name={r.name}
                        profileImgUrl={r.profileImgUrl}
                        rating={Number(r.rating)}
                        reviewTitle={r.reviewTitle}
                        review={r.review}
                    />
                );
            })}
        </div>
    );
};

export default ReviewDisplay;
