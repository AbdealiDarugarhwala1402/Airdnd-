const Listing = require('../models/listing.js');

module.exports = {
    
    // all listing route
    index : async (req, res) => {
        const allListings = await Listing.find({});
        res.render("index.ejs", {listings: allListings});
    },

    // new listing route
    newListing : (req, res) => {
        res.render("new.ejs");
    },

    // show listing route
    showListing: async (req,res) => {
        const {id} = req.params;
        const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author"}}).populate("owner");
        if (!listing) {
            req.flash("error", "No listing found");
        }
        res.render("show.ejs", {listing});
    },

    // create listing route
    createListing: async (req, res, next) => {
        const {title, description, price, location, country } = req.body;
        const newListing = new Listing({title, description, price, location, country});
        newListing.owner = req.user._id;  // add owner id to the new listing document before saving it in the database  (mongoose middleware)
        if (typeof req.file !== "undefined") {
            const url = req.file.path;
            const filename = req.file.filename;
            newListing.image = {
                url,
                filename
            }
        } else {
            newListing.image = {
                url: "https://res.cloudinary.com/djw3n5mxf/image/upload/v1732802988/rowan-heuvel-bjej8BY1JYQ-unsplash_uyd0un.jpg",
                filename: "default_listing"
            };
        }
        await newListing.save();
        req.flash("success", "New Listing Created");
        res.redirect("/listings");
    },

    // edit listing route
    editListing: async (req, res) => {
        const {id} = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "No listing found");
        }
        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
        res.render("edit.ejs", {listing, originalImageUrl});
    },

    // update listing route
    updateListing: async (req, res) => {
        const {id} = req.params;
        const {title, description, price, location, country } = req.body;
        const listing = await Listing.findByIdAndUpdate(id, {title, description, price, location, country}, {runValidators:true, new: true});
        if (typeof req.file !== "undefined") {
            const url = req.file.path;
            const filename = req.file.filename;
            listing.image = {
                url,
                filename
            };
            await listing.save();
        }
        req.flash("success", "Listing Updated");
        res.redirect(`/listings/${id}`);
    },

    // delete listing route
    deleteListing: async (req, res) => {
        const {id} = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted");
        res.redirect("/listings");
    }
};