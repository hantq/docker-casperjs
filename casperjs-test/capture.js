var casper = require('casper').create();

casper.start('https://console.ng.bluemix.net/', function() {
    this.capture('/home/casperjs-test/bluemix.png', {
        top: 100,
        left: 100,
        width: 500,
        height: 400
    });
});

casper.run();