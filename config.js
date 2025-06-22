const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'api.eypz.ct.ws'
global.eypzApi = 'https://api2.eypz.infy.uk/'
global.Api = 'https://api-eypz-y068.onrender.com'

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  ADMIN_ACCESS: toBool(process.env.ADMIN_ACCESS) || true,
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ANTI_WORD: process.env.ANTI_WORD || "ammayoli",
  ANTI_LINK: process.env.ANTI_LINK || "eypz,izumi",
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE) || true,
  WARN_COUNT: process.env.WARN_COUNT  || '3'
  AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW) || true,
  SESSION_ID: process.env.SESSION_ID || "izumi session",
  MENU_URL: process.env.MENU_URL || "https://files.catbox.moe/s1xtvz.jpg",
  MENU_TYPE: process.env.MENU_TYPE || "normal",
  CAPTION: process.env.CAPTION || "Made with 🤍",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️",
  BOT_NAME: process.env.BOT_NAME || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️",
  AUDIO_DATA: process.env.AUDIO_DATA || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️;https://files.catbox.moe/s1xtvz.jpg",
  PROCESSNAME: process.env.PROCESSNAME || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️",
  AUTHOR: process.env.AUTHOR || "ღ᭄ɪᴄ፝֟ʜᴜ  ຮꫀʈʈ𝘢ꪀ🦢🍷🖇️",
  PRESENCE: process.env.PRESENCE || "unavailable", //available, typing, recording
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  GEMINI_API_KEY: toBool(process.env.GEMINI_API_KEY),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "api",
  RENDER_API_KEY: process.env.RENDER_API_KEY || "",
  RENDER_SERVICE_ID: process.env_RENDER_SERVICE_ID || "",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "name",
  KOYEB: toBool(process.env.KOYEB) || false,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
