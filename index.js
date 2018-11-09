const Eris = require("eris");

// botのトークンID
var bot = new Eris("BOT_TOKEN");

bot.on("ready", () => {
  // bot が準備できたら呼び出されるイベントです。
  console.log("Ready!");
});

bot.on("voiceChannelJoin", (member, newChannel) => {
  // 入室処理
  let ch = newChannel.guild.defaultChannel;
  console.log("%s が チャンネル %s に入室しました。", member.username, newChannel.name);
  bot.createMessage('482095907383279646', member.username + "が チャンネル[" + newChannel.name + "] に入室しました。");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
  // 退室処理
  let ch = oldChannel.guild.defaultChannel;
  console.log("%s が チャンネル %s を退室しました。", member.username, oldChannel.name);
  bot.createMessage('482095907383279646', member.username + "が チャンネル[" + oldChannel.name + "] を退室しました。");
});

// Discord に接続します。
bot.connect();
