import {google} from "googleapis";
import {TLRU} from "tlru";

const sheets = google.sheets({
    version: "v4",
    auth: process.env.API_KEY,
})

const cache = new TLRU({
    maxAgeMs: 60000,
})

export async function getSheet(): Promise<any> {
    const cached = cache.get('data')
    if (cached) return cached

    const data = await sheets.spreadsheets.values.get({
        spreadsheetId: '1MOz5cmMpYwpBB95DK1Udcti_8eOrswnxWzFurhAz0yg',
        range: 'Maps by ID',
    })

    data.data.values!.shift()
    const items = data.data.values!.map(r => {
        return {
            id: Number(r[0]),
            song: r[1] || null,
            artist: r[2] || null,
            level: Number(r[3]),
            creator: r[4] || null,
            ew: r[8] === 'O',
            tags: [r[10], r[11], r[12], r[13], r[14]].filter(r=>r),
        }
    })

    cache.set('data', items)
    return items
}
