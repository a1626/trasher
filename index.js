use strict;

const IMAP = require('imap');
const fs = require('fs');
let username, password;

({username, password} = JSON.parse(fs.readFileSync('./config.json', 'utf-8')));

let imap = new IMAP({
  user: username,
  password: password,
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});

imap.once('ready', expunge);

function expunge() {
  imap.openBox('[Gmail]/Trash', false, () => {
    imap.addFlags('1:*',['Deleted'], () => {
      imap.expunge();
      setTimeout(expunge, 30000);
    });
  });
};


imap.connect();
