Discord = require('discord.js')
const client = new Discord.Client
const api = require('imageapi.js');

const command = require('./command');
const { APIMessage, DiscordAPIError } = require('discord.js');

const prefix = '.';

const Dlugip = 2


client.on("ready", () =>{
  console.log(`Zaktywowałem bota ${client.user.tag}!`)
 // console.log(client.user)
  client.user.setActivity("Coś tu będzie", {type: 'WATCHING'})
  //.then(console.log)
  //.catch(console.error); member.guild.channels.get('797500516879564802')setName('╔➤Bot jest: ON')
  var kanałboton = client.channels.cache.get('797500516879564802');

});


// Turn bot off (destroy), then turn it back on


client.on('guildMemberAdd', guildMember => {
  member.guild.channels.get('797500516879564802').send(`Witaj ${guildMember} `);
});

//                                                      TODO
//                1. dodać eval
//                2. Zabić Gieralta w mc


command(client, 'clear', (message) => {

    message.channel.bulkDelete(message.content.slice(Dlugip + 5),true).then(msg=>{
      const clear = new Discord.MessageEmbed()
      .setTitle("Clear")
      .setDescription(`Usunąłem ${msg.size} wiadomość`)
      .setColor('00ff22')
      console.log(`Usunąłem ${msg.size} wiadomość!`)
      message.channel.send(clear)
      setTimeout(function(){ 
        message.channel.bulkDelete(1,true)
       }, 2000);
    })


})

command(client, 'setoff', (message) => {
  client.user.setActivity(" ", {type: ' '})
  client.user.setStatus(3)
});




command(client, 'embed', (message) => {
  //strefa stałych
  const { member, channel, content, mentions, guild, id } = message
  const tag = `<@${member.id}>`
  let Graczrole = message.guild.roles.cache.find(role => role.id === "787337351541162024");
  let targetMember = guild.members.cache.get(id);
 //strefa embed
 var pierwszaSpacja = message.content.indexOf(" ",);
 var  drugaSpacja = message.content.indexOf(" ", pierwszaSpacja+1);
 var trzeciaSpacja = message.content.indexOf(" ", drugaSpacja+1);

 const EmbedBuilder = new Discord.MessageEmbed()
 .setTitle(message.content.slice(pierwszaSpacja, drugaSpacja))
 .setDescription(message.content.slice(trzeciaSpacja))
 .setColor(message.content.slice(drugaSpacja, trzeciaSpacja))

 //strefa if
 message.delete()
if(pierwszaSpacja > 0) {
  if(drugaSpacja > 0){
    if(trzeciaSpacja > 0){
      message.channel.send(EmbedBuilder)
    }else{
      message.channel.send("Podaj Opis")
      setTimeout(function(){ 
        message.channel.bulkDelete(1,true)
       }, 2000);
    }
  }else{
    message.channel.send("Podaj Kolor")
    setTimeout(function(){ 
      message.channel.bulkDelete(1,true)
     }, 2000);
  }
}else{
  message.channel.send("Podaj Tytuł")
  setTimeout(function(){ 
    message.channel.bulkDelete(1,true)
   }, 2000);
}
})

