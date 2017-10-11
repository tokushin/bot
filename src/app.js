let restify = require('restify');
let builder = require('botbuilder');

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8254, function() {
    console.log('%s listening to %s', server.name, server.url);
});

let connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
let bot = new builder.UniversalBot(connector);
server.port('/api/messages', connector.listen());

bot.dialog('/', function(session) {
    session.send("こんばんは。今日も定時で帰りたいですね。");
});
