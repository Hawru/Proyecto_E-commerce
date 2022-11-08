function authLogMiddleWare(req, res, next){
    if(!req.session.user){
        return res.render('login', {auth: 'No puedes entrar a esta parte'})
    } 
    next();
}

module.exports = authLogMiddleWare;