command(client, 'weryfikacja', (message) => {
  
  const { member, channel, content, mentions, guild, id } = message
  const tag = `<@${member.id}>`
  let Graczrole = message.guild.roles.cache.find(role => role.id === "798274169748979832");
  let targetMember = guild.members.cache.get(id);
  //console.log(targetMember);
  
  let object = Math.floor(Math.random(300, 9000) * 100000000000);
  let embedr = new Discord.MessageEmbed()
  .setTitle("Weryfikacja")
  .setDescription('Przepisz tą wiadomość "`' + object +'`" \nUważaj bo jak się pomylisz to odnowa ;)')
  .setColor("#00ff22")
  message.channel.send(embedr)
  message.delete()
  setTimeout(function(){ 
  message.channel.awaitMessages(m => m.author.id == message.author.id,
    {max: 1, time: 10000}).then(collected => {
            // only accept messages by the user who sent the command
            // accept only 1 message, and return the promise after 30000ms = 30s
  
            // first (and, in this case, only) message of the collection
             if(collected.first().content.toLowerCase() == object) {
              let embedp = new Discord.MessageEmbed()
              .setTitle("Weryfikacja")
              .setDescription("Zostałeś zweryfikowany. \nZa chwile wyświętlą ci się kanały")
              .setColor("#00ff22")
              message.channel.send(embedp)

              setTimeout(function(){ 
              member.roles.add(Graczrole)
              message.channel.bulkDelete(3,true)
             }, 2000);

            } else {
              let embedl = new Discord.MessageEmbed()
              .setTitle("Weryfikacja")
              .setDescription("Weryfikacja nie powiodła się \nSpróbuj od nowa komendą .weryfikacja")
              .setColor("#fc0303")
              message.channel.send(embedl)
              setTimeout(function(){ 
                message.channel.bulkDelete(100,true)
               }, 2000);
            }
 }, 10000);
})
});


command(client, 'avatar', (message) => {
      
        
  if(message.mentions.users.size){
    let member=message.mentions.users.first()
if(member){
    const av = new Discord.MessageEmbed().
    setImage(member.displayAvatarURL())
        .setColor('GREEN')
    .setTitle("Avatar")
    .setDescription("Avatar **"+ member.username +"**.")
    message.channel.send(av)
    
}
else{
    message.channel.send("Sora nie znalazłem tej osóbki")

}
}
})


client.on("message", async message =>{

  if(message.mentions.has(client.user)) {
    const mentioned = new Discord.MessageEmbed()
.setTitle(`Wykryłem Ping`)
.setDescription(`Prefix: **`+ prefix +`** \nAutor: **! Zombel AKA Nikt** \n Przydatne komendy pod:** `+prefix+`pomoc**`)
.setColor(10038562)
.setTimestamp()
    message.delete()
    message.member.send(mentioned)
  }
  //if(!message.content.startWith(prefix) || message.author.bot) return;
  //const args = message.content.slice(prefix.length).trim().split(' ');
  if(message.channel.id === '794235568857940008'){
  if(message.content.startsWith('s!zakup')){ 
  } else{
    message.delete()
  }
  }
});

command(client, 'tort', (message) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`
  message.channel.send({embed: {
    color: 12745742,
    author: {
    },
    title: ":cake:TORT:cake:  ",
    description: `:cake: :cake: :cake: :cake: `,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
    }
  }
});
});



command(client, 'placek', (message) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`
  message.channel.send({embed: {
    color: 12745742,
    author: {
    },
    title: ":pancakes: Placek:pancakes: ",
    description: `:pancakes: :pancakes: :pancakes: :pancakes: `,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
    }
  }
});
});

command(client, 'warn', (message) => {
  const { member, mentions } = message
  channel = client.channels.cache.get('783006441425993770');
  const tag = `<@${member.id}>`
 
  var warn = 1
  message.channel.send({embed: {
    color: 10038562,
    author: {
    },
    title: "Warn",
    description: `Kiedyś zrobie Update. \n Polecam Bota Lambda  `,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
    }
  }
});
});

command(client, 'status reset', (message) => {
  message.delete()
  const { member, mentions } = message
  const tag = `<@${member.id}>`
  const embed2 = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Zresetowałem status bota`)
  .setColor(10038562)
  .setTimestamp()

  const embed = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Nie możesz tego zmienić ${tag}`)
  .setColor(10038562)
  .setTimestamp()

  if(message.author.id === "658434554528530435") {
    client.user.setActivity("Był reset", {type: 'PLAYING'})
    message.channel.send(embed2);
  } else {
 {
    message.channel.send(embed)
  } 
}
});

