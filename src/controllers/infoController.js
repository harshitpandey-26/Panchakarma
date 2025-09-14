import pkg from 'http-status-code';

const {StatusCodes} = pkg;

export const info = async(req,res) => {
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"API is live",
        error:{},
        data:{}
    })
}



