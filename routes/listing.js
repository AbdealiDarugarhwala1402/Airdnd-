const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {validateListing,isLoggedIn,isOwner} = require('../middlewares.js');
const ListingController = require('../controllers/listing.js');
const {storage} = require('../cloudConfig.js');
const multer  = require('multer');
const upload = multer({ storage });


router.get("/new", isLoggedIn, ListingController.newListing);

router.get("/:id/edit",isLoggedIn, wrapAsync(ListingController.editListing));

router.route('/')
.get(wrapAsync(ListingController.index))
.post(isLoggedIn, upload.single('image'), validateListing, wrapAsync(ListingController.createListing));

router.route('/:id')
.get(wrapAsync(ListingController.showListing))
.put(isLoggedIn, upload.single('image'), validateListing, isOwner, wrapAsync(ListingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(ListingController.deleteListing));

module.exports = router;