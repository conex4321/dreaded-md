/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09veWV0NS94Z3lVQUZUdGx4TWhSVVNkK3lrSmJvTkNrZklpUGVEc1dHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK25XanVYcEJ2anpJSnFyelA2Z0pKOFdkSVhMYUllVTZzN3lYQkpuMUFqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQmhFeVA0U250ZmtINmtrQXFNZG1XeEtSWDVEOTkzNFBuNjBiZ3ZyODBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiazBWYStHM2dEMFJ6ZUJmWS9jbitvVklON0tROHAwekFBUXR1SWp5Y0FrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEczUwajNROUZxakZndlpYWnplWFV0UzRqYlJMRVlqNzUrRTIvM1ZYMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN1ZmJDalJkbURRc1lDOWdwOVdVN0RvTkI1akNkSzc4cFhTU0F2VXYxeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0MvTDNUQ2JSLzFDRjNEc1k5aTkvRnNhYzQ2TGNzNE1PWEI5TlZvVTZrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY25WclU2ejk2eEV2QUg0Y281ZXB3ZEE2TWU3eW5SOGpkWlZPZ2wxVExtMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktUKzdneWs1anJvOEFLNUhlcnlER3pBOXE1cE5GdVJxdXcrdVExRDVOT0VqR3l1dDdUR1ZXQ0tQSkF2OHFiRDFqaklSUXRQNnBZV0hZVXRWNFczVENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJBRGg2NzB6MnphSkozVmE4a0xlaFNYVHV5Y3QwcTBscEhzeW1kQnFrUjFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcyODQ2NzY1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMjVDRUJEMEQxOUQ3ODMwNDNFMUU1RkQyM0RDRDE0MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTgxMDI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Mjg0Njc2NTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREJDRUE1NTgzODM2QUE4MjgxQTM5QkIyNjA5MjVGMjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDE4MTAyNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzI4NDY3NjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlGRjYyMTkzRTg3REYzRUJEOEMyRjAyQjI5OTg2NkQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQxODEwNjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imp6YmtSWEV1Um1Tekl4VkgyMnB4enciLCJwaG9uZUlkIjoiZmFhYWNhOTctZDJmOS00ODMxLTk3ZTEtMzVjZGI4MWNhZDM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit4bURBNFJkdys4cXQxaTQzdkl5Q1FBamRuQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZHI2cVBIK1FUVVAvUE5VaVREVTc1OFdRYWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUUxTlpHQjUiLCJtZSI6eyJpZCI6IjI1NDcyODQ2NzY1Njo0OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbGxpc2gg8J+kqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVRdXVnR0VKRFVrN1lHR0JRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ0FjV3RVZ003QURuMmcxMElLR2xOcHZvTjFTOXMzSWw0OEFub1lYZEZCND0iLCJhY2NvdW50U2lnbmF0dXJlIjoibUJvMmJkdzJvbWMyUXJwU2svbldOSFVsWlgvSkNqaitJaWVkbDhrNDZPaEh3TkVZaG9KVnZiNTNvaytZL0hIWkZFZDJzbkJvMEV3STdKamxmVXdERFE9PSIsImRldmljZVNpZ25hdHVyZSI6InVVeGVETFQ4cU5ibUl2RmdiQmtJc29sVDc1ckY3RWVtN3MxNkRJNjUvdk85c1ZBaEdDR21aZlJkOGZmcFdzbmQvcnhyRkp2NldvWkVHVVFTdnBLQkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI4NDY3NjU2OjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllBSEZyVklET3dBNTlvTmRDQ2hwVGFiNkRkVXZiTnlKZVBBSjZHRjNSUWUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxODEwMjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTStmIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || '';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session
};
