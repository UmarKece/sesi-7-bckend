const http = require('http');
const rupiah = require('rupiah-format')
const host = '127.0.0.1'
const port = 3002

// request = dari luar
// response = dari 

const server = http.createServer(function (request, response) {
    const nama = "AZIZ KECE"
    let uang = 500000;
    let jajan = 120000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    
    const hasil = `
    <head>
     <title>${nama}</title>
    </head>
        <p>
    <body>
    <h1 style='backgorund: black;color: yellow;padding:20px;text-align: center;'> SPENT JAJAN</h1>
    Halo nama saya ${nama}, gua jajan se ${jajan}, uang aku tadinya ${uang}, sekarang sisa ${sisa}
        </p>
    </body>`
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function () {
    console.log(`server menyala di ${host} : ${port}`);
});