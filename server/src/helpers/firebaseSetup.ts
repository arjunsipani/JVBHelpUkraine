import env from "./envSetup";
import * as firebase from "firebase-admin";

/*
 * Create an object that sets up the admin configurations with all the
 * information necessary there, so then we can initialize the firebase app.
 */
const adminConfig = {
  type: env.FIREBASE_ADMIN_TYPE,
  project_id: env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: !!env.FIREBASE_ADMIN_PRIVATE_KEY
    ? env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined,
  client_email: env.FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: env.FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: env.FIREBASE_ADMIN_AUTH_URI,
  token_uri: env.FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
};

/*
 * Initialize a Firebase App, using what is produced from the firebase
 * credential certificate
 */
firebase.initializeApp({
  credential: firebase.credential.cert(adminConfig as firebase.ServiceAccount),
  databaseURL:
    "https://jvbhelpukraine-ec267-default-rtdb.firebaseio.com/",
});

export const db = firebase.database();
