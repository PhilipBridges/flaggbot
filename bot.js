const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json')
const fs = require('fs');
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
require('events').EventEmitter.prototype._maxListeners = 100;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
  autorun: true,
  token: "Mzg0NDgyODUwMDgwMjkyODc1.DPzd9A.sP3Gv6Fp7E_NCru9kxmXKBflnUw"
});
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
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
        fs.createReadStream('bob.mp3').pipe(stream, { end: false });
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
        fs.createReadStream('shame.mp3').pipe(stream, { end: false });
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
        fs.createReadStream('chad.wav').pipe(stream, { end: false });
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
        fs.createReadStream('break.mp3').pipe(stream, { end: false });
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
  if (message === "!kids") {
    bot.sendMessage({
      to: channelID,
      message: `Look at all these fucking kids.`
    })
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
      message: `commands are: !kids, !flagg, !piss, !loog, !ping, !chad, !slurp, !eelio, !bob, !gear (only works in jonezone), !meme, !memecount`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!ping") {
    bot.sendMessage({
      to: channelID,
      message: `Pong ching chong my name is Flagg and my racism is loud like a gong!`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!flagg") {
    bot.sendMessage({
      to: channelID,
      message: `John Flagg has nice tight boyhole.`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!slurp") {
    bot.sendMessage({
      to: channelID,
      message: `I am on a never ending quest to slurp every dude on the planet.`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!eelio") {
    bot.sendMessage({
      to: channelID,
      message: `I'm not really a fan of jews`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!piss") {
    bot.sendMessage({
      to: channelID,
      message: `HOOOOOOO PISS`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!obama") {
    bot.sendMessage({
      to: channelID,
      message: `Can you believe that Obama called Elizabeth Warren 'Pocahontas' at a ceremony with native americans?`
    })
  }
});
bot.on('message', function (user, userID, channelID, message, evt) {
  if (message === "!memes") {
    bot.sendMessage({
      to: channelID,
      message: `Can you believe that Obama called Elizabeth Warren 'Pocahontas' at a ceremony with native americans?`
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

