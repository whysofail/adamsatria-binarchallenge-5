import express from "express";
import ejs from "ejs";
import path from 'path';
import {fileURLToPath} from 'url';
import db from "./config/database.js"
import router from "./routes/index.js";
import methodOverride from "method-override";
import session from "express-session";
import flash from "connect-flash"
const port = process.env.port || 3000;
const app = express();

try {
    await db.sync();
    await db.authenticate();
    console.log('DB Connected.');
} catch (error) {
    console.log(error);
};
//EJS
app.set('view engine', ejs);
//Form Method Override
app.use(methodOverride("_method"));
//Flash Message
app.use(session({
    secret: 'codeforgeek',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
//Load Assets (Css, Js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// "challenge-5/views/layout/"
const layout = '/views/layout';
export const directory = (dir) => {
    app.use(express.static(__dirname + dir)); 
}
directory(layout);
directory('/uploads');
app.use(router);

app.listen(port , ()=>{console.log(`Server up on http://localhost:${port}/`)});
