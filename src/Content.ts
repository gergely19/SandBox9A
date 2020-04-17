import fs from "fs";
import http from "http";
import url from "url";

function osszead(a: number, b: number): number {
    return a + b;
}
function faktorialis(n: number): number {
    let fakt: number = 1;
    for (let i: number = 2; i <= n; i++) {
        fakt = fakt * i;
    }
    return fakt;
}
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
        let oldalB: number = parseInt(params.inputb as string);
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
        res.write("\nMásodfokú egyenlet gyökei\n");
        res.write("Kérem az együtthatókat!\n");
        res.write("a = ");
        let a: number = parseInt(params.a as string);
        if (isNaN(a)) {
            a = 1;
        }
        res.write(`<input type='text' name='a' value=${a} style='width:5em;' onChange='this.form.submit();'>\n`);
        res.write("b = ");
        let b: number = parseInt(params.b as string);
        if (isNaN(b)) {
            b = 1;
        }
        res.write(`<input type='text' name='b' value=${b} style='width:5em;' onChange='this.form.submit();'>\n`);
        res.write("c = ");
        let c: number = parseInt(params.c as string);
        if (isNaN(c)) {
            c = 1;
        }
        res.write(`<input type='text' name='c' value=${c} style='width:5em;' onChange='this.form.submit();'>\n`);
        if (a != 0) {
            if (Math.pow(b, 2) >= 4 * a * c) {
                if (Math.pow(b, 2) > 4 * a * c) {
                    res.write("Két gyök!");
                    const x1: number = -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    const x2: number = -b - Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    res.write(`\nx1 = ${x1}\n`);
                    res.write(`x2 = ${x2}\n`);
                } else {
                    res.write("Egy gyök!");
                    const x: number = -b / (2 * a);
                    res.write(`x = ${x}\n`);
                }
            } else res.write("Nincs valós gyök!");
        } else {
            res.write("Nem másodfokú!");
            if (b != 0) {
                const x: number = -c / b;
                res.write(`x = ${x}\n`);
            } else {
                if (c != 0) res.write("Ellentmondás !");
                else res.write("Azonosság !");
            }
        }
        res.write("\nfüggvény hívása\n");
        let x1: number;
        x1 = 4;
        x1++;
        let x2: number;
        x2 = 4;
        x2--;
        const osszeg: number = osszead(x1, x2);
        res.write(`${x1}+${x2}=${osszeg}\n`);

        res.write("\nSzám faktoriáisa\n");
        res.write("Kérem a számom: ");
        let n: number = parseInt(params.n as string);
        if (isNaN(n)) {
            n = 5;
        }
        res.write(`<input type='text' name='n' value=${n} style='width:5em;' onChange='this.form.submit();'>\n`);
        res.write(`${n}!=${faktorialis(n)}\n`);

        res.write("\nTömbök:\n");
        const nevek: string[] = ["Anita", "Gabrella", "Sándor", "Gergő"];
        for (let i: number = 0; i < nevek.length; i++) {
            res.write(nevek[i] + "\n");
        }

        res.write("\nSzám faktoriáisa\n");
        res.write("Kérem a számom: ");
        let szam1: number = parseInt(params.szam1 as string);
        if (isNaN(szam1)) {
            szam1 = 5;
        }
        res.write(`<input type='text' name='szam1' value=${szam1} style='width:5em;' onChange='this.form.submit();'>\n`);
        //Az algoritmusokban a változók a megadott típusú értékek (adatok) tárolására használt memóriatartományok elnevezései.
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
