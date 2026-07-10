export function validator(schema){
    return ( req, res, next ) => {
        const { error, value } = schema(req.body);
        if (error) {
            return res.status(422).json({
                message: error.details[0].message
            })
        };
        next();
    }
}