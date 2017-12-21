This is a small bot which uses IMAP to connect to Gmail and clean the Trash folder repeatedly.

# Inspiration
I wanted to create a small bot to clean my `trash` folder. My first attempt was to build a shell script which do this for me. Even though i was able to do it on terminal but things were not working on a script file. Then after suggestion from someone of [SO](https://stackoverflow.com/questions/47900642/pipeline-openssl-commands?noredirect=1#comment82768701_47900642) I decided to drop that idea and look for someother language to achieve my goals.

# Description
This project uses [node-imap](https://github.com/mscdex/node-imap) to connect to Gmail using IMAP. Even though i've performed only delete task you can do a lot of other things also using the library.

# Structure of config file

     {
       "username": "",
       "password": ""
     }


# Setup and Key points

__Please keep following points in mind while using the project__

 - This project uses some of __ES6__ features, like [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) so please use node version which supports ES6 features.
 - In order to use it you'll have to enable [Allow less secure apps](https://support.google.com/accounts/answer/6010255?hl=en) in Gmail.
 - __This code is not production ready__. A lot of key production ready features like `error handling` and `security checks` are missing in this app so, please don't use it directly in your production code.


# License
[MIT](https://github.com/a1626/trasher/blob/master/LICENSE)
