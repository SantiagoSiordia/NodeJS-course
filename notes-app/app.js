const fs = require("fs")

fs.writeFileSync("notes.txt", "My name is Santiago.");

fs.appendFileSync("notes.txt", "\nAnd this is what I'm appending!")