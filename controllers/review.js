const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

module.exports = {
    // new review route
    newReview: async(req, res) => {
        const {id} = req.params;
        const listing = await Listing.findById(id);
        const newReview = new Review({
            rating: req.body.rating,
            comment: req.body.comment
        });
        listing.reviews.push(newReview);
        newReview.author = req.user._id;
        await newReview.save();
        await listing.save();
        req.flash("success", "New Review Created");
        res.redirect(`/listings/${id}`);
    },

    // delete review route
    deleteReview: async(req,res) => {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull: {reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review Deleted");
        res.redirect(`/listings/${id}`);
    }
};