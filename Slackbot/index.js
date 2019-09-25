const SlackBot = require("slackbots");
const axios = require("axios");
const dotenv = require("dotenv");
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(__dirname + '/dist/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));


// app.listen(process.env.PORT || 8080);

dotenv.config();

const bot = new SlackBot({
  
  token: `${process.env.bot_token}`,
  name: "HotDeskBot"
});

//Gets status from slack

function reportDesks() {
  officeCount =0;
  wfhCount =0;
  seatCount =16;
  var url =`${process.env.url}`;
  axios
    .get(url)
    .then(function(res) {
      x = (res.data.members).length
      for(var i=0; i <x; i++){
        if(res.data.members[i].profile.status_text == "office"){
          officeCount+=1;
          seatCount -=1;
        }
        else if (res.data.members[i].profile.status_text =="wfh"){
          wfhCount+=1;
          
        }
        // return "User: "+ response.data.members[i].name;       
      }
    bot.postMessageToChannel("general", "Number of people in office: "+ officeCount.toString());
    bot.postMessageToChannel("general", "Number of people wfh: "+ wfhCount.toString());
    bot.postMessageToChannel("general", "There are around: "+ seatCount.toString()+" seats free in the office today. ");
    })
    .catch(function(error) {
      console.log(error);
    });
 
}

bot.on("start", () => {
  console.log("starting bot");
  const params = {
    icon_emoji: ":robot_face:"
  };
  console.log();
});

// Message Handler
bot.on("message", data => {
  if (data.type !== "message") {
    return;
  }
  handleMessage(data.text);
});

// Response Handler
function handleMessage(message) {
  if (message.includes("hello")) {
    console.log("run sayHi");
    sayHi();
  } else if (message.includes("help")) {
    console.log("run help");
    sayHelp();
  } else if (message.includes("status")) {
    reportDesks()
  }
 else if (message.includes("I'm good")) {
    sayGreat()
  }
}

bot.on("error", err => {
  console.log(err);
});

function sayHi() {
  bot.postMessageToChannel("general", "Hello, there User");
  bot.postMessageToChannel("general", "How are you?");
}

function sayHelp() {
  bot.postMessageToChannel("general", "How can I help you?");
}

function sayGreat() {
    bot.postMessageToChannel("general", "Thats great! :)");
  }

