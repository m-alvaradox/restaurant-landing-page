import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    const countSpan = btn.querySelector(".like-count");
    const ref = db.ref("likes/" + id);

    ref.on("value", snapshot => {
      countSpan.textContent = snapshot.val() || 0;
    });

    btn.addEventListener("click", () => {
      ref.transaction(current => (current || 0) + 1);
    });
  });