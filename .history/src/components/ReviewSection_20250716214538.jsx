// ReviewSection.js
import React from 'react';
import '../styles/ReviewSection.css'; // Import the stylesheet

const ReviewSection = () => {
    return (
        <div className="review-section">
            <div className="review-header">
                <p className='text-gold'>OUR CUSTOMER REVIEW</p>
                <h2 className='forum text-white'>What Our Client Says</h2>
            </div>
            <div className="review-content">
                <div className="review-image"></div>
                <div className="review-text">
                    <div className="review-rating">
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className='margin-29'>
                        <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                        </p>
                        <h4>Jackson Dean</h4>
                        <span>Guest</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
