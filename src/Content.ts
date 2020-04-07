import fs from "fs";
import http from "http";
import url from "url";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>SandBox 9A</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->

        // res.write("Hello Jedlik, hello 9.A");
        // res.write("<h2 style='color:red;'>TipeScript</h2>");
        // res.write("próba\n");
        // res.write("alma\n");

        // let x = 12; //változó definíció
        // x = 20;
        // res.write(`${x}\n`);
        // res.write(x.toString() + "\n");
        // const szöveg = "alma";
        // res.write(szöveg + "\n");
        // let esik: boolean;
        // esik = true;
        // esik = false;
        // res.write(esik.toString() + "\n");
        // res.write(`${esik}\n`);
        //freg

        res.write("Téglalap területe és kerülete:\n");
        res.write("a= ");
        let oldalA: number = parseInt(params.inputa as string);
        if (isNaN(oldalA)) {
            oldalA = 20;
        }
        res.write(`<input type='text' name='inputa' value=${oldalA} style='width:5em;' onChange='this.form.submit();'>\n`);

        res.write("Téglalap területe és kerülete:\n");
        res.write("b= ");
        let oldalB: number = parseInt(params.inputa as string);
        if (isNaN(oldalB)) {
            oldalB = 30;
        }
        res.write(`<input type='text' name='inputb' value=${oldalB} style='width:5em;' onChange='this.form.submit();'>\n`);

        const terület: number = oldalA * oldalB;
        const kerület: number = 2 * (oldalA * oldalB);
        res.write(`terület = ${terület}\n`);
        res.write(`kerület = ${kerület}\n`);
        res.write("alma\n");
        //console.log(terület*1000);
        res.write("\n\n");

        res.write("Páros-páratlan meghatározó\n");
        res.write("x= ");
        let x: number = parseInt(params.inputx as string);
        if (isNaN(x)) {
            x = 0;
        }
        res.write(`<input type='number' name='inputx' value=${x} style='width:5em;' onChange='this.form.submit();'>\n`);
        if (x % 2 == 0) {
            res.write("A szám páros\n\n\n");
        } else {
            res.write("A szám páratlan\n\n\n");
        }

        res.write("KRÉTA\n");
        res.write("x= ");
        let jegy: number = parseInt(params.jegy as string);
        if (isNaN(jegy)) {
            jegy = 5;
        }
        res.write(`<input type='text' name='jegy' value=${jegy} style='width:5em;' onChange='this.form.submit();'>\n`);
        switch (jegy) {
            case 1:
                res.write("Elégtelen\n");
                break;
            case 2:
                res.write("Elégséges\n");
                break;
            case 3:
                res.write("Közepes\n");
                break;
            case 4:
                res.write("Jó\n");
                break;
            case 5:
                res.write("Jeles\n");
                break;
            default:
                res.write("Ez nem osztályzat\n");
                break;
        }
        res.write("Másodfokú egyenlet gyökei");
        res.write("Kérem az együtthatókat !");
        res.write("a = ");
        const a: number = double.Parse(Console.ReadLine());
        res.write("b = ");
        const b: number = double.Parse(Console.ReadLine());
        res.write("c = ");
        const c: number = double.Parse(Console.ReadLine());
        if (a != 0) {
            if (Math.pow(b, 2) >= 4 * a * c) {
                if (Math.pow(b, 2) > 4 * a * c) {
                    res.write("Két gyök!");
                    const x1: number = -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    const x2: number = -b - Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    res.write(`x1 = ${x1}`);
                    res.write(`x2 = ${x2}`);
                } else {
                    res.write("Egy gyök!");
                    const x: number = -b / (2 * a);
                    res.write("x = {0}", x);
                }
            } else res.write("Nincs valós gyök!");
        } else {
            res.write("Nem másodfokú!");
            if (b != 0) {
                const x: number = -c / b;
                res.write("x = {0}", x);
            } else {
                if (c != 0) res.write("Ellentmondás !");
                else res.write("Azonosság !");
            }
        }
        res.ReadLine();
        //Az algoritmusokban a változók a megadott típusú értékek (adatok) tárolására használt memóriatartományok elnevezései.
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
