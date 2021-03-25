
const chalk = require ("chalk")
const yargs = require ("yargs")
const notes = require ("./notes.js")


yargs.command({
    command: "add",
    describe: "add a new Note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type:"string"
        },
        body:{    
            describe:"body of the note",
            demandOption: true,
            type: "string"
        },
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "remove a note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type:"string"
        },
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "lists all notes",
    handler() {
        notes.listNotes()
    }
})


yargs.command({
    command: "read",
    describe: "reads a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type:"string"
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()