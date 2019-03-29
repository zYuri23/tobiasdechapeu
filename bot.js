const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json"); 


client.on("ready", () => {
const activity = [
      {name: "sugestoes ruins", type: 2, url: "https://www.google.com"},
      {name: "nao, estou em desenvolvimento", type: 0, url: "https://www.google.com"},
      {name: "tutorial de perserguir carteiro", type: 3, url: "https://www.google.com"},
      {name: "o meu amor por vcs", type: 1, url: "https://www.twitch.tv/..."},
      {name:  "cachorros fofuxos ", type: 3, url: "https://www.google.com"},
      {name: "Nada, so assistindo algo por ai", type: 1, url: "https://www.twitch.tv"},
      {name: `${client.guilds.size} servidores ,to famoso mâe`, type: 2, url: "https://www.google.com"},
      {name: "-thelp para ajuda", type: 0, url: "https://www.google.com"},
      {name: "Fortnite", type: 0, url: "https://www.google.com"},
      {name: "Battlefield 4", type: 0, url: "https://www.google.com"},
      {name: "Nâo ajudando com o -thelp", type: 0, url: "https://www.google.com"},
      
  ];

  
// Crie Suas Mensagens para o Status de acordo com o tipo de mensagem que você quer, aí estão exemplos de uma de cada, você pode fzr quantos quiser!
  
  function cs() {
      const random = activity[Math.floor(Math.random() * activity.length)];
      client.user.setPresence({game: random});
          console.log(random)
  }
  
  setInterval(cs, 10000)

});

client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("message", async message => {
// comando mençao bot
if(message.content.startsWith(`<@${client.user.id}>`)) {
      const embed = new Discord.RichEmbed()

      .setTitle(`Olá ${message.author.tag} está perdido?`)
      .setColor(`0x0000FF`)
      .setDescription('Opa, se você se encontra com dúvidas doque eu posso fazer diriga-se rápidamente a um chat de comandos e digite: ' + '`-thelp`')
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Tobias de Chapeu © Todos os direitos reservados.`, message.author.avatarURL)

      message.channel.send(embed);
  }

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  // comando ping
  if(comando === "ping") {
    const m = await message.channel.send("Pingay?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  //comando falar
  if(comando === "say") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
//comando apagar
  if(comando === "dell") { 

    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
      return message.reply(`${message.author} Mensagens apagadas com suçesso`)
  }
  // comando chutar 
  if(comando === "kick") {
//adicione o nome dos cargos que vc quer que use esse comando!
if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Desculpa, mas voce nâo tem permissâo pra isso");

       let member = message.mentions.members.first();
   if(!member)
      return message.reply("Marque um membro valido desse servidor");
   if(!member.kickable) 
      return message.reply("Eu nâo consegui banir ele eu tenho permissâo de banir?");

      let reason = args.slice(1).join(' ');
   if(!reason) reason = "Sem motivo";

      await member.ban(reason)
       .catch(error => message.reply(`Desculpe ${message.author} Nâo consegui banir aquele membro por isso : ${error}`));
message.reply(`${member.user.tag} foi banido por ${message.author.tag} por causa de : ${reason}`);
}

   if(comando === "ban") {
     if (!message.member.hasPermission("ADMINISTRATOR")) 
        return message.reply("Desculpa, mas voce nâo tem permissâo pra isso");
         let member = message.mentions.members.first();
      if(!member)
        return message.reply("Marque um membro valido desse servidor");
      if(!member.bannable) 
        return message.reply("Eu nâo consegui banir ele eu tenho permissâo de banir?");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Sem motivo";
      
      await member.ban(reason)
        .catch(error => message.reply(`Desculpe ${message.author} Nâo consegui banir aquele membro por isso : ${error}`));
      message.reply(`${member.user.tag} foi banido por ${message.author.tag} por causa de : ${reason}`);
    }
  // comando help
  if (comando === "help") {
  const embed = {
    "title": "Aqui esta o meu servidor oficial e a minha comand list",
    "description": "o meu servidor oficial e o https://discord.gg/TNNHnbC o link para me adicionar ao seu servidor e https://discordapp.com/api/oauth2/authorize?client_id=539853186572222464&permissions=8&scope=bot ```\n Sim so 6 comandos, eu estou em beta né!```",
    "url": "https://discord.gg/TNNHnbC ",
    "color": 0x0000FF,
    "timestamp": "2019-03-04T11:51:01.625Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/539853186572222464/013ab8a9d61a878eb8a20d12ead27ace.png?size=2048",
      "text": "Tobias de Chapeu ©"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/avatars/539853186572222464/013ab8a9d61a878eb8a20d12ead27ace.png?size=2048"
    },
    "image": {
      "url": "https://cdn.discordapp.com/attachments/538711394137407488/551476717248708638/tobias_apaixonado.png"
    },
    "author": {
      "name": `${message.author.tag}`,
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/538711394137407488/551477293680295956/tobias_popcorn.png"
    },
    "fields": [
      {
        "name": "😉",
        "value": "Ping (para saber a minha disposiçao)"
      },
      {
        "name": "😱",
        "value": "Dell (apago as mensagens)!"
      },
      {
        "name": "😜",
        "value": "Say (serve para eu falar algo)"
      },
      {
        "name": "😜",
        "value": "Moeda (é como um cara ou coroa)"
      },
      {
        "name": "😉",
        "value": "Quando você faz a seguinte pergunta ``qual e o meu avatar?`` o Tobias irá responder"
      },
      {
        "name": "😜",
        "value": "Quando você falar ``grr`` no chat  o Tobias irá mandar a foto de um dog brabor"
      },
      {
        "name": "🔜",
        "value": "Kick (chuta as pessoas)",
        "inline": true
      },
      {
        "name": "🔜",
        "value": "Ban (bane as pessoas)",
        "inline": true
      }
    ]
  };
  message.author.send("Entâo você quêr uma ajudinha né?😃", { embed });
  message.channel.send("enviei no seu DM os meus comandos 😃")
    }
  })

  client.on('message', message => {
     if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
              message.delete();
              message.reply("❌ **Você não pode divulgar aqui! **");
          }
        }
      });
      client.on('message', message => {
        
        if (message.content === 'grr') {
          const attachment = new Discord.Attachment('1.jpg')
            message.channel.send(`${message.author}`, attachment);
        }
    });
    client.on('message', message => {
      // If the message is "qual e o meu avatar"
      if (message.content === 'qual e o meu avatar?') {
        // Send the user's avatar URL
        message.reply(message.author.avatarURL);
      }
    });
    client.on('message', message => {
        
      if (message.content === 'triste') {
          const attachment = new Discord.Attachment('9.gif');
          message.channel.send(`${message.author} até xorei aqui`, attachment);
      }
    })    
    client.on('message', message => {
        
      if (message.content === 'que?') {
          const attachment = new Discord.Attachment('10.gif');
          message.channel.send(`${message.author} tambem nâo entendi foi nada`, attachment);
      }
    })
    client.on('message', message => {
        
      if (message.content === 'vou tomar banho') {
          const attachment = new Attachment('11.jpg');
          message.channel.send(`${message.author} quero tambem!!!`, attachment);
          
      }
    })
client.login(config.token);