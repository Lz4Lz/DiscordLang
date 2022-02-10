var express = require("express");
//You need discord.js@11 otherwise this wont work, just a reMinDer
const Discord = require('discord.js');
//Google translate without an API key by vitalets? 
const translate = require('@vitalets/google-translate-api');
const fs = require("fs");
const bodyParser = require("body-parser");

const settings = '../config.json';
const file = require(settings);



var router = express.Router();

const disc = function (token) {

    const client = new Discord.Client({disableEveryone: true});

    client.on("ready", async () => {
        //if ur on Windows this is going to look pretty weird for u ig, but basically changes color to green
        console.log("\033[38;2;0;128;0m");
        console.log(`Logged in as ${client.user.username}`);
       
    })

    client.on('message', msg => {
        if (msg.author.id != file.userid) { return; }

        if(msg.content) {
            translate(msg.content, {to: file.language}).then(res => {
                msg.edit(res.text);
            }).catch(err => {
                console.log(err);
            })

        }
    })

    client.login(token)

}

router.get("/", function(req, res) {
    res.render("html/index");
});

router.post("/", function(req, res) {

    file.token = req.body.token;
    file.userid = req.body.userid;
    file.language = req.body.lang;

    fs.writeFileSync(settings, JSON.stringify(file), function writeError(err) {
        if (err) return console.log(err);
    });

    if(!file.userid) return console.log("So u bypassed client side filter? why tho lol");

    var token = file.token;
    
    var success = "nice check console now if u got any errors";

    disc(token);

    res.render('html/index', {
        success: success
    });

});

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("\033[38;2;139;0;0mError, Wrong Credentials/Token?");

});

module.exports = router;