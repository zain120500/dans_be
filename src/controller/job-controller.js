import jobService from "../service/job-service.js"

const get = async (req, res, next) => {
    try {
        const request = {
            description : req.query.description,
            location : req.query.location,
            full_time : req.query.full_time,
            page : req.query.page,
        }
        const result = await jobService.get(request)
        res.status(200).json({
            data:result
        })
    } catch (e) {
        next(e)
    }
}

const detail = async (req, res, next) => {
    try {
        const id = req.params.jobId
        const result = await jobService.detail(id)
        res.status(200).json({
            data:result
        })
    } catch (e) {
        next(e)
    }
}

export default {
    get,
    detail,
}