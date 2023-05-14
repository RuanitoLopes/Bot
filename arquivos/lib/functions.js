const fs = require('fs');
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const { color } = require('./color')
const config = JSON.parse(fs.readFileSync("./DONO/config/data.json"))
prefix = config.prefix
prefixo = config.prefix





const banner = cfonts.render(('Adolf|Bot'), {
font : "block",
align: "center",
colors: ["red","white"]
})



//======//
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}


function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}


module.exports = { TelegraPh }





const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var time = '♧ Boa madruga ♧'
}
if(time2 > "05:30:00"){
var time = '♧ Bom dia ♧'
}
if(time2 > "12:00:00"){
var time = '♧ Boa tarde ♧'
}
if(time2 > "19:00:00"){
var time = '♧ Boa noite ♧'
}
const timee = moment.tz("America/Sao_Paulo").format("HH:mm:ss")

const banner2 = cfonts.render((`${time}`), {
font: "console",
align: "center",
})

resposta = {
espere: "Calma to fazeno ",
dono: "♨️ Esse comando so pode ser usado pelo virus!! ",
grupo: "♨️ Esse comando só pode ser usado em grupo ",
privado: "♨️ Esse comando só pode ser usado no privado ",
adm: "♨️ Esse comando só pode ser usado por administradores de grupo",
botadm: " ♨️ Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚠️] Você não se registrou utilize ${prefixo}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "♨️ Error, tente novamente mais tarde "
}


module.exports = {
banner,
banner2
}

 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`${color(`Atualizando: ${__filename} \n ~>Adolf`,'cyan')}`)
delete require.cache[file];
require(file);
 })