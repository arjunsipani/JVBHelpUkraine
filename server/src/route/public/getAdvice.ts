import { db } from "../../helpers/firebaseSetup";

export const execute = async (req, res) => {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  if (!ip) {
    res.status(400).send("no-found-ip");
    return;
  }

  ip = ip.replace(/\./g, ":");

  const ipInformation = await db
    .ref(`/advice/ipInfo/${ip}`)
    .once("value")
    .then((snapshot) => snapshot.val());
  if (!!ipInformation && parseInt(ipInformation)) {
    if (new Date().getTime() - ipInformation < 5000) {
      res.status(429).send("too-many-requests");
      return;
    } else {
      await db.ref(`/advice/ipInfo/${ip}`).set(new Date().getTime());
    }
  }
  const total: number = (await db.ref(`/advice/total`).once("value")).val() || 0;
  const random: number = Math.floor(Math.random() * total);
  const { adv, name, time } = (await db.ref(`/advice/pieces/${random}`).once("value")).val();
  res.status(200).send(JSON.stringify({ adv, name, time }));
};
