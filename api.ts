import {google} from "googleapis";

export const sheet = google.sheets({
    version: "v4",
    auth: process.env.API_KEY
})