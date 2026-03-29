function roleMiddleware(rolesPermitidas){
    return (req, res, next) => {
        if(!rolesPermitidas.includes(req.usuario.role)){
            return res.status(403).json({
                error: 'Acesso negado'
            });
        }

        next();
    }
}

module.exports = roleMiddleware;