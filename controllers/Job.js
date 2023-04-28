const Job = require("../models/Job");

const getJobs = (req, res) => {
    Job
    .find()
    .then((job) => {
        res.json(job);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const getFilteredJobs = (req, res) => {
    const { position, contract, location } = req.query

    const query = {}
    if (position) query.position = position
    if (contract) query.contract = contract
    if (location) query.location = location

    Job
    .find(query)
    .then((jobs) => {
        res.json(jobs);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const getJobById = (req, res) => {
    Job
    .findOne({ _id: req.params.jobID })
    .then((job) => {
        res.json(job);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const createJob = (req, res) => {
    const job = new Job({
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: req.body.postedAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,
    });

    job
    .save()
    .then((job) => {
        res.json(job);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const updateJob = (req, res) => {
    Job
    .findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                requirements: req.body.requirements,
                role: req.body.role,
            },
        },
        { new: true },
    )
    .then((job) => {
        res.json(job);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const deleteJob = (req, res) => {
    Job
    .deleteOne({ _id: req.params.jobID })
    .then(() => res.json({ message: "Job Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
    getJobs,
    getFilteredJobs,
    getJobById, 
    createJob, 
    updateJob, 
    deleteJob ,
};