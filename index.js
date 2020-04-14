const Discord = require('discord.js');
const Client = new Discord.Client();
let pass = 'Njk5MzkzNzg4MDEwOTU0ODU0.XpTwaA.NO5N4TTpsUNoQQO9juc4faszdDY';

let y;
let Doge = '𝕮𝖔𝖉𝖊_𝕯𝖔𝖌𝖌𝖔'

Client.on('ready', () =>{
    console.log('Signed in');
})
Client.on('message', (msg) =>{
    

    
    let x = msg.content.split(' ');
    if (msg.content == '!meme'){
        msg.channel.send('https://www.google.com/search?q=meme&rlz=1C1SQJL_enUS892US892&sxsrf=ALeKk00FKL77Hmh4YNwkivW8rtDCw3m9Cg:1586823981382&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfyez90-boAhUMT6wKHeP-DqgQ_AUoAXoECBYQAw&biw=1110&bih=959#imgrc=h5U6MHFfVBCZ6M');
    }
    if (msg.content.startsWith('!kick')){
        
        
        if (!msg.guild.roles.fetch("HR")) {
            return msg.channel.send('Not Adminstrator');
            
            
        
        }
        let member = msg.mentions.members.first();
        if(member){
            member.kick('You were kicked').then(() => {
                msg.channel.send(`sucsessfully kicked ${member}`);
            })
        }
    }
    if (msg.content.startsWith('!ban')){
        
        
        if (!msg.guild.roles.fetch("HR")) {
            return msg.channel.send('Not Adminstrator');
            
            
        
        }
        
        
        
        let member = msg.mentions.members.first();
        if(member){
            member.ban('You were banned').then(() => {
                msg.channel.send(`sucsessfully banned ${member}`);
            })
            
            
        }
    }
    if (msg.content == 'sync'){
        msg.channel.send(msg.author.username);
    }
    
    
    
})
Client.login(pass);