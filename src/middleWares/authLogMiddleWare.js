function authLogMiddleWare(req, res, next){
    if(!req.session.user){
        res.redirect('/users/login');
    } else {
        next();
    }
}

module.exports = authLogMiddleWare;