const IMAP = require('imap');
let that = this;
let imap = new IMAP({
  user: '',
  password: '',
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});

imap.once('ready', expunge);

function expunge() {
  imap.openBox('[Gmail]/Trash', false, () => {
    imap.addFlags('1:*',['Deleted'], () => {
      imap.expunge();
      console.log(new Date(Date.now()),'expunged');
      setTimeout(expunge.bind(that), 30000);
    });
  });
};


imap.connect();
