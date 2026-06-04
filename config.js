/* ============================================================
   config.js  —  MedLab Reference
   ⚠️  SENSITIVE FILE — DO NOT COMMIT TO PUBLIC GITHUB REPO
   
   Add to .gitignore:
       config.js

   For GitHub Pages: use GitHub Secrets + a build action,
   or restrict the API key in Google Cloud Console:
   console.cloud.google.com → APIs → Credentials → restrict
   to your domain (rahat1998.github.io)
   ============================================================ */

window.APP_CONFIG = {
  firebase: {
    apiKey:            "AIzaSyA1QvsZosAd0MEmGKlktHsqyzOfm4-9lI4",
    authDomain:        "medlab-db.firebaseapp.com",
    projectId:         "medlab-db",
    storageBucket:     "medlab-db.firebasestorage.app",
    messagingSenderId: "310991760752",
    appId:             "1:310991760752:web:15d7e49ef4a84f8a78b3b5"
  },
  adsense: {
    pubId:  "ca-pub-1800215132568729",
    slots:  {
      top:       "9791152733",
      mid:       "1114282447",
      preFooter: "7320598149"
    }
  }
};

window._configReady = true;
document.dispatchEvent(new Event('configReady'));
