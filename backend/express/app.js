var express = require('express');
var app = express();
// var ip = "127.0.0.1";
var port = 8000;

//app.get(route, callback)

// to pass single line of HTML data you can put your data within your prefered html tag inside res.send
app.get("/", (req,res) => {
    res.send("Hello world from express");
})

app.get("/about", (req,res) => {
    res.send("Hello world from about page");
})

app.get("/contact", (req,res) => {
    res.send("Hello world from contact page");
})

//Whenever you want to pass multiple lines of HTML data then use res.write()
//if you don't include res.send() after your res.write() web page keep on loading
app.get("/html", (req,res) => {
    res.write("<p>Hello world from contact page</p><div>This is my container</div><ul><li>First</li><li>Second</li></ul>");
    res.send();
});

//This function will also convert your null and undefined value which is not actually valid JSON
//res.json()

//This is how you pass JSON data from server to the client using express
app.get("/json", (req,res) => {
    res.send(
        //when you want convert json into array of an object simply enclose entire JSON data within []
        [
        {
            "status": "ok",
            "totalResults": 13231,
            "articles": [
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Gives Intimate Details About His Past",
            "description": "When you are an influencer, you expect your life to interest the greatest number of people. This desire grows when one becomes one of the most powerful and influential personalities in the world. At this time, people, and especially the press, are digging int…",
            "url": "https://biztoc.com/x/aac538d332f9d44a",
            "urlToImage": "https://c.biztoc.com/p/aac538d332f9d44a/og.webp",
            "publishedAt": "2023-05-07T14:00:05Z",
            "content": "When you are an influencer, you expect your life to interest the greatest number of people.This desire grows when one becomes one of the most powerful and influential personalities in the world. At t… [+289 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Dnyuz.com"
            },
            "author": "dnyuz",
            "title": "Liz Holmes Wants You to Forget About Elizabeth...",
            "description": "Elizabeth Holmes blends in with the other moms here, in a bucket hat and sunglasses, her newborn strapped to her",
            "url": "https://dnyuz.com/2023/05/07/liz-holmes-wants-you-to-forget-about-elizabeth/",
            "urlToImage": "https://dnyuz.com/wp-content/uploads/2023/05/Liz-Holmes-Wants-You-to-Forget-About-Elizabeth.jpg",
            "publishedAt": "2023-05-07T14:00:05Z",
            "content": "Liz Holmes Wants You to Forget About ElizabethElizabeth Holmes blends in with the other moms here, in a bucket hat and sunglasses, her newborn strapped to her chest and swathed in a Baby Yoda nursing… [+29744 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Sam Tabahriti",
            "title": "Billionaire rivals Elon Musk and Jeff Bezos showed up as VIPs at the F1 Grand Prix in Miami — take a look",
            "description": "The Twitter owner and his son toured the Oracle Red Bull team's paddock, where they assemble before a race.",
            "url": "https://www.businessinsider.com/jeff-bezos-elon-musk-at-f1-grand-prix-miami-2023-5",
            "urlToImage": "https://i.insider.com/6457746502f891001861c2a2?width=1200&format=jpeg",
            "publishedAt": "2023-05-07T13:57:32Z",
            "content": "Elon Musk with his three-year-old son and Jeff Bezos went to the final practice ahead of the F1 Grand Prix of Miami at Miami International Autodrome.Dan Istitene, Mark Thompson/Getty Images\r\n<ul>\n<li… [+3077 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Elespanol.com"
            },
            "author": "Alvarez del Vayo",
            "title": "El problema de la autonomía de los coches eléctricos: llegamos con un -3% de batería",
            "description": "Hemos querido hacer un viaje en coche eléctrico sin mirar demasiado la batería ni la autonomía. Y os contamos cómo ha sido la experiencia.",
            "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230507/problema-autonomia-coches-electricos-llegamos-bateria/761923825_0.html",
            "urlToImage": "https://s1.eestatic.com/2023/04/28/actualidad/759684303_232965524_1200x630.jpg",
            "publishedAt": "2023-05-07T13:55:34Z",
            "content": "Rara es la vez que alguien no me comenta el problema de la autonomía de los coches eléctricos cuando le comento que conduzco normalmente un vehículo de este tipo. Ya conté aquí lo que suponía viajar … [+2209 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Receives High Praise from Two Legends",
            "description": "Is it a handover between the old and the new guard of American capitalism? It looks like it. The image of Warren Buffett and Charlie Munger praising Elon Musk is perhaps an acknowledgment of the Techno King as the new pioneer of business on this side of the A…",
            "url": "https://biztoc.com/x/a4e6f5b1eb388a5a",
            "urlToImage": "https://c.biztoc.com/p/a4e6f5b1eb388a5a/og.webp",
            "publishedAt": "2023-05-07T13:46:06Z",
            "content": "Is it a handover between the old and the new guard of American capitalism?It looks like it. The image of Warren Buffett and Charlie Munger praising Elon Musk is perhaps an acknowledgment of the Techn… [+309 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ambcrypto.com"
            },
            "author": "Suzuki Shillsalot",
            "title": "I asked ChatGPT about Elon Musk’s influence on Dogecoin, the AI bot said…",
            "description": "Here ChatGPT attempts to take a look at the correlation between Elon Musk's tweets and Dogecoin's prices.",
            "url": "https://ambcrypto.com/?p=311401",
            "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/05/AMBCrypto_An_image_of_Elon_Musks_face_and_the_Dogecoin_logo_ove_80e91a0e-c301-41bd-898d-c61bf6c11206-1000x600.jpg",
            "publishedAt": "2023-05-07T13:40:24Z",
            "content": "Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writers opinion\r\nAs you may already know, Dogecoin (DOGE) has beco… [+7024 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Frandroid"
            },
            "author": "Ulrich Rozier",
            "title": "Peugeot 308 électrique, Tesla Model 3 et MG4 : quand Peugeot s'essaye à la comédie tarifaire",
            "description": "La 308 électrique : Peugeot nous fait-il une mauvaise blague tarifaire ? Carlos Tavares, PDG de Stellantis, a récemment déclaré que le groupe n'a pas besoin de s'inquiéter de la concurrence de Tesla. Pourtant, il devrait.",
            "url": "https://www.frandroid.com/?p=1684915",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/05/peugeot-e-308-1200x647.jpeg",
            "publishedAt": "2023-05-07T13:29:42Z",
            "content": "La 308 électrique : Peugeot nous fait-il une mauvaise blague tarifaire ? Carlos Tavares, PDG de Stellantis, a récemment déclaré que le groupe n'a pas besoin de s'inquiéter de la concurrence de Tesla.… [+2234 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Frandroid"
            },
            "author": "Ulrich Rozier",
            "title": "Peugeot 308 électrique, Tesla Model 3 et MG4 : quand Peugeot s’essaye à la comédie tarifaire",
            "description": "La 308 électrique : Peugeot nous fait-il une mauvaise blague tarifaire ? Carlos Tavares, PDG de Stellantis, a récemment déclaré que le groupe n'a pas besoin de s'inquiéter de la concurrence de Tesla. Pourtant, il devrait.",
            "url": "https://www.frandroid.com/marques/peugeot/1684915_peugeot-308-electrique-tesla-model-3-et-mg4-quand-peugeot-sessaye-a-la-comedie-tarifaire",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/05/peugeot-e-308.jpeg",
            "publishedAt": "2023-05-07T13:28:28Z",
            "content": "La 308 électrique : Peugeot nous fait-il une mauvaise blague tarifaire ? Carlos Tavares, PDG de Stellantis, a récemment déclaré que le groupe n'a pas besoin de s'inquiéter de la concurrence de Tesla.… [+2200 chars]"
            },
            {
            "source": {
            "id": "marca",
            "name": "Marca"
            },
            "author": "marca.com",
            "title": "Elon Musk visits Miami GP and launches a proposal: A race between an electric car and an F1?",
            "description": "The Miami Grand Prix is likely to break the record for the number of VIPS present in a Formula 1 paddock in the history of the competition (at least until Las Vegas arrives). \n\nBut",
            "url": "https://www.marca.com/en/f1/2023/05/07/64579d08e2704e14948b458e.html",
            "urlToImage": "https://phantom-marca.unidadeditorial.es/a25ca85c2ab37aad9a8830e0db733b7b/crop/0x0/2044x1363/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/07/16834457212025.jpg",
            "publishedAt": "2023-05-07T13:22:27Z",
            "content": "The Miami Grand Prix is likely to break the record for the number of VIPS present in a Formula 1 paddock in the history of the competition (at least until Las Vegas arrives). \r\nBut this Saturday ther… [+1652 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Turbo.fr"
            },
            "author": "Khalil Bouguerra",
            "title": "VIDEO - La Rimac Nevera file à plus de 300 km/h sur l'autobahn avec une facilité déconcertante",
            "description": "Avec un 0 à 100 km/h avalé en moins de 2 secondes et une vitesse maximale supérieure à 400 km/h, il va être difficile de faire mieux pendant un sacré bout de temps.\nLa Rimac Nevera est l'une des voitures les plus puissantes sur terre. Grâce à ses quatre moteu…",
            "url": "https://www.turbo.fr/actualite-automobile/video-la-rimac-nevera-file-plus-de-300-km/h-sur-lautobahn-avec-une-facilite-deconcertante-190508",
            "urlToImage": "https://www.turbo.fr/sites/default/files/2023-05/Rimac%20Nevera%20sur%20l%27autobahn.jpg",
            "publishedAt": "2023-05-07T13:19:17Z",
            "content": "Avec un 0 à 100 km/h avalé en moins de 2 secondes et une vitesse maximale supérieure à 400 km/h, il va être difficile de faire mieux pendant un sacré bout de temps.\r\nLa Rimac Nevera est l'une des voi… [+1752 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "This week in EVs: The Tesla-Ford price war",
            "description": "This week in EVs: The Tesla-Ford price war",
            "url": "https://www.investing.com/news/stock-market-news/this-week-in-evs-teslaford-price-war-3075232",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEE6B0L1_L.jpg",
            "publishedAt": "2023-05-07T13:13:34Z",
            "content": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: U.S. hits pause on EV RFS plans; Tesla pumps prices as Ford slashes to compete; GM g… [+4629 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gazzetta.it"
            },
            "author": "Matteo Solinghi",
            "title": "Tesla Model S Plaid: con questo pacchetto arriva a 322 km/h",
            "description": "Ad un costo di 18.435 euro si può aggiungere il Track Package, un pacchetto che sblocca le massime prestazioni della berlina elettrica. Nel prezzo sono inclusi pneumatici iper sportivi e freni carboceramici",
            "url": "https://www.gazzetta.it/motori/la-mia-auto/07-05-2023/tesla-model-s-plaid-con-il-track-package-raggiunge-i-322-km-h.shtml",
            "urlToImage": "https://dimages2.gazzettaobjects.it/files/og_thumbnail/files/fp/uploads/2023/05/05/645523ae18e01.r_d.1400-794-0.jpeg",
            "publishedAt": "2023-05-07T13:11:22Z",
            "content": "Matteo Solinghi\r\n @\r\n TeoSic58\r\n07 maggio 2023\r\nDuecento miglia orarie, ossia 322 km/h. A tanto si può ora spingere la Tesla Model S Plaid aggiungendo il Track Package, un insieme di componenti racch… [+1291 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Cool3c.com"
            },
            "author": "Mash Yang",
            "title": "Swift 語言創始人提出全新程式語言 Mojo 希望加速人工智慧技術發展",
            "description": "Mojo高度相容Python和C語言，且運作執行效率比Python快約35000倍，希望能藉此加快人工智慧技術發展，讓AI能以模組化方式擴展，並強化可編程性與各大硬體業者的相容性。 過去曾在蘋果任內前創設開放架構程式語言Swift，後來更曾加入Tesla、Google Brain、SiFive的Chris Lattner，並且在2022年與前Google ML產品負責人Tim Davis共同成立人工智慧技術公司Modular AI，更提出全新程式語言Mojo。 Mojo標榜能高度相容目前多人使用的Python與C…",
            "url": "https://www.cool3c.com/article/193065",
            "urlToImage": "https://sw.cool3c.com/article/2023/763f45ae-fb8f-44fc-a490-358a61461909.jpg?fit=max&w=1400&q=80",
            "publishedAt": "2023-05-07T13:08:45Z",
            "content": "MojoPythonCPython35000AI\r\nSwiftTeslaGoogle BrainSiFiveChris Lattner2022Google MLTim DavisModular AIMojo\r\nMojoPythonCGPUIntelArmNVIDIAAMD\r\nModular AIMojoPython35000\r\nPythonCMojoMojoPythonCMojo\r\nChris … [+33 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Dollar dominance isn't going anywhere. Here are 5 myths about de-dollarization",
            "description": "None The dollar's dominance isn't at risk, three currency experts told Insider. • None That's because the greenback is an entrenched encumbent and widely trusted as a safe haven. • None Economists and currency experts shared five misconceptions about the doll…",
            "url": "https://biztoc.com/x/f4ed668cb8223565",
            "urlToImage": "https://c.biztoc.com/p/f4ed668cb8223565/og.webp",
            "publishedAt": "2023-05-07T12:38:06Z",
            "content": "None The dollar's dominance isn't at risk, three currency experts told Insider.None That's because the greenback is an entrenched encumbent and widely trusted as a safe haven.None Economists and curr… [+300 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Capitalist.com.br"
            },
            "author": "Capitalist",
            "title": "Bilionário dono da Tesla atualmente possui 10 filhos que podem herdar seu império",
            "description": "Sucessão pode ser um problema, ainda mais se tratando de verdadeiros impérios empresariais. Mas, por sorte Elon Musk não terá esse problema, graças a sua generosa prole.",
            "url": "https://capitalist.com.br/descubra-quem-sao-os-filhos-do-homem-mais-rico-do-mundo/",
            "urlToImage": "https://capitalist.com.br/wp-content/uploads/2023/05/Elon-Musk-1-1000x600.jpg",
            "publishedAt": "2023-05-07T12:32:42Z",
            "content": "Todos conhecem Elon Musk, o famoso e polêmico bilionário sul-africano. Atualmente, ele é o proprietário de empresas poderosas como a Tesla, a SpaceX e o Twitter.\r\nInclusive, desde que ele comprou a p… [+2852 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yenicaggazetesi.com.tr"
            },
            "author": null,
            "title": "Apple'ın kurucusu Wozniak: Sizi öldürmeye çalışan bir yapay zeka görmek istiyorsanız Tesla alın",
            "description": "Apple'ın kurucu ortağı Steve Wozniak, bir röportajda Tesla'nın otomatik pilotu hakkında ilginç iddialarda bulundu. Wozniak, \"Sizi öldürmeye çalışan bir yapay zeka görmek istiyorsanız Tesla alın\" dedi.",
            "url": "https://www.yenicaggazetesi.com.tr/applein-kurucusu-wozniak-sizi-oldurmeye-calisan-bir-yapay-zeka-gormek-istiyorsaniz-662851h.htm",
            "urlToImage": "https://cdn.yenicaggazetesi.com.tr/news/964420.jpg",
            "publishedAt": "2023-05-07T12:29:00Z",
            "content": "Applen kurucularndan olan Steve Wozniak, geçtiimiz dönemlerde Tesla'ya duyduu sempati sonucunda bu model elektrikli araçlardan birini satn alm ve otopilot 2.0 sürümünün yaynlanmasnn ardndan ise garaj… [+490 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Www.bt.dk"
            },
            "author": "jogj@bt.dk (Josefine Glerup Jacobsen)",
            "title": "Stjernetræf til Formel 1: Rigmænd kom på besøg",
            "description": "Det var i den grad kendte ansigter, der lørdag dukkede op til Formel 1-kvalifikationen i Miami.",
            "url": "https://www.bt.dk/formel-1/stjernetraef-til-formel-1-rigmaend-kom-paa-besoeg",
            "urlToImage": "https://bt.bmcdn.dk/media/cache/resolve/image_960x545/image/200/2007753/24421782-2.jpg",
            "publishedAt": "2023-05-07T12:09:00Z",
            "content": "Det var i den grad kendte ansigter, der lørdag dukkede op til Formel 1-kvalifikationen i Miami.\r\nTesla-ejer Elon Musk var blandt andet til stede på Hard Rock Stadium, hvor han havde sønnen, X AE A-XI… [+1529 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Frandroid"
            },
            "author": "Yann Lethuillier",
            "title": "Une Tesla Model 3 neuve à 19 990 euros en France ? C'est théoriquement possible",
            "description": "Même si le gouvernement a récemment mis un coup de rabot sur les aides gouvernementales concernant l'achat d'une voiture électrique, il est toujours possible de bénéficier d'une ou plusieurs aides. Contrairement à ce que l'on pourrait croire, elles sont cumul…",
            "url": "https://www.frandroid.com/marques/tesla/1679751_une-tesla-model-3-neuve-a-19-990-euros-en-france-cest-theoriquement-possible",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/05/tesla-frandroid-willian-cittadin-bx1sfwbp2v8-unsplash.jpg",
            "publishedAt": "2023-05-07T12:02:38Z",
            "content": "Même si le gouvernement a récemment mis un coup de rabot sur les aides gouvernementales concernant l'achat d'une voiture électrique, il est toujours possible de bénéficier d'une ou plusieurs aides. C… [+7930 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motorpasión"
            },
            "author": "Álvaro Ruiz",
            "title": "El Tesla Model S Plaid ya era tan potente como un Bugatti Veyron. Con este pack también pretende moverse como un McLaren en circuito",
            "description": "El Tesla Model S Plaid es una de las berlinas más rápidas del mundo y ahora Tesla se ha propuesto mejorar su comportamiento en circuito con un kit opcional que está disponible para todas las unidades fabricadas desde el año 2021.\n<!-- BREAK 1 -->\nSe llama Tra…",
            "url": "https://www.motorpasion.com/tesla/tesla-model-s-plaid-era-potente-como-bugatti-veyron-este-pack-tambien-pretende-moverse-como-mclaren-circuito",
            "urlToImage": "https://img.remediosdigitales.com/209429/tesla-model-s-plaid-2/840_560.jpeg",
            "publishedAt": "2023-05-07T12:01:29Z",
            "content": "El Tesla Model S Plaid es una de las berlinas más rápidas del mundo y ahora Tesla se ha propuesto mejorar su comportamiento en circuito con un kit opcional que está disponible para todas las unidades… [+2902 chars]"
            },
            {
            "source": {
            "id": "handelsblatt",
            "name": "Handelsblatt"
            },
            "author": "Felix Holtermann",
            "title": "Transportmesse ACT: Die US-Truckbranche ist im Wasserstoff-Fieber",
            "description": "US-Vorgaben besiegeln das Ende des Diesel-Lkws. Auf der Langstrecke setzt die Branche auf Wasserstoff-Trucks. Die Technik kommt oft aus Deutschland – das große Geld winkt in den USA.",
            "url": "https://www.handelsblatt.com/technik/it-internet/transportmesse-act-die-us-truckbranche-ist-im-wasserstoff-fieber/29136182.html",
            "urlToImage": "https://www.handelsblatt.com/images/mercedes-benz-genh2-truck/26192112/4-format2003.jpg",
            "publishedAt": "2023-05-07T11:29:18Z",
            "content": "Anaheim Ob man auch einen Wasserstoff-Truck habe, fragt eine Messebesucherin am Daimler-Stand. Ein Mitarbeiter des schwäbischen Lkw-Herstellers winkt ab: Den entwickeln wir gerade. Zeigen können wir … [+6030 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Trevor Jennewine)",
            "title": "The Fed Expects a Recession: 1 Index Fund With a Perfect Track Record to Buy Now",
            "description": "This S&P 500 index fund weathered recessions in the past and has never failed to recoup its losses.",
            "url": "https://www.fool.com/investing/2023/05/07/fed-expects-recession-1-index-fund-perfect-buy-now/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/730915/investor-95.jpg",
            "publishedAt": "2023-05-07T11:25:00Z",
            "content": "The Federal Open Market Committee (FOMC) is a policymaking body within the Federal Reserve System. It helps the central bank fulfill its dual mandate of maximizing employment and maintaining stable p… [+4324 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motoryracing.com"
            },
            "author": "Alejandro Delgado",
            "title": "Toyota cierra el 2022 liderando los coches más vendidos",
            "description": "La firma asiática ha sabido entender las peculiaridades de un mercado que cada vez es más versátil y polivalente.Toyota cierra el 2022 liderando los coches más vendidos",
            "url": "https://www.motoryracing.com/coches/noticias/toyota-2022-coches-vendidos/",
            "urlToImage": "https://img.motoryracing.com/noticias/portada/36000/36854-s3.jpg",
            "publishedAt": "2023-05-07T11:24:00Z",
            "content": "En un momento como el actual no es de extrañar que la industria de la automoción se encuentre en uno de sus mejores momentos. Poco a poco se van recuperando a pasos agigantados de la crisis que se pr… [+1703 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Metafilter.com"
            },
            "author": "dancestoblue",
            "title": "If you want to learn about AI killing people, \"Get a Tesla\"",
            "description": "Apple co-founder Steve Wozniak owns a Tesla. \"And boy, if you want a study of AI gone wrong and taking a lot of claims and trying to kill you every chance it can, get a Tesla,\" Wozniak told CNN earlier this week.",
            "url": "https://www.metafilter.com/199203/If-you-want-to-learn-about-AI-killing-people-Get-a-Tesla",
            "urlToImage": "http://cdn.mefi.us/images/mefi/apple-touch-icon.png",
            "publishedAt": "2023-05-07T10:58:19Z",
            "content": "MetaFilter is a weblog that anyone can contribute a link or a comment to. A typical weblog is one person posting their thoughts on the unique things they find on the web. This website exists to break… [+120 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gagadget.com"
            },
            "author": "gagadget.com",
            "title": "Tesla создаст в Неваде лабораторию по переработке лития для аккумуляторов",
            "description": "Стремление Tesla к выпуску 20 млн электромобилей в год сопровождается необходимостью увеличения производства аккумуляторов, что заставляет компанию наращивать добычу сырья. В ближайшее время в штате Невада может появиться лаборатория для переработки лития.",
            "url": "https://gagadget.com/ru/243535-tesla-sozdast-v-nevade-laboratoriyu-po-pererabotke-litiya-dlya-akkumulyatorov/",
            "urlToImage": "https://gagadget.com/media/cache/13/76/1376fffa3ed291840673e732c2e63e89.jpg",
            "publishedAt": "2023-05-07T10:46:15Z",
            "content": "Tesla 20 , . .\r\n(Elon Musk) . . , Tesla « », . , «, ».\r\n , , . , Tesla . .\r\n: electrek"
            },
            {
            "source": {
            "id": null,
            "name": "Turbo.fr"
            },
            "author": "Khalil Bouguerra",
            "title": "Le tennisman Nick Kyrgios se fait voler sa Tesla Model X qu'il retrouve en quelques minutes",
            "description": "Le 26e joueur au classement mondial peut remercier l'application My Tesla qui lui a permis de retrouver sa voiture en un rien de temps.\nNick Kyrgios, joueur de tennis australien, était chez lui vers 8h30 du matin lorsqu'un homme a frappé à la porte d'entrée d…",
            "url": "https://www.turbo.fr/actualite-automobile/le-tennisman-nick-kyrgios-se-fait-voler-sa-tesla-model-x-quil-retrouve-en-quelques-minutes-190507",
            "urlToImage": "https://www.turbo.fr/sites/default/files/2023-05/Tesla%20Model%20X%20Nick%20Kyrgios.jpg",
            "publishedAt": "2023-05-07T10:18:34Z",
            "content": "Le 26e joueur au classement mondial peut remercier l'application My Tesla qui lui a permis de retrouver sa voiture en un rien de temps.\r\nNick Kyrgios, joueur de tennis australien, était chez lui vers… [+1199 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Linette Lopez",
            "title": "Silicon Valley's Hail Mary moment",
            "description": "The rush to go all in on AI is the tech world's desperate, last-ditch attempt to avoid a stock market wipeout.",
            "url": "https://www.businessinsider.com/ai-technology-chatgpt-silicon-valley-save-business-stock-market-jobs-2023-5",
            "urlToImage": "https://i.insider.com/6453f378b4a8cd00187acc39?width=1200&format=jpeg",
            "publishedAt": "2023-05-07T10:05:41Z",
            "content": "Silicon Valley is praying that AI tools like ChatGPT can keep customers and investors distracted until the stock market chaos is over and the global economy bounces back.Arif Qazi / Insider\r\nAI is Si… [+12985 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Elon Musk dreams big and tackles impossible problems. Warren Buffett and Charlie Munger are happy to aim lower: 'We don't want that much failure'",
            "description": "None Warren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting. • None The Tesla chief tackles complex problems, resulting in major wins and losses, they said. • None \"We don't want that much failure,\" Munger said, expla…",
            "url": "https://biztoc.com/x/1066c8e0e7f8c6da",
            "urlToImage": "https://c.biztoc.com/p/1066c8e0e7f8c6da/og.webp",
            "publishedAt": "2023-05-07T10:04:05Z",
            "content": "None Warren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting.None The Tesla chief tackles complex problems, resulting in major wins and losses, they said.None… [+309 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motorpasión"
            },
            "author": "Daniel Murias",
            "title": "Probamos el Kia e-Niro, un SUV eléctrico que se ha dormido sobre los laureles y lo apuesta todo al diseño",
            "description": "Cuando el primer Kia e-Niro llegó al mercado en 2019, resultó ser toda una sorpresa. Mientras la mayoría de grandes fabricantes estaban ultimando el desarrollo de sus propuestas eléctricas, como el ID.3 de Volkswagen, Kia lanzó al mercado un crossover relativ…",
            "url": "https://www.motorpasion.com/pruebas-de-coches/kia-e-niro-2023-prueba",
            "urlToImage": "https://img.remediosdigitales.com/979adc/kia-e-niro-_5459/840_560.jpeg",
            "publishedAt": "2023-05-07T10:01:29Z",
            "content": "Cuando el primer Kia e-Niro llegó al mercado en 2019, resultó ser toda una sorpresa. Mientras la mayoría de grandes fabricantes estaban ultimando el desarrollo de sus propuestas eléctricas, como el I… [+12718 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Turbo.fr"
            },
            "author": "Renaud Mearini",
            "title": "Smart #1, elle fait sa révolution - Emission TURBO du 07/05/2023",
            "description": "Oubliez ce que vous connaissez sur la Smart, place à la nouvelle génération #1 ! Découverte ce dimanche dans l'émission du nouveau SUV compact 100 % électrique dans les rues de Paris. Focus sur les futures conditions de circulation dans les grandes agglomérat…",
            "url": "https://www.turbo.fr/emission-turbo/smart-1-elle-fait-sa-revolution-emission-turbo-du-07/05/2023-190496",
            "urlToImage": "https://www.turbo.fr/sites/default/files/2023-05/Emission-TURBO-07052023.jpg",
            "publishedAt": "2023-05-07T10:01:15Z",
            "content": "Oubliez ce que vous connaissez sur la Smart, place à la nouvelle génération #1 ! Découverte ce dimanche dans l'émission du nouveau SUV compact 100 % électrique dans les rues de Paris. Focus sur les f… [+2051 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "theweek.com",
            "title": "Leasing an electric vehicle",
            "description": "Here are three of the week's top pieces of financial insight, gathered from around the web: Leasing an electric vehicle A loophole enables you to get the EV you want and still qualify for a full $7,500 tax credit, said Keith Naughton in Bloomberg. All you hav…",
            "url": "https://biztoc.com/x/9ff295759a9d7f7f",
            "urlToImage": "https://c.biztoc.com/p/9ff295759a9d7f7f/og.webp",
            "publishedAt": "2023-05-07T10:00:06Z",
            "content": "Here are three of the week's top pieces of financial insight, gathered from around the web:Leasing an electric vehicleA loophole enables you to get the EV you want and still qualify for a full $7,500… [+336 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Autoblog"
            },
            "author": "Reuters",
            "title": "EV startups are about to report another quarter of fierce cash burn",
            "description": "Filed under:\n Earnings/Financials,Green,Fisker,Electric,Rivian,Lucid\n Continue reading EV startups are about to report another quarter of fierce cash burn\nEV startups are about to report another quarter of fierce cash burn originally appeared on Autoblog on S…",
            "url": "https://www.autoblog.com/2023/05/07/ev-startups-are-about-to-report-another-quarter-of-fierce-cash-burn/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/3648x2052+0+64/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2023-05/2ed10600-eb8d-11ed-b4ff-ba6661cc0ef6",
            "publishedAt": "2023-05-07T10:00:00Z",
            "content": "U.S. electric-vehicle startups are expected to report another quarter of dwindling cash reserves next week, piling pressure on a group of companies that are struggling to ramp up production and have … [+2396 chars]"
            },
            {
            "source": {
            "id": "t3n",
            "name": "T3n"
            },
            "author": null,
            "title": "Kryptowährungen kaufen: Was spricht dafür und was dagegen?",
            "description": "Der Zugang zu Bitcoin, Ether und Co. wird immer einfacher. Auch für Menschen, die sich nur wenig mit der dahinterliegenden Technologie auskennen. Was spricht für und was gegen ein Investment in Kryptos?\n\nÜber 85 Millionen Wallets für Kryptowährungen gab es 20…",
            "url": "https://t3n.de/news/pro-kontra-investieren-in-krypto-kryptowaehrung-1461923/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/03/shutterstock-1964890258.jpeg",
            "publishedAt": "2023-05-07T10:00:00Z",
            "content": "Über 85 Millionen Wallets für Kryptowährungen gab es 2022 weltweit. Das hat Grand View Research berechnet. Und die Zahl der Investierenden soll noch weiter steigen. Währen die Pleite der populären Kr… [+8171 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "The Week Staff",
            "title": "Leasing an electric vehicle",
            "description": "And more of the week's best financial insight",
            "url": "https://news.yahoo.com/leasing-electric-vehicle-095204936.html",
            "urlToImage": "https://media.zenfs.com/en/the_week_574/01288c78cc10a80077ec1785fad6ca39",
            "publishedAt": "2023-05-07T09:52:04Z",
            "content": "A view of Tesla Superchargers. Justin Sullivan/Getty Images \r\nHere are three of the week's top pieces of financial insight, gathered from around the web:\r\nLeasing an electric vehicle\r\nA loophole enab… [+2742 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Week Magazine"
            },
            "author": "The Week Staff",
            "title": "Leasing an electric vehicle",
            "description": "Here are three of the week's top pieces of financial insight, gathered from around the web:\nLeasing an electric vehicle\nA loophole enables you to get the EV you want and still qualify for a full $7,500 tax credit, said Keith Naughton in Bloomberg. All you hav…",
            "url": "https://theweek.com/tech/1023245/leasing-an-electric-vehicle",
            "urlToImage": "https://mediacloud.theweek.com/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1683221781/GettyImages-1466480794.jpg",
            "publishedAt": "2023-05-07T09:52:04Z",
            "content": "Here are three of the week's top pieces of financial insight, gathered from around the web:\r\nA loophole enables you to get the EV you want and still qualify for a full $7,500 tax credit, said Keith N… [+2352 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ixbt.com"
            },
            "author": "Technoblogger",
            "title": "Электроавтомобиль Squad Solar electric работает от солнечной батареи",
            "description": "Электромобиль Squad Solar electric — транспортное средство, являющееся детищем двух бывших сотрудников компании Lightyear. Источник: myspeed.in И это довольно интересное",
            "url": "https://www.ixbt.com/live/offtopic/elektroavtomobil-squad-solar-electric-rabotaet-ot-solnechnoy-batarei.html",
            "urlToImage": "https://img.ixbt.site/live/topics/preview/00/04/23/10/1198420397.jpg",
            "publishedAt": "2023-05-07T09:33:12Z",
            "content": "Squad Solar electric , Lightyear.\r\n, Citroen Ami, Microlino City Transformer Squad Solar electric .\r\n , , , , Squad Solar EV , , , , , , (Neighborhood Electric Vehicles-NEV).\r\n Squad, YouTube- Fully … [+229 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Protothema.gr"
            },
            "author": null,
            "title": "Ίλον Μασκ: Προτείνει αγώνα ηλεκτρικών vs μονοθεσίων της Formula 1",
            "description": "Ο ιδρυτής της Tesla βρίσκεται στο Μαϊάμι για το Grand Prix της F1 και - όπως συνήθως - θέλησε να κλέψει τα φώτα της δημοσιότητας | Formula 1 | Έλον Μασκ | Σπορ",
            "url": "https://www.protothema.gr/sports/article/1368252/ilon-mask-proteinei-agona-ilektrikon-vs-monothesion-tis-formula-1/",
            "urlToImage": "https://i1.prth.gr/images/640x360share/files/2023-05-07/musk-rbr-miami-2023.jpg",
            "publishedAt": "2023-05-07T09:32:27Z",
            "content": ", ,   , , «Innovation across the board: A Prerequisite for survival &amp; Success» Delphi Economic Forum VIII."
            },
            {
            "source": {
            "id": null,
            "name": "Meilleure-innovation.com"
            },
            "author": "Hippolyte Semin",
            "title": "Tesla Phone : 5 raisons qui freinent l’arrivée du téléphone tant attendu d’Elon Musk",
            "description": "Après les voitures, les tiny houses, la bière d’Elon Musk, et bien des objets incongrus, Tesla pourrait commercialiser un téléphone ! Désolé pour les Musk addicts, on a plusieurs arguments qui nous laissent penser qu’on n’est pas près de voir un jour le Tesla…",
            "url": "https://www.meilleure-innovation.com/smartphone-tesla-sortie-elon-musk/",
            "urlToImage": "https://www.meilleure-innovation.com/wp-content/uploads/2023/03/elon-musk-tesla-phone.png",
            "publishedAt": "2023-05-07T09:31:34Z",
            "content": "<!DOCTYPE html>\n\nAprès les voitures, les tiny houses, la bière d’Elon Musk, et bien des objets incongrus, Tesla pourrait commercialiser un téléphone ! Désolé pour les Musk addicts, on a plusieurs arg… [+7091 chars]"
            },
            {
            "source": {
            "id": "marca",
            "name": "Marca"
            },
            "author": "ENRIQUE NARANJO",
            "title": "Elon Musk visita la Fórmula 1... y lanza una propuesta de competición",
            "description": "El Gran Premio de Miami posiblemente batirá el récord de VIPS presentes en un paddock de Fórmula 1 en toda la historia de la competición (al menos hasta que llegue Las Vegas). Pero",
            "url": "https://www.marca.com/coches-y-motos/coches/tesla/2023/05/07/64575fd0ca474169358b458d.html",
            "urlToImage": "https://phantom-marca.unidadeditorial.es/a25ca85c2ab37aad9a8830e0db733b7b/crop/0x0/2044x1363/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/07/16834457212025.jpg",
            "publishedAt": "2023-05-07T09:27:12Z",
            "content": "El Gran Premio de Miami posiblemente batirá el récord de VIPS presentes en un paddock de Fórmula 1 en toda la historia de la competición (al menos hasta que llegue Las Vegas). Pero este sábado hubo u… [+1833 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Sapo.pt"
            },
            "author": "Ana Sofia Neto",
            "title": "“Se quiser ver a IA a dar errado e a matá-lo, compre um Tesla”, disse cofundador da Apple",
            "description": "Numa altura em as potencialidades e os riscos da Inteligência Artificial (IA) estão sob rigoroso escrutínio, gerando preocupações e alertas, o cofundador da Apple junta a Tesla à discussão: “se quiser ver a IA...",
            "url": "https://pplware.sapo.pt/inteligencia-artificial/se-quiser-ver-a-ia-a-dar-errado-e-a-mata-lo-compre-um-tesla-disse-cofundador-da-apple/",
            "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2021/10/tesla_model_s00.jpg",
            "publishedAt": "2023-05-07T09:00:44Z",
            "content": "Numa altura em as potencialidades e os riscos da Inteligência Artificial (IA) estão sob rigoroso escrutínio, gerando preocupações e alertas, o cofundador da Apple junta a Tesla à discussão: \"se quise… [+1533 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Caschys Blog"
            },
            "author": "Felix Frank",
            "title": "KBA-Fahrzeugzulassungen: Weiterhin starker Zulauf für E-Autos",
            "description": "Wir hatten bereits in den vergangenen Monaten einen Blick auf die Fahrzeugneuzulassungen vorgenommen. Dies ist insbesondere aufgrund der steigenden Zulassungszahlen bei E-Autos eine spannende Angelegenheit. Im April wurden mit 202.947 Fahrzeugen abermals eine…",
            "url": "https://stadt-bremerhaven.de/kba-fahrzeugzulassungen-weiterhin-starker-zulauf-fuer-e-autos/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/11/2022-11-23-18.50.54.jpg",
            "publishedAt": "2023-05-07T09:00:24Z",
            "content": "Wir hatten bereits in den vergangenen Monaten einen Blick auf die Fahrzeugneuzulassungen vorgenommen. Dies ist insbesondere aufgrund der steigenden Zulassungszahlen bei E-Autos eine spannende Angeleg… [+2003 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hibridosyelectricos.com"
            },
            "author": "Alberto Pérez",
            "title": "Ford se inspira en el Model Y para lanzar un SUV eléctrico de 7 plazas con un nombre muy parecido",
            "description": "Jim Farley continúa en boca de todos después de su última intervención donde comparaba a los coches eléctricos de Tesla con el mítico Ford Modelo T de hace más de un siglo, debido a que, según él, es un producto \"básico y fabricado para masas\". No obstante, a…",
            "url": "https://www.hibridosyelectricos.com/coches/ford-se-inspira-en-model-lanzar-suv-electrico-7-plazas-con-nombre-muy-parecido_69316_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/44/71/28/mustang-mache_6_489x275.jpeg",
            "publishedAt": "2023-05-07T09:00:00Z",
            "content": "Jim Farley continúa en boca de todos después de su última intervención donde comparaba a los coches eléctricos de Tesla con el mítico Ford Modelo T de hace más de un siglo, debido a que, según él, es… [+3351 chars]"
            },
            {
            "source": {
            "id": "la-repubblica",
            "name": "La Repubblica"
            },
            "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
            "title": "E' sempre una questione di prezzo e per l'auto elettrica è troppo alto",
            "description": null,
            "url": "https://www.repubblica.it/motori/sezioni/attualita/2023/05/07/news/e_sempre_una_questione_di_prezzo_e_per_lauto_elettrica_e_troppo_alto-398681383/",
            "urlToImage": "https://www.repstatic.it/content/nazionale/img/2023/05/04/081714127-c8471276-e338-4425-9834-b6dca5c4e899.jpg",
            "publishedAt": "2023-05-07T08:34:54Z",
            "content": "E quasi sempre una questione di prezzo. Se vi piace unauto, ne studiate le caratteristiche, confrontate le prestazioni ma poi arrivate sempre alla stessa domanda: ma quanto costa? Cè il prezzo giusto… [+2356 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Turbo.fr"
            },
            "author": "Khalil Bouguerra",
            "title": "Tesla Model S Plaid : des performances encore plus incroyables grâce au Pack Piste",
            "description": "En modifiant les jantes, les pneus, les freins et en relevant la vitesse maximale à 322 km/h, la Tesla Model S Plaid va faire beaucoup de jaloux. \nC'est à travers une courte vidéo publiée sur Twitter que Tesla annonce l'arrivée du Pack Piste sur la terrible M…",
            "url": "https://www.turbo.fr/actualite-automobile/tesla-model-s-plaid-des-performances-encore-plus-incroyables-grace-au-pack-piste-190489",
            "urlToImage": "https://www.turbo.fr/sites/default/files/2023-05/Tesla%20Model%20S%20Plaid%20Track%20pack.jpg",
            "publishedAt": "2023-05-07T08:31:00Z",
            "content": "En modifiant les jantes, les pneus, les freins et en relevant la vitesse maximale à 322 km/h, la Tesla Model S Plaid va faire beaucoup de jaloux. \r\nC'est à travers une courte vidéo publiée sur Twitte… [+2324 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hibridosyelectricos.com"
            },
            "author": "Javier Gómara",
            "title": "Mercedes retrasa un año los planes para sus coches eléctricos por algo muy evidente",
            "description": "El mercado de los coches eléctricos avanza más deprisa que las ventas en sí. Los objetivos europeos fijan el 2035 como el año límite para la comercialización de coches con motores de combustión. Mercedes es una de las empresas más aventajadas en el terreno de…",
            "url": "https://www.hibridosyelectricos.com/coches/mercedes-retrasa-planes-coches-electricos-algo-muy-evidente_69317_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/44/71/74/ceo-mercedes_6_489x275.jpeg",
            "publishedAt": "2023-05-07T08:30:00Z",
            "content": "El mercado de los coches eléctricos avanza más deprisa que las ventas en sí. Los objetivos europeos fijan el 2035 como el año límite para la comercialización de coches con motores de combustión. Merc… [+3282 chars]"
            },
            {
            "source": {
            "id": "der-tagesspiegel",
            "name": "Der Tagesspiegel"
            },
            "author": "Jens Marx, dpa",
            "title": "Formel-1-Grand-Prix: Sergio Pérez auf Pole in Miami",
            "description": "Nicht Verstappen, sondern Pérez. Der Mexikaner holt die Miami-Pole. Verstappen macht einen Fehler. Beim nächsten Versuch sorgt Leclerc fürs vorzeitige Quali-Ende.",
            "url": "https://www.tagesspiegel.de/sport/formel-1-grand-prix-sergio-perez-auf-pole-in-miami-9778013.html",
            "urlToImage": "https://www.tagesspiegel.de/images/grosser-preis-von-miami/alternates/BASE_16_9_W1400/grosser-preis-von-miami.jpeg",
            "publishedAt": "2023-05-07T08:15:04Z",
            "content": "Ein Crash von Charles Leclerc in der vorletzten Minute hat die Hoffnungen von Max Verstappen auf die Pole beim Großen Preis von Miami geraubt. Der rutschende Ferrari befeuerte unfreiwillig das hitzig… [+4616 chars]"
            },
            {
            "source": {
            "id": "wirtschafts-woche",
            "name": "Wirtschafts Woche"
            },
            "author": "Martin Seiwert",
            "title": "BYD-Vertriebschef für Deutschland: „Wir machen keine Schleuderpreise, nur weil es eine für Deutschland neue Marke ist“",
            "description": "BYD verkauft in China fünfzehn Mal so viele E-Autos wie VW. Nun greift der chinesische Konzern in Deutschland an. Ziel sei die Marktführerschaft, sagt Lars Pauly, der den BYD-Vertrieb in Deutschland leitet.",
            "url": "https://www.wiwo.de/unternehmen/auto/byd-vertriebschef-fuer-deutschland-wir-machen-keine-schleuderpreise-nur-weil-es-eine-fuer-deutschland-neue-marke-ist/29134166.html",
            "urlToImage": "https://www.wiwo.de/images/a-byd-atto-3-electric-sports-utility-vehicle-gets-charged-as-it-is-displayed-at-a-byd-dealership-on-april-4-2023-in-yokohama-near-tokyo-byd-auto-is-part-of-a-wave-of-chinese-electric-car-exporters-that-are-starting-to-compete-with-western-and-japanese-brands-in-their-home-markets-they-bring-fast/29134704/2-format11240.jpg",
            "publishedAt": "2023-05-07T08:04:37Z",
            "content": "WirtschaftsWoche: Herr Pauly, ich habe mir bei Sixt einen BYD Atto 3 zum Test ausgeliehen. Ich muss sagen, ich habe kaum Schwächen gefunden. Allerdings ist das Innenraumdesign bei meiner Frau komplet… [+4308 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hibridosyelectricos.com"
            },
            "author": "Alejandro González",
            "title": "Iban a ser solo 1.400 euros, pero este pequeño golpe con una Rivian R1T acabó con una factura de 38.000 euros",
            "description": "Integrar todos los componentes de un coche eléctrico de manera efectiva y segura en la estructura del mismo lleva muchas veces a complicar los más simples procesos de desmontaje y reparación. Sin embargo, no parece ser esta la causa de uno de los últimos suce…",
            "url": "https://www.hibridosyelectricos.com/coches/iban-ser-solo-1400-euros-pero-este-pequeno-golpe-con-rivian-r1t-acabo-con-factura-38000-euros_69322_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/44/73/66/imagen-del-incidente_6_489x275.jpeg",
            "publishedAt": "2023-05-07T08:00:00Z",
            "content": "Integrar todos los componentes de un coche eléctrico de manera efectiva y segura en la estructura del mismo lleva muchas veces a complicar los más simples procesos de desmontaje y reparación. Sin emb… [+2624 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "kicker"
            },
            "author": "kicker",
            "title": "Cupra boomt - doch was wird aus Seat?",
            "description": "Cupra, die sportliche Tochtermarke von Seat, hat die Muttermarke längst überflügelt. Auch elektrische Pkw sollen ausschließlich unter Cupra-Label laufen. Das wirft Fragen nach der Zukunft von Seat auf.",
            "url": "https://www.kicker.de/cupra-boomt-doch-was-wird-aus-seat-949427/artikel",
            "urlToImage": "https://derivates.kicker.de/image/upload/c_crop,x_0,y_0,w_4000,h_2250/w_1200,q_auto/v1/2023/05/01/b04fcc3a-2418-48ae-aa7e-e225364247b3.jpeg",
            "publishedAt": "2023-05-07T07:48:00Z",
            "content": "Cupra, die sportliche Tochtermarke von Seat, hat die Muttermarke längst überflügelt. Auch elektrische Pkw sollen ausschließlich unter Cupra-Label laufen. Das wirft Fragen nach der Zukunft von Seat au… [+5294 chars]"
            },
            {
            "source": {
            "id": "marca",
            "name": "Marca"
            },
            "author": "ENRIQUE NARANJO",
            "title": "¿Cuántos coches se venden en el mundo? ¿Cuál es el más vendido?",
            "description": "La radiografía que JATO Dynamics hace cada año del mercado mundial de automóviles nos sirve para establecer el ranking de los coches más vendidos en todo el planeta... y nos demues",
            "url": "https://www.marca.com/coches-y-motos/coches/suv/2023/05/07/64574eb7ca47411d2e8b4590.html",
            "urlToImage": "https://phantom-marca.unidadeditorial.es/8d4ab2d34aca8936b62cc35e604740b2/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/07/16834436071566.jpg",
            "publishedAt": "2023-05-07T07:37:00Z",
            "content": "La radiografía que JATO Dynamics hace cada año del mercado mundial de automóviles nos sirve para establecer el ranking de los coches más vendidos en todo el planeta... y nos demuestra, una vez más, q… [+4867 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hibridosyelectricos.com"
            },
            "author": "Alberto Pérez",
            "title": "Alfa Romeo acelera sus planes de electrificación porque \"Tesla está pateando el trasero a todos\"",
            "description": "La compañía italiana afronta su futuro totalmente eléctrico. Alfa Romeo, considerada como una de las marcas prémium dentro de Stellantis, será una de las primeras en hacer el cambio total de sus mecánicas. Su actual directiva ha puntualizado que deben \"pisar …",
            "url": "https://www.hibridosyelectricos.com/coches/alfa-romeo-acelera-planes-electrificacion-tesla-esta-pateando-trasero-todos_69300_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/44/65/21/concept_6_489x275.jpeg",
            "publishedAt": "2023-05-07T07:30:00Z",
            "content": "La compañía italiana afronta su futuro totalmente eléctrico. Alfa Romeo, considerada como una de las marcas prémium dentro de Stellantis, será una de las primeras en hacer el cambio total de sus mecá… [+3372 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Alphafreepress.gr"
            },
            "author": "Ευτυχία Παπούλια",
            "title": "Formula 1 Τζεφ Μπέζος: Έκλεψε τις εντυπώσεις η σύντροφος του αφεντικού της Amazon",
            "description": "Στο Μαϊάμι για δεύτερη χρονιά επέστρεψε για αυτό το αγωνιστικό τριήμερο η Formula 1, με τους σελέμπριτι και φέτος να πλημμυρίζουν το σιρκουί",
            "url": "https://www.alphafreepress.gr/2023/05/07/athlitismos/formula-1-tzef-mpezos-eklepse-tis-entyposeis-i-syntrofos-tou-afentikou-tis-amazon/",
            "urlToImage": "https://www.alphafreepress.gr/wp-content/uploads/2023/05/bezzos.jpg",
            "publishedAt": "2023-05-07T07:27:49Z",
            "content": "Formula 1, . . Grand Prix , pit lane Formula 1 F1 . Twitter grand prix. Red Bull FP3, Christian Horner.\r\n Tesla SpaceX Formula 1 . , Musk , Horner . F1 Max Verstappen.\r\n Formula 1 \r\n 51 pit lane . . … [+196 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Remeredzai Joseph Kuhudzai",
            "title": "BYD & Geely Continue To Lead The Way In Israel BEV Sales",
            "description": "BYD and Geely continue to lead the way in Israel’s BEV market. In April, BYD sold 1,377 units, most of which were the BYD Atto 3. The BYD Tang and the Han are now also available in Israel and they each registered some decent numbers there, with the Han gettin…",
            "url": "https://cleantechnica.com/2023/05/07/byd-geely-continue-to-lead-the-way-in-israel-bev-sales/",
            "urlToImage": "http://cleantechnica.com/files/2023/05/January-To-April.png",
            "publishedAt": "2023-05-07T07:22:48Z",
            "content": "BYD and Geely continue to lead the way in Israels BEV market. In April, BYD sold 1,377 units, most of which were the BYD Atto 3. The BYD Tang and the Han are now also available in Israel and they eac… [+3845 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Interia.pl"
            },
            "author": "Krzysztof Mocek",
            "title": "Strzelanina przy ładowarkach Tesli. Pokłócili się o miejsce i jeden wyjął broń",
            "description": "W mieście Edgewater doszło do śmiertelnej strzelaniny, w której wzięło udział dwóch dorosłych mężczyzn. Jak wynika z informacji zebranych przez amerykańskie media – kierowcy mieli pokłócić się o miejsce do ładowania.",
            "url": "https://motoryzacja.interia.pl/wiadomosci/ciekawostki/news-strzelanina-przy-ladowarkach-tesli-poklocili-sie-o-miejsce-i,nId,6759100",
            "urlToImage": "https://i.iplsc.com/-/000H43JMRH3YOHCA-C429-F4.jpg",
            "publishedAt": "2023-05-07T07:06:46Z",
            "content": "Biuro szeryfa hrabstwa Jefferson i policja Edgewater prowadz dochodzenie w sprawie strzelaniny, do której doszo na jednej ze stacji adowania marki Tesla. Zdarzenie miao miejsce w godzinach porannych … [+1058 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Mojandroid.sk"
            },
            "author": "Miroslav Schwamberg",
            "title": "Čo týždeň dal: Prehľad najdôležitejších udalostí týždňa (18/2023)",
            "description": "Prehľad najzaujímavejších technologických tém, o ktorých sme informovali počas uplynulého týždňa.",
            "url": "https://www.mojandroid.sk/co-tyzden-dal-18-2023/",
            "urlToImage": "https://www.mojandroid.sk/wp-content/uploads/2022/08/Samsung-Galaxy-Watch5-Pro-4.jpg",
            "publishedAt": "2023-05-07T07:00:32Z",
            "content": "Aj poas uplynulého týda sa vo svete technológií udialo mnoho zaujímavých vecí. Ak ste nestihli zachyti vetky novinky, nevadí. V tomto lánku vám prináame prehad tých najdôleitejích, ktoré by ste si ne… [+1930 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Challenges"
            },
            "author": "Alain-Gabriel Verdevoye",
            "title": "Opération relance pour l'automobile \"made in France\"",
            "description": "Formation massive, innovation, usines compactes… Constructeurs et équipementiers automobiles français mènent une ambitieuse transition pour monter en gamme et ne pas louper le virage de la voiture électrique. Derrière cette stratégie, un objectif principal: p…",
            "url": "https://www.challenges.fr/automobile/michelin-forvia-valeo-operation-relance-pour-lautomobile-made-in-france_854272",
            "urlToImage": "https://www.challenges.fr/assets/img/2023/05/04/cover-r4x3w1200-64539ea4788e0-33433-1936440-k2-k1-4474268-jpg.jpg",
            "publishedAt": "2023-05-07T07:00:00Z",
            "content": "Pour maintenir l'activité, salariés et dirigeants ont opté pour une ultra-spécialisation dans des produits de pointe destinés à des voitures à très hautes performances. Fini, les pneus trop concurren… [+8939 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Protothema.gr"
            },
            "author": null,
            "title": "Video: Επιμένουν να προσπαθούν να βάλουν βενζίνη σε Tesla",
            "description": "Τι και αν η ηλεκτροκίνηση έχει μπει πλέον για τα καλά στη ζωή μας; Κάποιοι ακόμα επιμένουν στο φουλάρισμα βενζίνης ακόμα και σε ένα Tesla! | Newsauto.gr",
            "url": "https://www.protothema.gr/newsautogr/article/1368195/video-epimenoun-na-prospathoun-na-valoun-venzini-se-tesla/",
            "urlToImage": "https://i1.prth.gr/images/640x360share/files/2023-05-07/Στιγμιοτυπο_οθονης_2023-05-07__9_29_32_πμ.png",
            "publishedAt": "2023-05-07T06:31:00Z",
            "content": "Content snippet: CookieBar"
            },
            {
            "source": {
            "id": null,
            "name": "Techbang.com"
            },
            "author": "數位時代",
            "title": "台灣特斯拉Model S、Model X調漲8萬元！價格血戰落幕了？",
            "description": "特斯拉（Tesla）近期在中國、美國市場進行售價調漲，台灣特斯拉也跟進，Model Y、Model S、Model X各車型價格調整，調幅最高達8萬元電動車大廠特斯拉（Tesla）掀起的價格戰看似進入尾聲，近期特斯拉在中國、美國市場進行售價調漲，台灣特斯拉也在5月進行Model Y、Model S 與 Model X各車型價格調整，調幅從8千至8萬元不等，漲幅達2.6%。雖然漲價，但台灣特斯拉祭出限時免費超級充電服務來回饋消費者。\n<ul>\n<li>延伸閱讀：新款特斯拉 Model 3 實車首曝：前臉設計微調，大…",
            "url": "https://www.techbang.com/posts/106002-taiwans-tesla-model-s-and-model-x-increased-by-80000-yuan-a",
            "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/106002/original/cc2654b95cee8b1de959efb67b31b3ad.jpg?1683277893",
            "publishedAt": "2023-05-07T06:30:00Z",
            "content": "Tesla5Model YModel S Model X882.6%\r\n202320\r\n124%233.324%2519.2%11.4%29.1%19.34%\r\n5Model YModel SModel X\r\nModel S Model X 80,000 Model S 3,129,900 Model S Plaid 3,449,900 Model X 3,569,900 Model X Pla… [+95 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "Европейская гамма электромобилей Tesla пополняется новыми цветами окраски",
            "description": "Почти как вишнёвая девятка, только Model Y.",
            "url": "https://overclockers.ru/hardnews/show/125815/evropejskaya-gamma-elektromobilej-tesla-popolnyaetsya-novymi-cvetami-okraski",
            "urlToImage": "https://overclockers.ru/st/images/preview/T9HJr5g8Imdh8M48.jpg",
            "publishedAt": "2023-05-07T06:03:00Z",
            "content": "Tesla , . LFP-, 4680. , , , Electrek.\r\nTesla , . , . , . Tesla , . , ."
            },
            {
            "source": {
            "id": null,
            "name": "Motor.ru"
            },
            "author": "Александр Пономарёв",
            "title": "Обновлённые Mercedes‑AMG GT 4-Door Coupe, трековый пакет для Tesla Model S Plaid и новый электрический MINI Cooper: главное за неделю",
            "description": "Из этой подборки вы, как обычно, узнаете пять главных автомобильных новостей минувшей недели. Всё только самое интересное: Mercedes‑AMG обновил шестицилиндровые GT 4-Door Coupe, трёхмоторная Tesla Model S Plaid обзавелась трековым пакетом, MINI показала новый…",
            "url": "https://motor.ru/news/week-07-05-2023.htm",
            "urlToImage": "https://motor.ru/imgs/2023/05/06/21/5897374/6222be4cc1792fbc0fa5b7407f0c2d6432ac153a.jpg",
            "publishedAt": "2023-05-07T06:00:00Z",
            "content": ", , . : MercedesAMG GT 4-Door Coupe, Tesla Model S Plaid , MINI Cooper, Toyota Crown Sport, Laffite ."
            },
            {
            "source": {
            "id": null,
            "name": "Iltalehti.fi"
            },
            "author": null,
            "title": "Tesla-kuljettajien kiista latausasemalla päättyi toisen kuolemaan Yhdysvalloissa",
            "description": "Poliisi uskoi aluksi ammuskelun liittyneen riitaan latauspaikasta, mutta veti lausuntonsa myöhemmin takaisin. Rattiraivo on tunnettu ilmiö, joka voi häiriökäyttäytymisen ohella pahimmillaan johtaa jopa väkivallantekoihin, mutta toisiin ihmisiin kohdistuva lat…",
            "url": "https://www.iltalehti.fi/sahkoautot/a/4884f60b-41e6-431d-ac8f-7180e3df5543",
            "urlToImage": "https://img.ilcdn.fi/0btgBg6nk-uEd9e5-kZ6TDjIf5Q=/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/3119dcaf13856c05a74cece9da62a6d7ed71e04287339389a4c183d2373b9422.jpg",
            "publishedAt": "2023-05-07T05:39:14Z",
            "content": "Rattiraivo on tunnettu ilmiö, joka voi häiriökäyttäytymisen ohella pahimmillaan johtaa jopa väkivallantekoihin, mutta toisiin ihmisiin kohdistuva latausasemaraivo on suorastaan ennenkuulumatonta.\r\nNy… [+1544 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Pravda.sk"
            },
            "author": "Pravda",
            "title": "Najbohatší ľudia na svete na formule 1. Do garáží tímov si to namierili šéf Tesly a zakladateľ Amazonu",
            "description": "Zakladateľ Amazonu a šéf spoločnosti Tesla spôsobili v Miami rozruch.",
            "url": "https://sportweb.pravda.sk/motorizmus/clanok/666507-najbohatsi-ludia-na-svete-na-formule-1-do-garazi-timov-si-to-namierili-musk-aj-bezos/",
            "urlToImage": "http://ipravda.sk/res/2023/05/07/thumbs/collage-maker-07-may-2023-07-22-am-2257-clanokW.jpg",
            "publishedAt": "2023-05-07T05:24:22Z",
            "content": "Poas tréningu na Vekú cenu Miami formuly 1 privítali v McLarene a Red Bulle vzácnych hostí. Do garáe prvého priiel zakladate Amazonu Jeff Bezos, v Red Bulle sa ukázal majite Tesly Elon Musk. Pozrite … [+48 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Evaluamos.com"
            },
            "author": null,
            "title": "6G Fucsia â Xbox se da por vencida",
            "description": "âCompra un Tesla y verás como te mata la IAâ, En junio se conocerá el plan para conectar al Pacífico Colombiano [2023-05-07]",
            "url": "http://www.evaluamos.com/2011/internal.php?load=detail&id18402",
            "urlToImage": null,
            "publishedAt": "2023-05-07T05:00:00Z",
            "content": "Suscribase a nuestro boletï¿½n de noticias."
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Guest Contributor",
            "title": "Elon Musk’s Long-Term Bet On Tesla Full Self-Driving",
            "description": "During Tesla’s recent first-quarter earnings call, CEO Elon Musk focused on Full Self-Driving as a future value driver for the company. While some analysts shared concerns around price cuts affecting the company’s margins, Musk reassured investors that Tesla’…",
            "url": "https://cleantechnica.com/2023/05/07/elon-musks-long-term-bet-on-tesla-full-self-driving/",
            "urlToImage": "http://cleantechnica.com/files/2022/02/Tesla-FSD-Beta-Steering-Wheel-Bazaar-Zach-Shahan-CleanTechnica-watermark.png",
            "publishedAt": "2023-05-07T04:52:00Z",
            "content": "During Teslas recent first-quarter earnings call, CEO Elon Musk focused on Full Self-Driving as a future value driver for the company. While some analysts shared concerns around price cuts affecting … [+3980 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "ft.com",
            "title": "Will a price war accelerate the switch to electric cars?",
            "description": "Tesla’s effort to boost demand is forcing rivals and banks to change plans #tesla",
            "url": "https://biztoc.com/x/7c58d5e7cbd79dac",
            "urlToImage": "https://c.biztoc.com/190/og.png",
            "publishedAt": "2023-05-07T04:38:05Z",
            "content": "Teslas effort to boost demand is forcing rivals and banks to change plans \r\n#tesla\r\n This story appeared on ft.com, 2023-05-07."
            },
            {
            "source": {
            "id": null,
            "name": "NDTV News"
            },
            "author": null,
            "title": "\"Didn't Have Happy Childhood\": Elon Musk On Financial Situation While Growing Up",
            "description": "Elon Musk said that his father, Errol Musk, \"did not support me financially after high school in any meaningful way.\"",
            "url": "https://www.ndtv.com/world-news/didnt-have-happy-childhood-elon-musk-on-financial-situation-while-growing-up-4012487",
            "urlToImage": "https://c.ndtvimg.com/2023-01/e3p66s1o_elon-musk-afp-650_650x400_26_January_23.jpg",
            "publishedAt": "2023-05-07T04:32:18Z",
            "content": "Mr Musk said he has not \"inherited anything ever from anyone\".\r\nBillionaire Elon Musk, who owns and manages several companies like Twitter, Tesla and SpaceX has always been vocal about his journey fr… [+3660 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Twistedsifter.com"
            },
            "author": "Trisha Leigh",
            "title": "What Inventions Might Not Seem Important Now But Will Have A Big Impact In The Future? People Share Their Thoughts.",
            "description": "It's going to be an interesting couple of decades, for sure.",
            "url": "http://twistedsifter.com/2023/05/what-inventions-might-not-seem-important-now-but-will-have-a-big-impact-in-the-future-people-share-their-thoughts/",
            "urlToImage": "https://twistedsifter.com/wp-content/uploads/2023/05/Untitled-Design-2023-05-02T150130.960.png",
            "publishedAt": "2023-05-07T04:23:39Z",
            "content": "There are some inventions that we know are going to be huge as soon as we hear about them – the air fryer comes to mind – and others that honestly end up taking us by surprise.\r\nEven though these ide… [+7279 chars]"
            },
            {
            "source": {
            "id": "la-nacion",
            "name": "La Nacion"
            },
            "author": "Luciana Vázquez",
            "title": "Eduardo Porter. “No está claro que el interés de China en América Latina responda a una lógica imperial”",
            "description": "El periodista estadounidense, columnista de Bloomberg especializado en América Latina, considera que la presencia del gigante asiático en la región tiene que ver con intereses  económicos y, de momento, no representa una amenaza estratégica para Washington",
            "url": "https://www.lanacion.com.ar/opinion/eduardo-porter-no-esta-claro-que-el-interes-de-china-en-america-latina-responda-a-una-logica-nid07052023/",
            "urlToImage": "https://resizer.glanacion.com/resizer/OvqdkGVLhQj6HjGlwQKmv8HUp4Q=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/2NYMK75RRRHXHI3VNZS4GL26NQ.jpg",
            "publishedAt": "2023-05-07T04:09:00Z",
            "content": "No está claro que el interés de China en América Latina responda a una lógica imperial, afirma y desarrolla: Hay un interés mayor de China en América Latina pero no es necesariamente una amenaza estr… [+24416 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Pravda.sk"
            },
            "author": "Pravda",
            "title": "Vedci zlepšili zobrazovanie magnetickou rezonanciou. Skenovanie mozgu je tak 64 miliónov krát ostrejšie",
            "description": "Vedci nikdy nevideli myší mozog tak podrobne ako teraz.",
            "url": "https://vat.pravda.sk/technologie/clanok/664802-vedci-zlepsili-zobrazovanie-magnetickou-rezonanciou-skenovanie-mozgu-je-teraz-64-milionov-krat-ostrejsie/",
            "urlToImage": "http://ipravda.sk/res/2023/04/23/thumbs/mozog_01-clanokW.jpg",
            "publishedAt": "2023-05-07T04:00:00Z",
            "content": "Vedci nikdy nevideli myí mozog tak podrobne ako teraz. Tímy z amerických univerzít pouili vylepenú metódu magnetickej rezonancie, ktorú modifikovali takmer tyridsa rokov. V porovnaní so súasným zobra… [+2895 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Bolsamania.com"
            },
            "author": "Carlos Suárez",
            "title": "De General Motors a Celanese: cómo sacar provecho del vehículo eléctrico",
            "description": "Ante la creciente popularidad de los vehículos eléctricos, cuyas ventas podrían alcanzar el 40% de las ventas totales de automóviles en 2030, los analistas de Morningstar se preguntan cuáles son las mejores oportunidades de inversión en la industria.",
            "url": "https://www.bolsamania.com/noticias/empresas/general-motors-celanese-como-sacar-provecho-vehiculo-electrico--13282930.html",
            "urlToImage": "https://img2.s3wfg.com/web/img/images_uploaded/d/b/ep_archivo_-_cargador_de_coche_electrico_de_wallbox.jpg",
            "publishedAt": "2023-05-07T04:00:00Z",
            "content": "Ante la creciente popularidad de los vehículos eléctricos, cuyas ventas podrían alcanzar el 40% de las ventas totales de automóviles en 2030, los analistas de Morningstar se preguntan cuáles son las … [+1964 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "newsbtc.com",
            "title": "Stuck In Bearish Trend",
            "description": "The Dogecoin market saw a significant drop in price on May 4 to a low of $0.077 but eventually increased by 5.19% the next day. Despite the bear’s pressure, Dogecoin bulls are struggling to regain positive market sentiment. Notably, the Dogecoin price has exp…",
            "url": "https://biztoc.com/x/29e4ae190ddd013d",
            "urlToImage": "https://c.biztoc.com/p/29e4ae190ddd013d/og.webp",
            "publishedAt": "2023-05-07T03:58:05Z",
            "content": "The Dogecoin market saw a significant drop in price on May 4 to a low of $0.077 but eventually increased by 5.19% the next day. Despite the bears pressure, Dogecoin bulls are struggling to regain pos… [+289 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nacion.com"
            },
            "author": "Armando González R.",
            "title": "Sin culpa, como el Arcipreste",
            "description": "La inteligencia artificial ofrece extraordinarios beneficios a la humanidad, pero esta vez la promesa se hace acompañar de una amenaza existencial.",
            "url": "https://www.nacion.com/opinion/columnistas/sin-culpa-como-el-arcipreste/RA35VQL5JBFYLDTMCNVVZOWJNA/story/",
            "urlToImage": "https://www.nacion.com/resizer/8RURY150CMeZl7x1pw3yN1YUojo=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/F6SYMVV55FFEZO4DDLHDZH3JWQ.jpg",
            "publishedAt": "2023-05-07T03:20:00Z",
            "content": "Geoffrey Hinton, conocido como el padrino de la inteligencia artificial, renunció a su alto cargo en Google para advertir a la humanidad, sin cortapisas impuestas por su relación con el gigante tecno… [+2516 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Lavozdegalicia.es"
            },
            "author": "S. Cabrero",
            "title": "Los automóviles chinos ganan terreno",
            "description": "El porcentaje de vehículos nuevos de marcas europeas pierde peso en España, donde estos últimos meses ha logrado colarse un cuatro ruedas que tiene su origen en el gigante asiático",
            "url": "https://www.lavozdegalicia.es/noticia/mercados/2023/05/07/automoviles-chinos-ganan-terreno/0003_202305SM7P11991.htm",
            "urlToImage": "https://www.lavozdegalicia.es/default/2023/05/05/00121683240782330236318/Foto/SMY7P11F1_05148.jpg",
            "publishedAt": "2023-05-07T03:00:00Z",
            "content": "A pesar de que los efectos del coronavirus y de la poltica de cero covid lastraron la industria china hasta niveles nunca vistos, parece que el imperio asitico sigue pisando con fuerza. Lo hace inclu… [+4765 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Srad.jp"
            },
            "author": "headless",
            "title": "子供に違法労働させるマクドナルド米フランチャイズ店舗、10 歳の従業員も 2 人見つかる",
            "description": "米労働省の発表によると、ケンタッキー州でマクドナルドのフランチャイズ店舗が 10 歳児を含む 16 歳未満の子供 305 人を雇い、違法に労働させていたそうだ\n(プレスリリース、\nFOODBEAST の記事、\nFOX19 の記事、\nLEO Weekly の記事)。\n\n子供に違法労働させていたのは、ケンタッキー州で計 62 店舗のマクドナルドを経営するフランチャイジー 3 社。多くは 14 歳と 15 歳を雇い、米労働法で認められる労働時間を超えて働かせていたようだ。\n\n米労働法では 14 ～ 15 歳を修学時間中…",
            "url": "https://idle.srad.jp/story/23/05/07/019256/",
            "urlToImage": "https://srad.jp/static/topics/usa_64.png",
            "publishedAt": "2023-05-07T01:32:00Z",
            "content": "10 16 305 \r\n(FOODBEAST FOX19 LEO Weekly )62 3 14 15 \r\n14 15 3 8 18 40 7 7 6 1 9 1 () 9 \r\nBauer Food 16 24 10 2 ( ) 2 10 16 \r\n3 21"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk shoots for the moon. Buffett and Munger want fewer failures",
            "description": "Warren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting. • The Tesla chief tackles complex problems, resulting in major wins and losses, they said. • \"We don't want that much failure,\" Munger said, explaining why they …",
            "url": "https://biztoc.com/x/70e269a580fe1328",
            "urlToImage": "https://c.biztoc.com/p/70e269a580fe1328/og.webp",
            "publishedAt": "2023-05-07T01:22:09Z",
            "content": "Warren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting.The Tesla chief tackles complex problems, resulting in major wins and losses, they said.\"We don't want… [+316 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "kdvr.com",
            "title": "Man killed in shooting at Tesla charging station identified",
            "description": "The man killed in a shooting at a Tesla charging station Wednesday was identified Saturday as 33-year-old Adam Michael Fresquez. Fresquez, a Denver resident, leaves behind a wife and two small children. Around 9:40 a.m. Wednesday, police responded to the Edge…",
            "url": "https://biztoc.com/x/b355a85e6c2961d3",
            "urlToImage": "https://c.biztoc.com/p/b355a85e6c2961d3/og.webp",
            "publishedAt": "2023-05-07T00:54:05Z",
            "content": "The man killed in a shooting at a Tesla charging station Wednesday was identified Saturday as 33-year-old Adam Michael Fresquez.Fresquez, a Denver resident, leaves behind a wife and two small childre… [+260 chars]"
            },
            {
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "Petlee Peter",
            "title": "Bengalurean’s tribute to BMTC driver: Gets bus registration number for his Tesla car",
            "description": "Old Bangalore and bus journeys often stoke nostalgia in many Bengalureans. While some fall back on photographs or memorabilia to rekindle memories of the good old days, here's a man who cherishes his favourite BMTC bus and its driver who drove him to school -…",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/bengalureans-tesla-tribute-to-route-401b-bmtc-driver/articleshow/100043734.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-100043731,width-1070,height-580,imgsize-792067,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-05-06T23:40:30Z",
            "content": "In MP's Bandhavgarh, signs of 2,000-year-old 'modern society'"
            },
            {
            "source": {
            "id": null,
            "name": "Sapo.pt"
            },
            "author": "Pedro Simões",
            "title": "Volante Yoke da Tesla passou a ser um extra nos carros elétricos e é bem caro",
            "description": "A presença do volante Yoke nos carros elétricos da Tesla nunca foi um tema consensual. A marca adotou este novo modelo, que de início criou algum interesse, mas rapidamente percebeu o seu erro. O...",
            "url": "https://pplware.sapo.pt/motores/volante-yoke-da-tesla-passou-a-ser-um-extra-nos-carros-eletricos-e-e-bem-caro/",
            "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/05/volnate_tesla_1.jpg",
            "publishedAt": "2023-05-06T23:30:08Z",
            "content": "A presença do volante Yoke nos carros elétricos da Tesla nunca foi um tema consensual. A marca adotou este novo modelo, que de início criou algum interesse, mas rapidamente percebeu o seu erro. O vol… [+2083 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "STERN.de"
            },
            "author": "STERN.de",
            "title": "Formel 1: \"Sergio, Sergio\": Pérez auf Pole in Miami",
            "description": "Nicht Verstappen, sondern Pérez. Der Mexikaner holt die Miami-Pole. Verstappen macht einen Fehler. Beim nächsten Versuch sorgt Leclerc fürs vorzeitige Quali-Ende. Hülkenberg wird 12. vor Hamilton.",
            "url": "https://www.stern.de/sport/formel-1---sergio--sergio---p%C3%A9rez-auf-pole-in-miami-33444156.html",
            "urlToImage": "https://image.stern.de/33444158/t/E6/v1/w1440/r1.7778/-/07--urnnewsmldpacom2009010123050799591446v3w800h600l640t425r1920b1278jpeg---27b5eac800a67f0b.jpg",
            "publishedAt": "2023-05-06T23:15:04Z",
            "content": "Nicht Verstappen, sondern Pérez. Der Mexikaner holt die Miami-Pole. Verstappen macht einen Fehler. Beim nächsten Versuch sorgt Leclerc fürs vorzeitige Quali-Ende. Hülkenberg wird 12. vor Hamilton.\r\nE… [+4238 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "PC Gamer"
            },
            "author": "Richard Cobbett",
            "title": "An Englishman plays American Revolution sim Liberty or Death",
            "description": "We're rerunning Richard Cobbett's classic Crapshoot column, in which he rolled the dice and took a chance on obscure games—both good and bad.",
            "url": "https://www.pcgamer.com/saturday-crapshoot-liberty-or-death/",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/adkZzW9AdES7jfAnwpeXKY-1200-80.jpg",
            "publishedAt": "2023-05-06T23:01:42Z",
            "content": "From 2010 to 2014 Richard Cobbett (opens in new tab) wrote Crapshoot, a column about rolling the dice to bring random games back into the light. This week, give me liberty or... wait, hang on. Being … [+11539 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Denver Post"
            },
            "author": "Kieran Nicholson",
            "title": "Man fatally shot at Tesla charging station in Edgewater is identified",
            "description": "A man shot dead at a Tesla charging station in Edgewater was identified Saturday as a 33-year-old father with two young children.",
            "url": "https://www.denverpost.com/2023/05/06/man-fatally-shot-tesla-charging-station-edgewater-identified/",
            "urlToImage": "https://www.denverpost.com/wp-content/uploads/2021/11/IMG_7832.jpg?w=1024&h=768",
            "publishedAt": "2023-05-06T22:53:23Z",
            "content": "A man shot dead at a Tesla charging station in Edgewater was identified Saturday as a 33-year-old father with two young children.\r\nAdam Michael Fresquez of Denver was shot Wednesday when an argument … [+1090 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Www.abc.es"
            },
            "author": "(abc)",
            "title": "Steve Wozniak, cofundador de Apple, señala cuál es la IA que puede matar al ser humano",
            "description": "Steve Wozniak es, sin duda, uno de los grandes gurús tecnológicos de las últimas décadas. Como tantos otros empresarios y humanistas, el cofundador de Apple firmó recientemente una carta abierta en la que se abogaba por una paralización en el desarrollo de nu…",
            "url": "https://www.abc.es/tecnologia/informatica/soluciones/steve-wozniak-cofundador-apple-senala-ia-puede-20230507165654-nt.html",
            "urlToImage": "https://s3.abcstatics.com/abc/www/multimedia/tecnologia/2023/05/05/wozniak-U23703660551izS-1024x512@abc.jpg",
            "publishedAt": "2023-05-06T22:07:02Z",
            "content": "Steve Wozniak es, sin duda, uno de los grandes gurús tecnológicos de las últimas décadas. Como tantos otros empresarios y humanistas, el cofundador de Apple firmó recientemente una carta abierta en l… [+1958 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Www.abc.es"
            },
            "author": "(abc)",
            "title": "Sheldon Glashow, Nobel de Física: «El universo debe ser algo tan sencillo como un Tesla»",
            "description": "Sheldon Glashow (Nueva York, 1932) conoce como pocos el mundo de las partículas subatómicas, los componentes que dan forma a toda la materia existente, desde las estrellas a las diminutas bacterias, incluidos nosotros mismos. Junto a Abdus Salam y Steven Wein…",
            "url": "https://www.abc.es/ciencia/sheldon-glashow-nobel-fisica-universo-debe-sencillo-20230424162321-nt.html",
            "urlToImage": "https://s2.abcstatics.com/abc/www/multimedia/ciencia/2023/04/28/glashow-U74427136016RSr-1024x512@abc.jpg",
            "publishedAt": "2023-05-06T22:06:01Z",
            "content": "Sheldon Glashow (Nueva York, 1932) conoce como pocos el mundo de las partículas subatómicas, los componentes que dan forma a toda la materia existente, desde las estrellas a las diminutas bacterias, … [+6248 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "FRANCE 24 English"
            },
            "author": "FRANCE24",
            "title": "Perez takes pole in Miami as Leclerc crash leaves Verstappen in ninth",
            "description": "Perez is just six points behind defending world champion Verstappen after the Mexican's second victory of the season in Azerbaijan last week.\n\nAston Martin's Fernando Alonso, enjoying a strong season, claimed second place and Ferrari's Carlos Sainz will start…",
            "url": "https://www.france24.com/en/live-news/20230506-perez-takes-pole-in-miami-as-leclerc-crash-leaves-verstappen-in-ninth",
            "urlToImage": "https://s.france24.com/media/display/53c89d3c-ec5b-11ed-9d9c-005056a90284/w:1280/p:16x9/60b4dfd346021b65079377b55474bc5bdb3af840.jpg",
            "publishedAt": "2023-05-06T21:56:10Z",
            "content": "Miami Gardens (United States) (AFP) Red Bull's Sergio Perez grabbed pole position for Sunday's Miami Grand Prix and with team-mate Max Verstappen left back in ninth on the grid, has his eyes on a vic… [+3728 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Observador.pt"
            },
            "author": "Alfredo Lavrador",
            "title": "Model S Plaid já atinge 322 km/h. Com o novo Track Package",
            "description": "O Tesla Model S Plaid finalmente pode atingir a velocidade máxima, os 322 km/h prometidos pelo construtor. Para isso necessita do novo Track Package, que inclui novos travões de carbocerâmica.",
            "url": "https://observador.pt/2023/05/06/model-s-plaid-ja-atinge-322-km-h-com-o-novo-track-package/",
            "urlToImage": "https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1198%3A676%3Anowe%3A2%3A85%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2023%2F05%2F06205051%2Fplaid-tp1.jpg",
            "publishedAt": "2023-05-06T21:47:39Z",
            "content": "Quando o Model S Plaid foi apresentado pela Tesla, o construtor avisou desde logo que os 1020 cv na realidade deverão ser 1035 cv, pois a 1020 hp, como anunciado pela marca nos EUA, correspondem 1035… [+2617 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "FREDZONE"
            },
            "author": "Haryis A.",
            "title": "Twitter : la vente d’articles de presse à l’unité bientôt rendue possible !",
            "description": "Twitter envisage la mise en vente d’articles de presse à l’unité directement sur sa plateforme. Elon Musk a révélé que cette nouvelle fonctionnalité sera implémentée dès le mois de mai. Après avoir été évoquée à de nombreuses reprises pendant les derniers moi…",
            "url": "https://www.fredzone.org/twitter-la-vente-darticles-de-presse-a-lunite-bientot-rendue-possible-rfh124",
            "urlToImage": "https://www.fredzone.org/wp-content/uploads/2023/05/Twitter-la-vente-darticles-de-presse-a-lunite-bientot-rendue-possible.webp",
            "publishedAt": "2023-05-06T21:45:27Z",
            "content": "Twitter envisage la mise en vente darticles de presse à lunité directement sur sa plateforme. Elon Musk a révélé que cette nouvelle fonctionnalité sera implémentée dès le mois de mai. Après avoir été… [+3722 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "BMW Warns Customers of Grave Danger",
            "description": "BMW would have preferred to avoid making this decision. The German carmaker is currently focused, like most automakers, on the transition to electric vehicles, which is urgent and complex. BMW needs as few bad headlines as possible, since negative headlines c…",
            "url": "https://biztoc.com/x/6409f4681f41098e",
            "urlToImage": "https://c.biztoc.com/p/6409f4681f41098e/og.webp",
            "publishedAt": "2023-05-06T21:40:09Z",
            "content": "BMW would have preferred to avoid making this decision.The German carmaker is currently focused, like most automakers, on the transition to electric vehicles, which is urgent and complex. BMW needs a… [+293 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk dreams big and tackles impossible problems. Warren Buffett and Charlie Munger are happy to aim lower: 'We don't want that much failure'",
            "description": "Elon Musk. Patrick Pleul/Pool/AFP via Getty Images Warren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting. The Tesla chief tackles complex problems, resulting in major wins and losses, they said. \"We don't want that m…",
            "url": "https://biztoc.com/x/b5f016171db6e257",
            "urlToImage": "https://c.biztoc.com/p/b5f016171db6e257/og.webp",
            "publishedAt": "2023-05-06T21:34:05Z",
            "content": "Elon Musk.Patrick Pleul/Pool/AFP via Getty ImagesWarren Buffett and Charlie Munger weighed in on Elon Musk at Berkshire Hathaway's annual meeting.The Tesla chief tackles complex problems, resulting i… [+325 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Roanoke Times"
            },
            "author": "Yann Ranaivo yann.ranaivo@roanoke.com 540-381-1661",
            "title": "Tesla exec to RU grads: Be a 'leader and catalyst'",
            "description": "When counting all students — including graduate and online students and those at all Radford campuses — a total of 1,198 people walked this weekend.",
            "url": "https://roanoke.com/news/local/education/radford-university-graduation-tesla-executive-laurie-shelby/article_1c006322-ec41-11ed-8568-4f39583e6766.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/4/60/46065a44-ec4d-11ed-a2a5-7f4ede91a86d/6456bb49dcedf.image.jpg?crop=1763%2C926%2C0%2C125&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-05-06T21:30:00Z",
            "content": "RADFORD  Tesla executive Laurie Shelby said she got fired a lot throughout her career, but she reassured the hundreds in front of her Saturday morning that challenges and setbacks are a normal part o… [+4682 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "tmohamed@insider.com (Theron Mohamed)",
            "title": "Elon Musk dreams big and tackles impossible problems. Warren Buffett and Charlie Munger are happy to aim lower: 'We don't want that much failure'",
            "description": "Warren Buffett said he wouldn't want Elon Musk's job, and the Tesla chief \"wouldn't enjoy being in my shoes either.\"",
            "url": "https://markets.businessinsider.com/news/stocks/elon-musk-tesla-spacex-buffett-munger-berkshire-meeting-success-failure-2023-5",
            "urlToImage": "https://i.insider.com/636b7c17113fe10018352b21?width=1200&format=jpeg",
            "publishedAt": "2023-05-06T20:55:58Z",
            "content": "Elon Musk dreams big and tackles daunting problems, meaning he sometimes achieves great things but also fails dismally on occasion, Warren Buffett and Charlie Munger have said.\r\nThe Tesla, SpaceX, an… [+1489 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "周毓曼",
            "title": "特斯拉接「消防栓」狂充電！網傻眼大呼「欠檢舉」：公然竊電可以嗎",
            "description": "Tesla特斯拉堪稱是全球最熱銷的電車，但有網友發現，有車主疑似使用臺北市網球中心消防栓進行充電，是否違法引起熱烈討論。網友在臉書社團「路上觀察學院」PO出特斯拉充電圖，只見一台純白色特斯拉停在停車格內，充電線一路接在後頭的消防栓內，疑似是在充電。原PO放上各種角度的照片表示：「我相信它是在電量緊急狀態。」",
            "url": "https://tw.news.yahoo.com/%E7%89%B9%E6%96%AF%E6%8B%89-%E6%B6%88%E9%98%B2%E6%A0%93-%E5%85%85%E9%9B%BB-045552108.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-05/eee5bd00-ec91-11ed-adb5-9e7814e0c3cc",
            "publishedAt": "2023-05-06T20:55:52Z",
            "content": "2021 ## [](https://www.theguardian.com/environment/2023/may/05/students-occupy-schools-universities-europe-climate-protest)..."
            },
            {
            "source": {
            "id": null,
            "name": "Overclockers.ru"
            },
            "author": "[Zero]",
            "title": "Китайские законодатели могут обязать производителей оснащать машины бортовыми самописцами",
            "description": "Чтобы в случае ДТП можно было восстановить картину произошедшего",
            "url": "https://overclockers.ru/blog/Zeroblog/show/92611/kitajskie-zakonodateli-mogut-obyazat-proizvoditelej-osnaschat-mashiny-bortovymi-samopiscami",
            "urlToImage": "https://overclockers.ru/st/legacy/blog/378660/378528_O.png",
            "publishedAt": "2023-05-06T20:51:21Z",
            "content": "Reuters, « » , , . , - .\r\n , , . , , . , Tesla .\r\n- , . , ."
            },
            {
            "source": {
            "id": null,
            "name": "Kommersant.ru"
            },
            "author": null,
            "title": "Минпромторг и ФТС уточнят коэффициенты утильсбора с физлиц на электромобили",
            "description": "Минпромторг РФ и Федеральная таможенная служба (ФТС) работают над единообразием при расчете утилизационного сбора на электромобили, пишет ТАСС со ссылкой на пресс-службу министерства. В конце апреля СМИ сообщали о том, что владельцы уже ввезенных электрокаров…",
            "url": "https://www.kommersant.ru/doc/5977116",
            "urlToImage": "https://im.kommersant.ru/SocialPics/5977116_26_0_1415423773",
            "publishedAt": "2023-05-06T20:19:38Z",
            "content": "() , - . , , , .\r\n« , , », - . \r\n 20 . . , , (0,17 0,26 3 ). . \r\n25 «» , . , , Tesla 1,63 6,1."
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Amazon launches free channels, check marks come to Gmail and OpenAI raises more moolah",
            "description": "In this edition of Week in Review, we cover Amazon's new free channels on Fire TV, blue check marks in Gmail and AI startup OpenAI raising more cash.",
            "url": "https://techcrunch.com/2023/05/06/amazon-launches-free-channels-check-marks-come-to-gmail-and-openai-raises-more-moolah/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1447436907.jpg?resize=1200,814",
            "publishedAt": "2023-05-06T20:16:06Z",
            "content": "It’s that time of week again, folks — Week in Review (WiR) time. For those new to the scene, WiR is TechCrunch’s regular newsletter that recaps the biggest tech stories over the past few days. There’… [+7531 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Finofilipino.org"
            },
            "author": "Fino",
            "title": "Otra mujer intentando repostar un Tesla con gasolina…",
            "description": "Im lost for words pic.twitter.com/dbW0PyjfDv — ???? (@THINGEO) May 6, 2023 [Ver vídeo en Twitter]\nVer post completo: Otra mujer intentando repostar un Tesla con gasolina…",
            "url": "https://finofilipino.org/otra-mujer-intentando-repostar-un-tesla-con-gasolina/",
            "urlToImage": "https://finofilipino.org/wp-content/uploads/2023/05/wefacwretgertheryh.jpg",
            "publishedAt": "2023-05-06T20:00:05Z",
            "content": "Lo prometido es dueda!!????????????????\r\n19 de los mejores actores de doblaje del país saludando a los máquinas???????????????? (Vedlo entero)\r\nHa costado mucho trabajo pero merece la pena todo el es… [+422 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Elon Musk & Jeff Bezos Crash F1 Grand Prix Race in Miami, Separately",
            "description": "Elon Musk and Jeff Bezos were on the same Formula One turf this weekend -- and seeing how they didn't cross paths ... it would seem Miami's big enough for the two of them. The mega-billionaires paid a visit Saturday to the 2023 Formula One Miami…",
            "url": "https://www.tmz.com/2023/05/06/elon-musk-jeff-bezos-formula-one-f1-grand-prix-race-miami/",
            "urlToImage": "https://imagez.tmz.com/image/be/16by9/2023/05/06/be37a950a5594226a98fa5bc38578466_xl.jpg",
            "publishedAt": "2023-05-06T19:24:13Z",
            "content": "Elon Musk and Jeff Bezos were on the same Formula One turf this weekend -- and seeing how they didn't cross paths ... it would seem Miami's big enough for the two of them.\r\nThe mega-billionaires paid… [+1173 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Steve Hanley",
            "title": "Volkswagen Plans To Replace Cariad Management",
            "description": "News reports from Germany indicate Volkswagen Group CEO Oliver Bloom is about to fire the entire management team at Cariad.",
            "url": "https://cleantechnica.com/2023/05/06/volkswagen-plans-to-replace-cariad-management/",
            "urlToImage": "http://cleantechnica.com/files/2023/05/Cariad.png",
            "publishedAt": "2023-05-06T19:23:48Z",
            "content": "To those of us on the outside, Volkswagen appears to be a well oiled machine, placidly plunking out passels of passenger cars like clockwork. But the latest news from Wolfsburg indicates that, behind… [+8492 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "World's fastest shoes let you walk with AI",
            "description": "Moonwalkers are said to be the world's fastest shoe, which increases your walking speed by 250% due to its AI-powered instantaneous response time when walking.",
            "url": "https://www.foxnews.com/tech/worlds-fastest-shoes-let-you-walk-ai",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/2-Step-into-the-futurre-with-moonwalkers-the-worlds-fastest-shoes.jpg",
            "publishedAt": "2023-05-06T18:41:24Z",
            "content": "Are you tired of walking at a sluggish pace while everyone else zooms past you? Well, buckle up your shoe game because we have news that will knock your socks off. \r\nAn innovation in the world of foo… [+5062 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Done With Price Cuts, Lordstown Endurance To Drive Into Oblivion, Fisker Ocean Makes Waves And More: Biggest EV Stories Of The Week",
            "description": "Electric vehicle stocks closed the week ending on May 5 on a mixed note, as a strong comeback by the broader market in the final session of the week overrode several negative catalysts. Here are the key events that happened in the EV space during the week: Te…",
            "url": "https://biztoc.com/x/83e4afa0987ff96a",
            "urlToImage": "https://c.biztoc.com/p/83e4afa0987ff96a/og.webp",
            "publishedAt": "2023-05-06T18:30:05Z",
            "content": "Electric vehicle stocks closed the week ending on May 5 on a mixed note, as a strong comeback by the broader market in the final session of the week overrode several negative catalysts.Here are the k… [+305 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Daily Mail"
            },
            "author": "Isabel Baldwin",
            "title": "Miami GP: Jeff Bezos hops on McLaren pit wall, while Elon Musk takes a tour of Red Bull",
            "description": "The Miami Grand Prix is guaranteed to attract the rich and famous but before the big race is even underway it has already captured the attention of two extremely wealthy famous faces.",
            "url": "https://www.dailymail.co.uk/sport/formulaone/article-12054885/Miami-GP-Jeff-Bezos-hops-McLaren-pit-wall-Elon-Musk-takes-tour-Red-Bull.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/06/19/70669947-0-image-a-11_1683396773699.jpg",
            "publishedAt": "2023-05-06T18:16:51Z",
            "content": "The Miami Grand Prix is guaranteed to attract the rich and famous but before the big race is even underway it has already captured the attention of two extremely wealthy famous faces. \r\nElon Musk too… [+2085 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Guiaauto.com.br"
            },
            "author": "Guia Auto",
            "title": "Volkswagen Golf R 333, a nova versão está chegando em breve",
            "description": "Em um vídeo postado em suas redes sociais, a Volkswagen anunciou que lançará uma versão de produção limitada do Golf R, chamada \"333\".",
            "url": "https://guiaauto.com.br/volkswagen-golf-r-333-a-nova-versao-esta-chegando-em-breve/",
            "urlToImage": "https://guiaauto.com.br/wp-content/uploads/2023/05/4e21b0b7a9.jpeg",
            "publishedAt": "2023-05-06T18:13:09Z",
            "content": "A marca revelou uma prévia da edição mais potente da variante esportiva do hatchback. Em um vídeo postado em suas redes sociais, a Volkswagen anunciou que lançará uma versão especial e de produção li… [+1462 chars]"
            }
            ]
            }
        ]
    )
})

app.listen(port, () => {
    console.log("Running on port 8000");
});

// API function
// pet - read 
// put - update
// post - create 
// delete - delete