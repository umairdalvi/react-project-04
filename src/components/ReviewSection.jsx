import { useRef, useState } from "react";
import ReviewDisplay from "./ReviewDisplay";

const ReviewSection = () => {
    const [errors, setErrors] = useState({});
    const [reviews, setReviews] = useState([
        {
            key: "default-00",
            name: "John Doe",
            profileImgUrl: "./images/people/person-01.jpg",
            email: null,
            rating: 4,
            reviewTitle: "Comfort Meets Style: The Perfect Sofa!",
            review: "The Wayfair Midcentury Sofa is a striking addition to my living room. Its elegant design and rich color enhance the space, while the plush cushions provide exceptional comfort. Easy to assemble and visibly high-quality, this sofa is a top choice for anyone seeking style and comfort.",
            newsletterSubscribed: null,
            tnc: null,
        },
        {
            key: "default-01",
            name: "Jane Doe",
            profileImgUrl: "./images/people/person-02.jpg",
            email: null,
            rating: 5,
            reviewTitle: " Ideal for Family Gatherings",
            review: "We love our Wayfair Midcentury Sofa! It comfortably fits the whole family, making gatherings a breeze. The soft, durable fabric is easy to clean, and the modular design lets us rearrange as needed. This sofa combines style and practicality, making it a fantastic purchase for any home.",
            newsletterSubscribed: null,
            tnc: null,
        },
    ]);

    const formRef = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const normalStyle =
        "border-gray-300 border rounded-full py-2 px-3 focus:ring-gray-500 focus:border-gray-300";
    const errorStyle =
        "border-red-600 border rounded-full py-2 px-3 focus:ring-red-500 focus:border-red-300 placeholder:text-red-600";

    const [formData, setFormData] = useState({
        name: "",
        profileImgUrl: "",
        email: "",
        rating: 5,
        reviewTitle: "",
        review: "",
        newsletterSubscribed: false,
        tnc: false,
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (handleErrors()) {
            setReviews(prev => [...prev, { key: Date.now(), ...formData }]);

            setFormData({
                name: "",
                profileImgUrl: "",
                email: "",
                rating: 5,
                reviewTitle: "",
                review: "",
                newsletterSubscribed: false,
                tnc: false,
            });
        }
    };

    const handleErrors = () => {
        let errors = {};

        if (formData.name.trim() === "")
            errors.nameError = "Please enter a valid name";

        if (
            formData.email.trim() === "" ||
            !emailRegex.test(formData.email.trim())
        )
            errors.emailError = "Please enter a valid email";

        if (formData.reviewTitle.trim() === "")
            errors.reviewTitleError = "Please enter a review title";

        if (formData.review.trim() === "")
            errors.reviewError = "Please enter a review";

        if (formData.profileImgUrl.trim() === "")
            errors.profileImgUrlError =
                "Please provide a link to your profile picture";

        if (!formData.tnc)
            errors.tncError = "Please check this box to continue";

        setErrors(errors);

        if (Object.keys(errors).length > 0) return false;

        return true;
    };

    const handleChange = e => {
        if (e.target.type === "checkbox") {
            setFormData({ ...formData, [e.target.name]: e.target.checked });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }

        setErrors({ ...errors, [e.target.name + "Error"]: "" });
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full md:w-9/12 lg:w-8/12 p-3">
                <div>
                    <div className="my-8 text-center">
                        <h3 className="text-3xl font-semibold">
                            Write a review
                        </h3>
                    </div>
                    <form
                        className="flex flex-col gap-5 w-full"
                        noValidate
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name:</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className={
                                    errors.nameError ? errorStyle : normalStyle
                                }
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500">
                                {errors.nameError || ""}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="review">Profile Image URL:</label>
                            <input
                                type="url"
                                name="profileImgUrl"
                                id="profileImgUrl"
                                className={
                                    errors.profileImgUrlError
                                        ? errorStyle
                                        : normalStyle
                                }
                                placeholder="Enter a link to your profile picture"
                                onChange={handleChange}
                                value={formData.profileImgUrl}
                            />
                            <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500">
                                {errors.profileImgUrlError || ""}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email:</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                className={
                                    errors.emailError ? errorStyle : normalStyle
                                }
                                placeholder="Enter your email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500">
                                {errors.emailError || ""}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="rating">Select Rating:</label>
                            <select
                                id="rating"
                                name="rating"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                                onChange={handleChange}
                                value={formData.rating}
                            >
                                <option value={5}>5 stars</option>
                                <option value={4}>4 stars</option>
                                <option value={3}>3 stars</option>
                                <option value={2}>2 stars</option>
                                <option value={1}>1 star</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="reviewTitle">Review Title:</label>
                            <input
                                name="reviewTitle"
                                id="reviewTitle"
                                type="text"
                                className={
                                    errors.reviewTitleError
                                        ? errorStyle
                                        : normalStyle
                                }
                                placeholder="Give your review a title"
                                onChange={handleChange}
                                value={formData.reviewTitle}
                            />
                            <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500">
                                {errors.reviewTitleError || ""}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="review">Review:</label>
                            <textarea
                                name="review"
                                id="review"
                                className={`min-h-32 rounded-3xl ${
                                    errors.reviewError
                                        ? "focus:ring-red-500 focus:border-red-300 placeholder:text-red-600 border-red-600"
                                        : "border-gray-300 focus:ring-gray-500 focus:border-gray-300"
                                }`}
                                placeholder="Write your comments here"
                                onChange={handleChange}
                                value={formData.review}
                            />
                            <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500">
                                {errors.reviewError || ""}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>Subscribe to newsletter?</p>

                            <div className="flex items-center gap-5">
                                <div className="flex items-center">
                                    <input
                                        id="default-radio-1"
                                        type="radio"
                                        name="newsletterSubscribed"
                                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:bg-gray-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-1 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600"
                                        value={true}
                                        onChange={handleChange}
                                        defaultChecked={
                                            formData.newsletterSubscribed ===
                                            true
                                        }
                                    />
                                    <label
                                        htmlFor="default-radio-1"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="default-radio-2"
                                        type="radio"
                                        name="newsletterSubscribed"
                                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:bg-gray-500 dark:focus:ring-gray-700 dark:ring-offset-gray-800 focus:ring-1 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600"
                                        value={false}
                                        onChange={handleChange}
                                        defaultChecked={
                                            formData.newsletterSubscribed ===
                                            false
                                        }
                                    />
                                    <label
                                        htmlFor="default-radio-2"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex items-center gap-1">
                                    <input
                                        id="tnc"
                                        name="tnc"
                                        type="checkbox"
                                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        checked={formData.tnc}
                                        onChange={handleChange}
                                    ></input>
                                    <label htmlFor="review">
                                        I have read and agreed to the Terms and
                                        Conditions
                                    </label>
                                </div>
                                <p className="mt-0 ms-2 text-sm text-red-600 dark:text-red-500 text-center">
                                    {errors.tncError || ""}
                                </p>
                            </div>
                            <button className="mt-5 w-8/12 rounded-full py-3 text-white bg-stone-800 ">
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ReviewDisplay reviews={reviews} setReviews={setReviews} />
        </div>
    );
};

export default ReviewSection;
