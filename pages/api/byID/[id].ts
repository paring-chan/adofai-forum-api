import { VercelRequest, VercelResponse } from '@vercel/node'
import {getSheet} from "api";

export default async (req: VercelRequest, res: VercelResponse) => {
    const sheet = await getSheet()
    const item =sheet.find(r=>r.id === Number(req.query.id))
    if (!item) return res.status(404).json({error: 'Map not found.'})
    return res.json(item)
}
