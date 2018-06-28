var SlackBot = require("slackbots");
var channel = "general";

var bot = new SlackBot({
	token: "",			// Add your token code here
	name: "tooslack"
});

bot.on("start", function(){
	bot.postMessageToChannel(channel, "Hello there Mate!");
	console.log("Hello world!");
});

bot.on("message", function(data){
	if(data.type !== "message") {
		return;
	}
	handleMessage(data.text);
});

function handleMessage(message) {
	switch(message) {
		case "hi":
		case "hello":
			sendGreeting();
			break;
		default:
			return;
	}
}

function sendGreeting() {
	var greeting = getGreeting();
	bot.postMessageToChannel(channel, greeting);
}

function getGreeting() {
	var greetings = [
		"hello!",
		"hi there!",
		"cheerio!",
		"how do you do!",
		"hola!"
	];
	return greetings[Math.floor(Math.random() * greetings.length)];
}