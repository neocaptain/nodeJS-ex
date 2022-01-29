const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log('필요한 권한: ' + rolesArray);
        console.log('가지고 있는 권한: ' + req.roles);
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true );
        if(!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles;