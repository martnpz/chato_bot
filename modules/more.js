
const Telegraf = require('telegraf')

const bot = new Telegraf('1221066742:AAEg77C9lDYcrPvWQakNhrdppoig8pIof4s')

bot.start((ctx) => {
	ctx.reply('Voy a inicar cuando quiera')
})

bot.help((ctx) => {
	ctx.reply('te ayudo')
})

bot.settings((ctx) => {
	ctx.reply('configuraciones')
})

bot.command('details', (ctx) => {
	ctx.reply(ctx.chat[0])
	ctx.reply(ctx.from[0])
	ctx.reply(ctx.message)
	ctx.reply('Tipo: '+ ctx.updateSubTypes)
})

bot.command('facts', ctx => {
	ctx.reply(facts())
})

bot.hears('hola bot que te trae por aca', (ctx) => {
	ctx.reply('Queres Bija puta?')
})

function facts() {

    let factsJson = [
        'Todo el acero del mundo esta contaminado con radionucleidos, por eso cada vez es mas difícil encontrar metal producido antes de la prueba nuclear Trinity',
        'En el campo del deeplearning El Embedding es una funcion para representar palabras en forma de vectores en 3D despues de un one hot encodding',
        'La barba romanoc fue robada  por un varon de Austria',
        'Los televisores de tubo con radios catodicos son al igual que el colicionador de Adrones, un Acelerador de particulas',
        'En la cancion Geteo Remix, Duki nombra tres marcas de relojes de lujo: las empresas suizas Patek Philippe y Rolex, y la manufacturera francesa Cartier',
        'El nistagmo puede tener causas que no se deben a una enfermedad subyacente',
        'el virus de la Varicela puede volver a los 50 años y peor',
        'cuando queres decir algo pero no te sale y se te olvida se llama presque vu',
        'la planta Drosera Stolonifera simula tener gotas de rocio en sus hojas para atraer a sus presas',
        'El anime es, básicamente, fracaso absoluto. Moral, humano y existencial',
        'GPT-3 estropeara a GPT-4, por ende, debera ser entrenado con toda la historia anterior a 2020',
        'el 97% de lo que escribis no podes expresarlo en persona',
		'No te iteresa lo que diga',
		'El chocolate blanco no es chocolate',
		'La Dankie tendra donaciones voluntarias. Cuando eso pase, yo sere el mejor',
		'pusetodo un Json en el main porque nose exportar en URL'
	]

	let random = []
	let position = []
	let r
	for (let i = 0; i < factsJson.length; i++) position[i] = i;
	for (let i = 0; i < 1; i++) {
		r = Math.floor(Math.random() * position.length)
		random.push(factsJson[position[r]])
		position.splice(r, 1)	
	}
	return random.toString()
}


//bot.on('text', ctx => {
//	ctx.reply('No')
//})

bot.launch()
