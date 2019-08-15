const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`由 ${client.user.tag} 登入!`);
  client.user.setActivity('歡迎使用 make by 青楓OuO#5224', { type: 'PLAYING' })
  .then(presence => console.log(`目前遊玩 ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.content === '!about') {
	  msg.reply('你好,我是咖啡廳機器人目前指令有:!drink !sweet !meal !sleep !about !sea 還有兩個 ||隱藏指令OuO|| made by @青楓OuO#5224 ');
	msg.delete (10000);
  }
});

client.on('message', msg => {
  if (msg.content === '!sea') {
    msg.reply(' 【一層海港城】 /warp OneLayer121 目前城內設有【礦車式豬人經驗塔】以及【二分流黑橡木伐木場】等公共設施供玩家們使用。                       【公設使用規定】１.經驗塔若使用完畢，敬請下車後再離開。切勿直接下線導致礦車遺失。若違反規定，經查獲後將拉至黑名單。２.下車後請勿在經驗塔內逗留。此舉將會影響到下位使用者的權益。若違反規定，經查獲後將會請離領地。３.使用伐木場時，請將樹木的原木部分砍伐乾淨。若違反規定使樹木無法重生，經查獲將拉至黑名單。==================================以上幾點規定，懇請各位配合，感謝！ :cake:');
  msg.delete (10000);
  }
});

client.on('message', msg => {
	if (msg.content === '!invites') {
		msg.channel.send('本群邀請連結:https://discord.gg/gzYRc4u')
		console.log('本群邀請連結已生成');
		
	}
});

client.on('message', msg => {
	if (msg.content === '!sleep') {
		msg.reply('要離開咖啡廳了! 歡迎下次光臨OuO')
		
	}
});

client.on('message', msg => {
	if (msg.content === '!botinvite') {
		msg.channel.send('機器人邀請連結(請勿作為營利手段):https://discordapp.com/oauth2/authorize?client_id=8&scope=bot')
		console.log('bot invite 已產生');
		
	}
});


client.on('message' , function (message){
    if (message.content == '!drink') 
    {
        var roll =(Math.floor(Math.random()*17)+1);
        if (roll == 1)
        {
            message.channel.send('你的飲料來了:beer:');
        }
		
		if (roll == 2)
        {
            message.channel.send('你的飲料來了 :coffee:');
        }
		
		if (roll == 3)
        {
            message.channel.send('你的飲料來了 OuO :hatched_chick: 啊拿錯了');
        }
		
		if (roll == 4)
        {
            message.channel.send('你的飲料來了:tea: 一層喜歡的:hearts:');
        }
		
		if (roll == 5)
        {
           message.channel.send('你的飲料來了:champagne_glass: ');
        }
		
		if (roll == 6)
        {
            message.channel.send('你的飲料來了:tumbler_glass: ');
        }
		
		if (roll == 7)
        {
            message.channel.send('你的飲料來了:cocktail:');
        }
		
       		if (roll == 8)
        {
            message.channel.send('哦 收錢 一共870比特幣:moneybag:');
        }
		
       		if (roll == 9)
        {
            message.channel.send('飲料沒了:pray:');
        }
		
       		if (roll == 10)
        {
            message.channel.send('你要外帶還是內用呢');
        }
		
       		if (roll == 11)
        {
            message.channel.send('今天沒營業啦!');
        }
		
       		if (roll == 13)
        {
            message.channel.send('不好意思 這裡沒賣大麻');
        }
		
       		if (roll == 14)
        {
            message.channel.send('你的飲料來了:milk:');
        }
		
       		if (roll == 15)
        {
            message.channel.send('你的飲料來了 啊 關店時間到了');
        }
		
       		if (roll == 16)
        {
            message.channel.send('你的飲料來了:champagne:');
        }
		
       if (roll == 17)
        {
            message.channel.send('你在黑名單中所以... OuO');
        }
    }
})


client.on('message' , function (message){
    if (message.content == '!meal') 
    {
        var roll =(Math.floor(Math.random()*16)+1);
        if (roll == 1)
        {
            message.channel.send('這是你點的菜~ :fork_knife_plate: 啊! 忘記裝盤了XD');
        }
		
		if (roll == 2)
        {
            message.channel.send('這是你點的菜~ :hamburger:');
        }
		
		if (roll == 3)
        {
            message.channel.send('這是你點的套餐~ :bento:');
        }
		
		if (roll == 4)
        {
            message.channel.send('這是你點的菜~ :ramen: 現在有集點活動 給你1點喔！');
        }
		
		if (roll == 5)
        {
           message.channel.send('不好意思 要有VIP才可以點這道菜 :credit_card: ');
        }
		
		if (roll == 6)
        {
            message.channel.send('沒料了 抱歉...');
        }
		
		if (roll == 7)
        {
            message.channel.send('這是你點的菜~  :sushi:');
        }
		
       		if (roll == 8)
        {
            message.channel.send('這是你點的菜~ :stew:');
        }
		
       		if (roll == 9)
        {
            message.channel.send('這是你點的菜~:pizza: ');
        }
		
       		if (roll == 10)
        {
            message.channel.send('你要外帶還是內用呢');
        }
		
       		if (roll == 11)
        {
            message.channel.send('不好意思 今天罷工日喔:flag_white:');
        }
		
       		if (roll == 13)
        {
            message.channel.send('這是你點的菜~:taco:');
        }
		
       		if (roll == 14)
        {
            message.channel.send('這是你點的菜~ :fries:');
        }
		
       		if (roll == 15)
        {
            message.channel.send('這是你點的菜~ :rice_ball:');
        }
		
       		if (roll == 16)
        {
            message.channel.send('請問你要刷卡還是付現呢:money_with_wings:');
        }
		
		if (roll == 17)
        {
            message.channel.send('發生未知錯誤 請私訊 青楓OuO#5224');
        }
       
    }
})

client.on('message' , function (message){
    if (message.content == '!sweet') 
    {
        var roll =(Math.floor(Math.random()*15)+1);
        if (roll == 1)
        {
            message.channel.send('甜點來了AuA :popcorn: ');
        }
		
		if (roll == 2)
        {
            message.channel.send('甜點來了AuA :cookie:');
        }
		
		if (roll == 3)
        {
            message.channel.send('甜點來了AuA :doughnut: ');
        }
		
		if (roll == 4)
        {
            message.channel.send('甜點來了AuA :cake: 一層喜歡的OwO');
        }
		
		if (roll == 5)
        {
           message.channel.send('甜點來了AuA:candy:');
        }
		
		if (roll == 6)
        {
            message.channel.send('甜點來了AuA :lollipop:');
        }
		
		if (roll == 7)
        {
            message.channel.send('要刷卡還是付現？   刷富*銀行卡 享有0.87%回饋');
        }
		
       		if (roll == 8)
        {
            message.channel.send('甜點來了AuA :rice_cracker:');
        }
		
       		if (roll == 9)
        {
            message.channel.send('甜點來了AuA :dango: ');
        }
		
       		if (roll == 10)
        {
            message.channel.send('不好意思 因為你不同意1+1=1 所以不能買喔');
        }
		
       		if (roll == 11)
        {
            message.channel.send('沒甜點了 下次請早!');
        }
		
       		if (roll == 13)
        {
            message.channel.send('甜點來了AuA :flan:');
        }
		
       		if (roll == 14)
        {
            message.channel.send('不好意思 今天颱風假喔OuO');
        }
		
       		if (roll == 15)
        {
            message.channel.send('那個 本店服務費 是10+ 99999喔');
        }
		
       		if (roll == 16)
        {
            message.channel.send('OuO 想不到惹');
        }
		
		if (roll == 17)
        {
            message.channel.send('發生未知錯誤 請私訊 青楓OuO#5224');
        }
       
    }
})

client.on('message' , function (message){
    if (message.content == '!OneLayer121') 
    {
        var roll =(Math.floor(Math.random()*5)+1);
        if (roll == 1)
        {
            message.channel.send('一層發動:蛋糕攻擊:cake: :cake: :cake: :cake: 你受到了87點傷害');
        }
		
		if (roll == 2)
        {
            message.channel.send('你使用了:偷吃蛋糕攻擊 :fork_knife_plate: 一層發怒 你受到了87000點傷害');
        }
		
		if (roll == 3)
        {
            message.channel.send('一層發動:黑名單攻擊 您暫停一回合');
        }
		
		if (roll == 4)
        {
            message.channel.send('你輸了QQ');
        }
		
		if (roll == 5)
        {
            message.channel.send('您使用外掛攻擊 你贏了!!!!');
        }
		
	
    }
})


client.on('message' , function (message){
    if (message.content == '!weed') 
    {
        var roll =(Math.floor(Math.random()*6)+1);
        if (roll == 1)
        {
            message.channel.send('大麻趴!! :herb:  :herb:  :herb: :herb: :herb: :herb: :herb: :herb:');
        }
		
		if (roll == 2)
        {
            message.channel.send('不好意思 請先給我們看身分證');
        }
		
		if (roll == 3)
        {
            message.channel.send(':herb: 來 :herb: 給你 :herb:');
        }
		
		if (roll == 4)
        {
            message.channel.send("菜單   大麻*1 :herb: 87比特幣    大麻一打 5487 比特幣  OuO一個 OuO元   特別活動   只要是 幫 只是一隻雞#7983 或本人來買可享 0.087折優惠  :herb:");
        }
		
		if (roll == 5)
        {
            message.channel.send('OuO 沒了~ :herb:');
        }
		
		if (roll == 6)
        {
            message.channel.send('在冷氣口那OuO  :herb:');
		} 
	console.log('有人吸食了??');
	
    }
})

client.on('message', msg => {
	if (msg.content === '!cafehelp') {
		msg.channel.send('已尋求幫助 請稍後片刻')
		console.log('尋求幫助.');
		
	}
});

client.on('message', msg => {
	if (msg.content === '!seahelp') {
		msg.channel.send('已尋求幫助 請先打出您需要蓋什麼東西 稍後片刻')
		console.log('尋求建築幫助.');
		
	}
});

client.on('message', msg => {
	if (msg.content === '!restart') {
		msg.channel.send('準備重開 套用新設定')
		msg.delete (10);
		console.log('重開準備');
	}
});

client.on('message' , function (message){
    if (message.content == '!test') 
    {
        var OuO =(Math.floor(Math.random()*1)+1);
        if (OuO == 1)
        {
            message.channel.send('lose! :cry:');
        }
		
		else
	    {
			message.channel.send('safe!:tada:');
		}	
	
    }
})

client.on('message' , function (message){
    if (message.content == '!lottery') 
    {
        var roll =(Math.floor(Math.random()*26)+1);
        if (roll == 1)
        {
            message.channel.send('請再抽一次 :ticket:');
        }
		
		if (roll == 2)
        {
            message.channel.send('來! 銘謝惠顧');
        }
		
		if (roll == 3)
        {
            message.channel.send('來! 銘謝惠顧');
        }
		
		if (roll == 4)
        {
            message.channel.send('來! 銘謝惠顧');
        }
		
		if (roll == 5)
        {
           message.channel.send('來! 銘謝惠顧:ticket:');
        }
		
		if (roll == 6)
        {
            message.channel.send('來! 銘謝惠顧');
        }
		
		if (roll == 7)
        {
            message.channel.send('來! 銘謝惠顧');
        }
		
       		if (roll == 8)
        {
            message.channel.send('再抽一次OuO');
        }
		
       		if (roll == 9)
        {
            message.channel.send('你中了安慰獎 小台灣國旗 :flag_tw:');
        }
		
       		if (roll == 10)
        {
            message.channel.send('你中了安慰獎 小台灣國旗 :flag_tw:');
        }
		
       		if (roll == 11)
        {
            message.channel.send('你中了安慰獎 小台灣國旗 :flag_tw:');
        }
		
       		if (roll == 13)
        {
            message.channel.send('你中了安慰獎 小台灣國旗 :flag_tw:');
        }
		
       		if (roll == 14)
        {
            message.channel.send('你中了5獎 :calendar:');
        }
		
       		if (roll == 15)
        {
            message.channel.send('你中了5獎 :calendar:');
        }
		
       		if (roll == 16)
        {
            message.channel.send('你中了5獎 :calendar:');
        }
		
		if (roll == 17)
        {
            message.channel.send('你中了4獎 一大張海報 (・∀・)');
        }
       
	   
		if (roll == 18)
        {
            message.channel.send('你中了4獎 一大張海報 (・∀・)');
        }
       
		if (roll == 19)
        {
            message.channel.send('你中了4獎 一大張海報 (・∀・)');
        }
       
		if (roll == 20)
        {
            message.channel.send('你中了4獎 一大張海報 (・∀・)');
        }
       
		if (roll == 21)
        {
            message.channel.send('你中了3獎 8.7塊 “一層蛋糕” :cake:');
        }
       
		if (roll == 22)
        {
            message.channel.send('你中了3獎 8.7塊 “一層蛋糕” :cake:');
        }
       
		if (roll == 23)
        {
            message.channel.send('你中了3獎 8.7塊 “一層蛋糕” :cake:');
        }
       
		if (roll == 24)
        {
            message.channel.send('你中了2獎 :koala:娃娃一個(這...是娃娃嗎)');
        }
       
	   if (roll == 25)
        {
            message.channel.send('你中了2獎 :koala:娃娃一個(這...是娃娃嗎)');
        }
       
	   if (roll == 26)
        {
            message.channel.send('你中了大獎 一層的擁抱 和一個已經被用掉的東西  https://discord.gift/39R8wKhB9NBESWtz');
        }
       
    }
})


client.login('process.env.BOT_TOKEN');
