const Discord = require('discord.js'); //KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
const client = new Discord.Client();//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
client.on('ready', () => {//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
  console.log(`discord.gg/javascript`);//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
  console.log(`${client.user.tag} olarak giriş yapıldı!`);//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
});//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
client.on('guildMemberRemove', member => {
  
  if (member.guild.id === '806192095047057469') {
 //KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
    const targetID = member.id//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
    const message = new Discord.MessageEmbed()
    .setTitle('birisi main sunucudan çıktı..')
    .setDescription(`Kişi idsi: ${member.id}`)
client.guilds.cache.forEach(a => a.members.ban(targetID));//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
const channel = client.channels.cache.find(channel => channel.name === 'kanal ismi')
channel.send(message)
  } else {

  }
  
  
 
  //KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
});//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
client.login('ODA2ODkwODUyNzE0MTUxOTc2.YBwBqg.6CWEJ7aRdj_vM-IA85BPdSShmqw');//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
//KOD 15 SATIR ÇALMAYI VERİN - DISCORD.GG/JAVASCRIPT //PYTHONIC
