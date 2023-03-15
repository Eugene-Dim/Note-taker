const router = require ('express').Router()
// const fs = require ('fs')
// const util = require('util')
// const readFromFile = util.promisify(fs.readFile)
const notesStore = require('../util');



router.get('/notes', (req, res) => {
    notesStore
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
  
  router.post('/notes', (req, res) => {
    notesStore
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  
 
  router.delete('/notes/:id', (req, res) => {
    notesStore
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });


// router.get('/api' , (req, res) => {
//     const getNotes = readFromFile('./db/db.json', 'utf8')
//     // fs.readFile('../db/db.json', 'utf8', (err, data)=> {
//     //     console.log(JSON.parse(data))
//     //     // res.json(data)
//     // })
//     // readFromFile('../db/db.json', 'utf8').then((error, data)=> {
//     //     console.log(error)
//     // })
//    getNotes().then((data)=> {
//     console.log(data)
//     })
// })

module.exports = router