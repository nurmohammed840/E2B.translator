
let csv = Deno.readTextFileSync("database/e2b.extra.csv");
let txt = Deno.readTextFileSync("database/e2b.csv");

let a = csv.split("\n").map((a: string) => {
    let [x, y] = a.split(",");
    return [x.toUpperCase(), y]
});
let b = txt.split("\r\n").map((a: string) => a.split(","));

let obj = b.reduce((obj, b) => {
    let [x, y] = b;
    obj[x] = [y];
    return obj;
}, {} as any)

for (const [x, y] of a) {
    let g = obj[x] as string;
    if (!g) {
        obj[x] ??= [];
        obj[x].push(y);
    } else {
        try {
            if (g.localeCompare(y)) {
                //     str += `${g}\t|\t${y}\n`
            }
        } catch (_) {
            console.log(g)
        }

    }
}