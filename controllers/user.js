const User = require('../models/user.js');

module.exports = {
    getSignup: (req, res) => {
        res.render('signup.ejs');
    },

    postSignup: async(req, res) => {
        try {
            const { username, email, password } = req.body;
            const user = new User({ username, email});
            const registerdUser = await User.register(user, password);
            req.login(registerdUser, (err => {
                if(err) {
                    return next(err);
                }
                req.flash("success", "Welcome to Airbnb! You are now registered and logged in");
                res.redirect("/listings");
            }));
        } catch(err) {
            req.flash("error", err.message);
            res.redirect("/signup");
        }
    },

    getLogin: (req, res) => {
        res.render('login.ejs');
    },

    postLogin: async(req,res) => {
        req.flash("success", "Welcome back!")
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    },

    logout: (req, res, next) => {
        req.logout(err => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Logged Out!");
            res.redirect("/listings");
        });    
    }
};