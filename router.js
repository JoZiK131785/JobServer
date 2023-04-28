const { 
    getJobs,
    getFilteredJobs,
    getJobById, 
    createJob, 
    updateJob, 
    deleteJob 
} = require("./controllers/Job");

const router = require("express").Router();

router.get("/api/jobs", getJobs);
router.get("/api/search", getFilteredJobs);
router.get("/api/jobs/:jobID", getJobById);
router.post("/api/jobs", createJob);
router.put("/api/jobs/:jobID", updateJob);
router.delete("/api/jobs/:jobID", deleteJob);

module.exports = router;