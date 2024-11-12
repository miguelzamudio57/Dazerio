const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js')

module.exports = {
 name: "cat",
 alias: [""],

execute(client, message, args){

  var list = [
  'https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',
  'https://www.hola.com/imagenes/mascotas/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg',
  'https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/20_1615982101979.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YFujrJBp6VFaiVZyjRa8avT6PBw-v2IAhw&usqp=CAU',
  'https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1648274199688-1024x1013.jpg',
  'https://imagenes.t13.cl/images/original/2022/09/1662825110-gato2.jpg',
  'https://i.pinimg.com/564x/5e/57/f8/5e57f8ea90341279a6ed28ff0c532f27.jpg',
  'https://i.pinimg.com/736x/70/56/06/70560633168f44fe1d49b01080bd58d9.jpg',
  'https://miro.medium.com/max/843/1*N1nE0iZyJC18IYry84JpUA.jpeg',
'https://unachicaysugato.files.wordpress.com/2012/01/403824_10100841944523328_10718391_60365861_1842968560_n.jpg?w=584',
  'https://www.recreoviral.com/wp-content/uploads/2015/05/Gatos-que-se-sientas-chistosos-1.jpg',
  'https://unachicaysugato.files.wordpress.com/2012/10/tumblr_lwzm8toz2d1qzf4rzo1_500.jpeg?w=584',
'https://unachicaysugato.files.wordpress.com/2013/04/508ff213c4e32_80e2336c6a132f5b691e89b088a6208d.jpg',
  'https://f.rpp-noticias.io/2020/04/06/924283gatos12-1jpg.jpg',
  'https://i.pinimg.com/550x/bb/79/d6/bb79d60b1729cfaf77bb5fa34a55acf9.jpg', 
  'https://i.ytimg.com/vi/g8fbiFbT0X8/maxresdefault.jpg',
  'https://st2.depositphotos.com/5482604/8042/i/450/depositphotos_80421608-stock-photo-funny-cats-self-picture.jpg',
    'https://img.europapress.es/fotoweb/fotonoticia_20170421164500-17042096059_420.jpg',
    'https://st2.depositphotos.com/5482604/8042/i/450/depositphotos_80421558-stock-photo-funny-cats-driving-a-moped.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/Fotos-de-gatos-graciosas-borracho.jpg',
    'https://c8.alamy.com/compes/2b1njbp/apariencia-de-terror-de-gato-2b1njbp.jpg',
    'https://media.revistagq.com/photos/5d3153b3f96ef400080aa0fc/16:9/pass/primer-trailer-cats-criticas-internet.jpg'
];

var rand = list[Math.floor(Math.random() * list.length)];


const embed = new EmbedBuilder()
        .setColor('#FF007F')
        .setImage(rand)
   message.channel.send({ embeds : [embed] })


}

}
