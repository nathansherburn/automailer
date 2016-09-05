// Automatically send emails to trick Gmail's POP fetch into more regular checking.

const exec = require("child_process").exec
const wait = 2*60*1000 // 2 min

function sendEmails() {
  "use strict";
  let cmd = `
    mail -s "Stil Alive" nrshe1@student.monash.edu < "message.txt" &&
    mail -s "Stil Alive" nathan.sherburn@monash.edu < "message.txt"
  `
  exec(cmd, (err, stdout, stderr) => console.log(err, stdout, stderr))
}

;(function loop() {
  "use strict";
  let rand = Math.round(Math.random() * 4*60*1000) + wait // 0 to 4 min + 2 min
  setTimeout(function() {
    sendEmails()
    loop()
  }, rand)
}())
