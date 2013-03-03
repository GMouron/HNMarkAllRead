// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: ["http://news.ycombinator.com/*","https://news.ycombinator.com/*"],
    contentScriptFile: [self.data.url("jquery.min.js"),
        self.data.url("script.js")],
    contentStyleFile: self.data.url("styles.css"),
    contentStyle: ".mark_all_read { background: url(" + self.data.url("tick.png") + ") transparent no-repeat; }"
});
