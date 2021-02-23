import express from "express";
import session from "express-session";

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.options("*", (req, res, next) => {
    console.log("preflight received.");
});

app.get("/", (req, res) => {
    res.status(200).send({ message: "hello express!" });
});

app.listen(3000, () => {
    console.log("server start.");
});
