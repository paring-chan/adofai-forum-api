import { VercelRequest, VercelResponse } from '@vercel/node'
import {getSheet} from "../../api";

export default async (req: VercelRequest, res: VercelResponse) => {
    const sheet = await getSheet()
    res.json(sheet)
}