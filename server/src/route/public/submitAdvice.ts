import { db } from "../../helpers/firebaseSetup";

export const execute = async (req, res) => {
  const { name, adv } = req.body;
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
    if (new Date().getTime() - ipInformation < 30000) {
      res.status(429).send("too-many-requests");
      return;
    } else {
      await db.ref(`/advice/ipInfo/${ip}`).set(new Date().getTime());
    }
  }

  if (
    !/^[A-za-z\-\s]*$/.test(name) ||
    !(adv as string)
      .split("")
      .every((c) => 0 <= c.charCodeAt(0) && c.charCodeAt(0) <= 255)
  ) {
    res.status(400).send("invalid-input");
    return;
  }

  const total: number =
    (await db.ref(`/advice/total`).once("value")).val() || 0;
  await db.ref(`/advice/pieces/${total}`).set({ name, adv, ip, time: new Date().getTime() });
  await db
    .ref(`/advice/total`)
    .set(total+1);
  
  res.status(200).send("Success");
};
