export function globalErrorHandle(error, req, res, next) {
    const err = {
        statusCode: error.status ? error.status : 500,
        message: error.message ? error.message : 'Internal server error'
    };
    return res.status(err.statusCode).json({
        message: err.message
    });
}