// const fs = require("fs")

// const getNotes = function(){
//     return "Your notes..."
// }

// const addNote = function(title, body){
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function(note){
//         return note.title === title
//     })

//     if (duplicateNotes.lenght === 0){
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log("new note added!")
//     }else{
//         console.log("note title taken!")
//     }
    
// }


const fs = require('fs')
const chalk = require('chalk')



const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find ((note) => note.title === title)



    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteFound = notes.find((note)=> note.title === title)

    if (!noteFound) {
        console.log(chalk.red("nada na manga!"))
    }else{
        console.log(chalk.inverse(noteFound.title)) 
        console.log(chalk.red(noteFound.body))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter((note)=>note.title!==title)
    // const notestoKeep = notes.filter(function(note){
    //     return note.title!==title
    // })
    if(notes.length===notestoKeep.length){
        console.log(chalk.red.inverse("no note removed!"))

    }else{
        
        console.log(chalk.green.inverse("note removed!"))
    }
    
    saveNotes(notestoKeep)
}   


const listNotes = () => {
    const notes = loadNotes()
    console.log ("your notes:")
    notes.forEach((note) => {
        console.log (note.title)

    })     
}


const saveNotes = (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
    
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 