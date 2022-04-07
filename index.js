const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', async  msg => {
	if (msg.body === '!mulai') {
		const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendMessage(
			`
				Assalamualaikum @${contact.number}!
				Selamat datang di BOT layanan jurusan Sistem Informasi
				UIN Alauddin Makassar. 
			`, { mentions: [contact]	}
		);
	}

	if(msg.body === '60900117057') {
		client.sendMessage(msg.from, 
		`
		*Hi Ilma Permatadwitami*
		IPK: 4.0; 
		Umur: 24;
		Angkatan: 2017
		`
		);
	}

	if (msg.body == '!ulang') {
        msg.reply(`
		*Hi Ilma Permatadwitami*
		IPK: 4.0; 
		Umur: 24;
		Angkatan: 2007
		`);
    }

	if (msg.body === '!admin') {
        let info = client.info;
        client.sendMessage(msg.from, 
		`
		*Informasi Admin*
		Nama: ${info.pushname}
		Nomor telpon: ${info.wid.user}
		Platform: ${info.platform}
        `);
	 }
});


client.initialize();