command(client, 'status playing', (message) => {
  message.delete()
  const { member, mentions } = message
  const tag = `<@${member.id}>`
  const statuts = (message.content.slice(17))
  const embed2 = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Zmnieniłem status bota na **${statuts}**`)
  .setColor(10038562)
  .setTimestamp()

  const embed = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Nie możesz tego zmienić ${tag}`)
  .setColor(10038562)
  .setTimestamp()


  if(message.author.id === "658434554528530435") {
    client.user.setActivity((message.content.slice(17)), {type: 'PLAYING'}); 
    message.channel.send(embed2);
  } else {
    {
    message.channel.send(embed)
  }
}
});


command(client, 'status watching', (message) => {
  message.delete()
  const { member, mentions } = message
  const tag = `<@${member.id}>`
  const statuts = (message.content.slice(17))
  const embed2 = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Zmnieniłem status bota na **${statuts}**`)
  .setColor(10038562)
  .setTimestamp()

  const embed = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setDescription(`Nie możesz tego zmienić ${tag}`)
  .setColor(10038562)
  .setTimestamp()

  if(message.author.id === "658434554528530435") {
    client.user.setActivity((message.content.slice(17)), {type: 'WATCHING'});
    message.channel.send(embed2);
  } else {
  {
    message.channel.send(embed)
  } 
}
});

  command(client, 'info', (message) => {
    message.delete()
    channel = client.channels.cache.get('783006441425993770');
    const embed = new Discord.MessageEmbed()
    .setTitle(`Bot-Info`)
    .setDescription("Wysyłam informacje w wiadomości prywatnej")
    .setColor(10038562)
    .setTimestamp()
    message.channel.send(embed);
    message.member.send({embed: {
      color: 2067276,
      author: {
      },
      title: "INFO",
      description: "",
      fields: [{
          name: "Autor Bota",
          value: "! Zombel AKA Nikt"
        },
        {
          name: "Prefix",
          value: ""+prefix +""
        },
        {
          name: "Informacje Ogólne",
          value: "Nowy Bocik. \n**Lambda naj bot**."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
      }
    }
  });
  })

  command(client, 'saym',  (message) =>{ 
    message.delete()
    channel = client.channels.cache.get('783006441425993770');
    const embed = new Discord.MessageEmbed()
    .setDescription(message.content.slice(7))
    .setColor("GREEN")
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed);
    })


  command(client, 'wazne',  (message) =>{ 
    message.delete()
    channel = client.channels.cache.get('781114242904358932');
    const embed = new Discord.MessageEmbed()
    .setTitle(`Ogłoszenie`)
    .setDescription(message.content.slice(7))
    .setColor(10038562)
    .setTimestamp()
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed);
    })
      //});






     
  
  command(client, 'pomoc', (message) => {
    channel = client.channels.cache.get('783006441425993770');
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pomoc`)
    .setDescription("Wysyłam pomoc w wiadomości prywatnej")
    .setColor('GREEN')
    .setTimestamp()
    message.channel.send(embed);
    setTimeout(function(){ 
      message.delete()
   }, 5000);

    message.member.send({embed: {
      color: "GREEN",
      author: {
      },
      title: "HELP",
      description: "",
      fields: [{
        name: "Prefix",
        value: "Mój prefix na tym serwerze to: **"+ prefix + "**"
      },
        {
          name: "Ban",
          value: "Banuje Gracza. Użycie: **"+ prefix +"ban @user**"
        },
        {
          name: "Kick",
          value: " Wyrzuca Gracza. Użycie: **"+ prefix +"kick @user**"
        },
        {
          name: "Mute",
          value: "Wycisza Gracza. Użycie: **"+ prefix +"mute @user czas tryb**"
        },
        {
          name: "Wazne",
          value: "Piszesz jako bot z nagłówkiem Ogłoszenie. Użycie: **"+ prefix +"wazne text**"
        },
        {
          name: "Saym",
          value: "Piszesz jako bot tylko że w embed. Użycie: **"+ prefix +"saym text**"
        },
        {
          name: "Say",
          value: "Piszesz jako bot. Użycie: **"+ prefix +"say text**"
        },
        {
          name: "Tort",
          value: "Daje Tort. Użycie: **"+ prefix +"tort**"
        },
        {
          name: "Placek",
          value: "Daje Placka. Użycie: **"+ prefix +"placek**"
        },
        {
          name: "Status",
          value: "Zmienia status bota. Użycie: **"+ prefix +"status watching/playing text** lub **"+ prefix +"status reset**"
        },
        {
          name: "Avatar",
          value: "Wyświetla avatar użytkownika. Użycie: **"+ prefix +"avatar @użytkownik**"
        },
        {
          name: "Clear",
          value: "Usuwa wiadomość. Użycie: **"+ prefix +"clear ilosc**"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
      }
    }
  });
  })

  command(client, 'ban', (message) => {
    channel = client.channels.cache.get('783006441425993770');
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "BAN",
          description: `**${targetMember}** został zbanowany przez **${tag}**`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
      } else {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "BAN",
          description: `Poprawne użycie: _ban @user_ ${tag}`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
      }
    } else {
      message.channel.send({embed: {
        color: 10038562,
        author: {
        },
        title: "BAN",
        description: `Nie masz permisji ${tag}`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
        }
      }
    });
    }
  })


  command(client, 'kick', (message) => {
    channel = client.channels.cache.get('783006441425993770');
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "KICK",
          description: `**${targetMember}** został wyrzucony przez **${tag}**`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
      } else {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "KICK",
          description: `Poprawne użycie: _kick @user_ ${tag} `,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
      }
    } else {
      message.channel.send({embed: {
        color: 10038562,
        author: {
        },
        title: "KICK",
        description: `Nie masz permisji ${tag}`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
        }
      }
    });
    }
  })
  command(client, 'say', (message) => {
      message.delete()
      if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(5))
    })
    const onJoin = async (member) => {
      const { id, guild } = member
  
      const redisClient = await redis()
      try {
        redisClient.get(`${redisKeyPrefix}${id}-${guild.id}`, (err, result) => {
          if (err) {
            console.error('Redis GET error:', err)
          } else if (result) {
            giveRole(member)
          } else {
            console.log('The user is not muted')
          }
        })
      } finally {
        redisClient.quit()
      }
    }
  
    command(client, 'simjoin', (message) => {
      onJoin(message.member)
    })
  
    client.on('guildMemberAdd', (member) => {
      onJoin(member)
    })
  
    command(client, 'mute', async (message) => {
     
    // !mute @ duration duration_type
    channel = client.channels.cache.get('783006441425993770');
      
      const syntax = '**mute <@gracz> <czas> <m, h, d, or life>**'

      const { member, channel, content, mentions, guild } = message
      const tag = `<@${member.id}>`
  
      if (!member.hasPermission('ADMINISTRATOR')) {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "MUTE",
          description: `Nie masz permisji ${tag}`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
        return
      }
  
      const split = content.trim().split(' ')
  
      if (split.length !== 4) {
        console.log(split);
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "MUTE",
          description: `${tag} Coś ci nie idzie: ` + syntax,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
        return
      }
  
      const duration = split[2]
      const durationType = split[3]
  
      if (isNaN(duration)) {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "MUTE",
          description: `Nie masz permisji ${tag}`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
        return
      }
  
      const durations = {
        m: 60,
        h: 60 * 60,
        d: 60 * 60 * 24,
        life: -1,
      }
  
      if (!durations[durationType]) {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "MUTE",
          description: `Na jaki czasz go wyciszyć ${tag}`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
        return
      }
  
      const seconds = duration * durations[durationType]
  
      const target = mentions.users.first()
  
      if (!target) {
        message.channel.send({embed: {
          color: 10038562,
          author: {
          },
          title: "MUTE",
          description: `${tag} Poprawne użycie: _mute @user <czas> <tryb>_`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
          }
        }
      });
        return
      }
  
      const { id } = target
  
      console.log('ID:', id);
      //console.log(message.guild.roles);
      let muteRole = message.guild.roles.cache.find(role => role.name === "mute");
      let targetMember = guild.members.cache.get(id);
      //console.log(targetMember);
      targetMember.roles.add(muteRole);  
    })


client.login("TOKEN TWOJEGO BOTA / YOUR BOT TOKEN")