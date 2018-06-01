const router = require('express').Router();
const mongojs = require('mongojs');
//const db = mongojs('acme-db', ['machines']);
var db = mongojs('mongodb://jospico:pipo@ds229690.mlab.com:29690/acme-db', ['machines']);

//Get All The Machines
router.get('/tasks', (req, res, next) => {
    db.machines.find((err, machines) =>{
        if(err) return next(err);
        res.json(machines);
    });
});

//Get One Machine
router.get('/tasks/:id', (req, res, next) => {
    db.machines.findOne({_id: mongojs.ObjectId (req.params.id)}, (err, machine) =>{
        if(err) return next(err);
        res.json(machine);
    });
});

//Add New Machine
router.post('/tasks', (req, res, next) => {
    const machine = req.body;
    if(!machine.model || !(machine.stat + '')){
        res.status(400).json({
            error: 'Datos Incorrectos'
    });
} else {
        db.machines.save(machine, (err, machine) =>{
           if(err) return next(err);
           res.json(machine);
        });
    }
});

//Delete Machine
router.delete('/tasks/:id', (req, res, next) => {
    db.machines.remove({_id: mongojs.ObjectId (req.params.id)}, (err, rsl) => {
        if(err) return next(err);
        res.json(rsl);
    });
});

//Update Machine
router.put('/tasks/:id', (req, res, next) => {
    const task = req.body;
    const updMachine = {};

    if(task.stat){
        updMachine.stat = task.stat;
    }

    if(task.model){
        updMachine.model = task.model;
    }

    if(!updMachine){
        res.status(400).json({
            error:'Petición Inválida'
        });
    } else {
        db.machines.update({_id: mongojs.ObjectId(req.params.id)}, updMachine, (err, task) => {
            if(err) return next(err);
            res.json(task);
        });
    }
});

module.exports = router;