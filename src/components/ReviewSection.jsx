import { useRef, useState } from "react";

const ReviewSection = () => {
    const [errors, setErrors] = useState({});

    const formRef = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const normalStyle =
        "border-gray-300 border rounded-full py-2 px-3 focus:ring-gray-500 focus:border-gray-300";
    const errorStyle =
        "border-red-600 border rounded-full py-2 px-3 focus:ring-red-500 focus:border-red-300 placeholder:text-red-600";

    const [formData, setFormData] = useState({
        name: "",
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
            console.log(formData);
            setFormData({
                name: "",
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
            <div className="w-6/12">
                <div>
                    <div className="mb-8 text-center">
                        <h3 className="text-2xl font-semibold">
                            Write a review
                        </h3>
                    </div>
                    <form
                        className="flex flex-col gap-5"
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
                                        value=""
                                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        defaultChecked={formData.tnc}
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
        </div>
    );
};

export default ReviewSection;
