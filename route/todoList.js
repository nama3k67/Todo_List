const express = require('express'); 
const router = express.Router(); 
const Job = require('../models/job'); 

//getAll
router.get('/', async (req, res) => {
    try {
        const toDoList = await Job.find();
        res.json(toDoList); 
    } catch (err) {
        res.json({message : err}); 
    }
}); 

//getById
router.get('/:jobId', async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        res.json(job);
    } catch (err) {
        res.json({message : err}); 
    }
});

//create 
router.post('/', async (req, res) => {
    const job = new Job({
        title : req.body.title, 
        content : req.body.content, 
        date : req.body.date, 
        completed : req.body.completed
    }); 

    try {
        const savedJob = await job.save(); 
        res.json(savedJob);
    } catch (err) {
        res.json({message : err}); 
    }
}); 

//delete 
router.delete('/:jobId', async (req, res) => {
    try {
        const removedJob = await Job.remove({ _id: req.params.jobId }); 
        res.json(removedJob);
    } catch (err) {
        res.json({message : err}); 
    }
}); 

//update
router.patch('/:jobId', async (req, res) => {
    try {
        const updatedJob = await Job.updateOne(
            { _id: req.params.jobId}, 
            { $set: { title: req.body.title, 
                    content: req.body.content, 
                    date: req.body.date,
                    completed: req.body.completed}}
        ); 
        res.json(updatedJob);
    } catch (err) {
        res.json({message : err}); 
    }
})

module.exports = router; 