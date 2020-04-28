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

// Az  algoritmusokban  a  változók  a  megadott  típusú
        // értékek  (adatok)tárolására  használt memóriatartományok elnevezései.
        // let x: number = 12; // változó definíció: let változóAzon = kezdőérték
        // x = 20;
        // res.write(`Az x változó érték: ${x}\n`);
        // res.write(`${x}\n`);
        // res.write(x.toString() + "\n");
        // const szöveg = "alma";
        // // szöveg = "körte";
        // res.write(szöveg + "\n");
        // let esik: boolean;
        // esik = true;
        // esik = false;
        // res.write(`${!esik}\n`);

        res.write("Téglalp területe és kerülete\n");
        res.write("a= ");
        let oldalA: number = parseInt(params.inputa as string);
        if (isNaN(oldalA)) {
            oldalA = 20;
        }
        res.write(`<input type='text' name='inputa' value=${oldalA} style='width:5em;' onChange='this.form.submit();'>\n`);

        res.write("b= ");
        let oldalB: number = parseInt(params.inputb as string);
        if (isNaN(oldalB)) {
            oldalB = 30;
        }
        res.write(`<input type='text' name='inputb' value=${oldalB} style='width:5em;' onChange='this.form.submit();'>\n`);

        const terület: number = oldalA * oldalB;
        const kerület: number = 2 * (oldalA + oldalB);
        res.write(`Terület = ${terület}\n`);
        res.write(`Kerület = ${kerület}\n`);
        res.write("\n\n");

        res.write("Páros-páratlan meghatározó\n");
        res.write("x= ");
        let x: number = parseInt(params.inputx as string);
        if (isNaN(x)) {
            x = 0;
        }
        res.write(`<input type='number' name='inputx' value=${x} style='width:5em;' onChange='this.form.submit();'>\n`);
        if (x % 2 == 0) {
            res.write("A szám páros!\n\n\n");
        } else {
            res.write("A szám páratlan!\n\n");
        }

        res.write("KRÉTA\n");
        res.write("Kérem az osztályzatot: ");
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
                res.write("Ez nem osztályzat!\n");
                break;
        }

        res.write("\nMásodfokú egyenlet gyökei\n");
        res.write("Kérem az együtthatókat!\n");

        res.write("a= ");
        let a: number = parseInt(params.a as string);
        if (isNaN(a)) {
            a = 1;
        }
        res.write(`<input type='text' name='a' value=${a} style='width:5em;' onChange='this.form.submit();'>\n`);

        res.write("b= ");
        let b: number = parseInt(params.b as string);
        if (isNaN(b)) {
            b = 2;
        }
        res.write(`<input type='text' name='b' value=${b} style='width:5em;' onChange='this.form.submit();'>\n`);

        res.write("c= ");
        let c: number = parseInt(params.c as string);
        if (isNaN(c)) {
            c = 1;
        }
        res.write(`<input type='text' name='c' value=${c} style='width:5em;' onChange='this.form.submit();'>\n`);

        if (a != 0) {
            if (Math.pow(b, 2) >= 4 * a * c) {
                if (Math.pow(b, 2) > 4 * a * c) {
                    res.write("Két gyök!\n");
                    const x1: number = -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    const x2: number = -b - Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * a);
                    res.write(`x1 = ${x1}\n`);
                    res.write(`x2 = ${x2}\n`);
                } else {
                    res.write("Egy gyök!\n");
                    const x: number = -b / (2 * a);
                    res.write(`x = ${x}\n`);
                }
            } else res.write("Nincs valós gyök!\n");
        } else {
            res.write("Nem másodfokú!\n");
            if (b != 0) {
                const x: number = -c / b;
                res.write(`x = ${x}`);
            } else {
                if (c != 0) res.write("Ellentmondás !\n");
                else res.write("Azonosság !\n");
            }
        }

        res.write("Függvény hívása\n");
        let x1: number;
        x1 = 4;
        x1++; // vagy x1 = x1 + 1;
        let x2: number;
        x2 = 4;
        x2--; // vagy x2 = x2 - 1;
        const osszeg: number = osszead(x1, x2);
        res.write(`${x1}+${x2}=${osszeg}\n`);

        res.write("\nSzám faktoriálisa\n");
        res.write("Kérem a számot: ");
        let n: number = parseInt(params.n as string);
        if (isNaN(n)) {
            n = 5;
        }
        res.write(`<input type='text' name='n' value=${n} style='width:5em;' onChange='this.form.submit();'>\n`);
        res.write(`${n}!=${faktrialis(n)}\n`);

        // Tömbök - összetett adatszekezet, több adat tárolására alkalmas
        res.write("\nTömbök\n");
        // tömb definíció (típus, azonosító, kezdőértékek)
        const nevek: string[] = ["Andi", "Anna", "Bence", "Laci"];
        res.write(nevek[0] + "\n");
        res.write(nevek[1] + "\n");
        res.write(nevek[2] + "\n");
        res.write(nevek[3] + "\n");
        // res.write(nevek[4] + "\n"); // undefined

        res.write("Visszafelé:\n");
        for (let i: number = nevek.length - 1; i >= 0; i--) {
            res.write(nevek[i] + "\n");
        }

        // Bejárás tétele
        res.write("Számok vektor bejárása\n");
        const számok: number[] = [23, 67, 33, 77, 88, 73, 21, 20];
        for (let i = 0; i < számok.length; i++) {
            res.write(`${számok[i]}, `);
        }
        res.write("\n");
        res.write(számok + "\n");

        // Bejárás for of ciklissal
        // c# foreach ciklus megfelelője
        // A ciklusváltozó (i) felveszi sorba a vektorban lévő számokat
        for (const i of számok) {
            res.write(`${i}; `);
        }
        res.write("\n");

        // for in ciklus ???
        // a vektor (egy dimenziós tömb) elemeinek indexét vesz fel 0...Array.length-1
        // C# nyelven ilyen nincsm sim for ciklust használunk helyette
        for (const i in számok) {
            //res.write(`${i}; `);
            const utolsóIndex: number = számok.length - 1;
            // azért kell átalakitani számra, mert az "i" sztring típusú
            if (parseInt(i) != utolsóIndex) {
                res.write(`${számok[i]}, `);
            } else {
                res.write(`${számok[i]}`);
            }
        }
        res.write("\n");

        // Kiírás a join() függvény használatával
        res.write(számok.join(". ") + "\n");

        // Szélsőérték keresés algoritmusa
        // Keressük a legnagyobb elem indexét és értékét
        let maxi = 0;
        for (let i = 1; i < számok.length; i++) {
            if (számok[i] > számok[maxi]) {
                maxi = i;
            }
        }
        res.write(`A legnagyobb elem értéke: ${számok[maxi]}, indexe: ${maxi}\n`);

        // Minimumkeresés, minimum index nélkül
        let min: number = számok[0];
        for (let i = 0; i < számok.length; i++) {
            if (számok[i] < min) {
                min = számok[i];
            }
        }
        res.write(`A legkisebb elem értéke: ${min}\n`);

        // Legnagyobb páratlan elem indexe és értéke
        // Nem jelölhetjük ki az első elemet a legnagyobb páratlan számnak
        let miniPáratlan: number = -1;
        for (let i = 0; i < számok.length; i++) {
            // csak a páratlan számokkal foglalkozunk
            if (számok[i] % 2 === 1) {
                // Első páratlan szám?
                if (miniPáratlan == -1) {
                    miniPáratlan = i;
                } else {
                    if (számok[i] < számok[miniPáratlan]) {
                        miniPáratlan = i;
                    }
                }
            }
        }
        if (miniPáratlan != -1) {
            res.write(`A legkisebb páratlan elem értéke: ${számok[miniPáratlan]}, indexe: ${miniPáratlan}\n`);
        }

        // HF: nyomkövetés, válozóvizsgálat gyakorálsa

        // foreach ciklus:

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
