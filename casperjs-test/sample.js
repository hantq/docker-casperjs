var casper = require('casper').create();

casper.start('https://console.ng.bluemix.net/', function() {
    this.echo(this.getTitle());
});

casper.run();