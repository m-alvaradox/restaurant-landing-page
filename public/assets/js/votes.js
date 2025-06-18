const firebaseConfig = {
  apiKey: "AIzaSyCFjHWbDSG5vDCjElsuXelZ7DhQaRHGPhg",
  authDomain: "restaurant-landing-page-75167.firebaseapp.com",
  databaseURL: "https://restaurant-landing-page-75167-default-rtdb.firebaseio.com",
  projectId: "restaurant-landing-page-75167",
  storageBucket: "restaurant-landing-page-75167.firebasestorage.app",
  messagingSenderId: "705888294177",
  appId: "1:705888294177:web:553583fceea64f24bf9a60"
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