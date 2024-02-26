import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import env from "./helpers/envSetup";

const app = express();
const jsonEncoded = bodyParser.json();

app.use(cors());

const routeWithCondition = (
  directory: string,
  validateAccess: (
    req: Request,
    res: Response,
    execute: (req: any, res: any) => void
  ) => void
) => {
  const routes = fs
    .readdirSync(path.resolve(__dirname, `./route${directory}`))
    .filter((file) => file.endsWith(".js")); // we use js here since this isn't touched by tsc

  routes.forEach((route) => {
    const file: {
      execute: (req: any, res: any) => void;
    } = require(`./route${directory}/${route}`);

    app.all(
      `${directory}/${route.substring(0, route.length - 3)}`,
      jsonEncoded,
      (req, res) => {
        validateAccess(req, res, file.execute);
      }
    );
  });
};

routeWithCondition("/private", (req, res, execute) => {
  if (!req.body || !req.body.token || typeof req.body.token !== "string") {
    res.status(401).send("token-required");
    return;
  }
  const token: string = req.body.token;

  // auth
  //   .verifyIdToken(token)
  //   .then(async (decodedToken) => {
  //     req.body.authuid = decodedToken.uid;

  //     // TODO: implement email verification checking
  //     execute(req, res);
  //   })
  //   .catch((e) => res.status(403).send("forbidden"));
});

routeWithCondition("/public", (req, res, execute) => execute(req, res));

// if (!!process.env.PRODUCTION) {
//   app.use(express.static(path.join(__dirname, "../../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });
// }

const PORT = env.PORT || 2718;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});