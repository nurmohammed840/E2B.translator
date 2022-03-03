//@ts-nocheck

let data = JSON.parse(Deno.readTextFileSync("database/e2b.json"));

let a = data
    .sort((a, b) => a.en.localeCompare(b.en))
    .map(({ en, en_syns, bn, bn_syns, sents }) => {
        return `${en.toLowerCase()}|${en_syns.join("#")}|${bn}|${bn_syns.join("#")}|${sents.join("#")}`
    })

Deno.writeTextFileSync("database/e2b.txt", a.join("\n"));