# automailer
Inbox by Google doesn't yet have a refresh icon like Gmail. As a work around, this script tricks the backend into fetching from POP accounts more frequently.

## Setup
* `sudo apt-get install ssmtp`
* `sudo nano /etc/ssmtp/ssmtp.conf`
* Paste in contents of `example-ssmtp.conf` (ctrl + shift + v)
* Run script with `node automailer.js` (or `forever start automailer.js` - note: this requires forever to be installed)
