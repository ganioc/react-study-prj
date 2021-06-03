// import { create, casper }from "casperjs"
// casper.start('http://casperjs.org/');

// casper.then(function() {
//     this.echo('First Page: ' + this.getTitle());
// });

var casper = require("casper").create();

casper.start('https://www.baidu.com/', function(){
    this.echo(this.getTitle())
})
casper.run()
