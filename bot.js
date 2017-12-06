const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json')
const fs = require('fs');
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
require('events').EventEmitter.prototype._maxListeners = 100;

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Bot start
var bot = new Discord.Client({
  autorun: true,
  token: auth.token
});
bot.on('ready', function (evt) {
  console.log(`Connected as ${bot.username} - ${bot.id}`)
});
// User Triggered Messages
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!gear") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('metalgear.wav').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!chill") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/glacius.mp3').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!stop") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/stop.mp3').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!bob") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/bob.mp3').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!loog") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/shame.mp3').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!chad") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/chad.wav').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!break") {
    let voiceChannelID = "379446728283389953"
    bot.joinVoiceChannel(voiceChannelID, function (error, events) {
      //Check to see if any errors happen while joining.
      if (error) return console.error(error);
      //Then get the audio context
      bot.getAudioContext(voiceChannelID, function (error, stream) {
        //Once again, check to see if any errors exist
        if (error) return console.error(error);
        //Create a stream to your file and pipe it to the stream
        //Without {end: false}, it would close up the stream, so make sure to include that.
        fs.createReadStream('audio/break.mp3').pipe(stream, { end: false });
        //The stream fires `done` when it's got nothing else to send to Discord.
        stream.on('done', function () {
          bot.leaveVoiceChannel(voiceChannelID);
        });
      });
    });
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!meme") {
    if (!points.points || null) points = {
      points: 0
    }
    points.points++;

    fs.writeFile("./points.json", JSON.stringify(points), (err) => {
      if (err) console.error(err)
    });
  }
});

bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!memecount") {
    bot.sendMessage({
      to: channelID,
      message: `There are ${points.points} memes.`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!help") {
    bot.sendMessage({
      to: channelID,
      message: `commands are: !chill, !stop !loog, !chad, !bob, !gear (only works in jonezone), !meme, !memecount`
    })
  }
});

// User status triggers
bot.on('presence', function (user, userID, status, game, event) {
  if (user === 'falg') {
    if (game !== null) {
      bot.sendMessage({
        to: '119259349875949569',
        message: `John Flagg is playing ${game.name} (flaggspy)`
      })
    } else {
      bot.sendMessage({
        to: '119259349875949569',
        message: `Flagg is ${status} (flaggspy)`
      });
    }
  }
});

