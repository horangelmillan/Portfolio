// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const showImage = catchAsync(async (req, res, next) => {
    const { imageTemp } = req.body;

    res.status(200).json({
        status: 'success',
        imageTemp
    });
});

module.exports = { showImage };