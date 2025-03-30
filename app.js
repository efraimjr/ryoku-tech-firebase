// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRaM3Rol6QifX0OHPtqQ_RGOGHcgwXWUw",
  authDomain: "ryoku-technologies.firebaseapp.com",
  projectId: "ryoku-technologies",
  storageBucket: "ryoku-technologies.firebasestorage.app",
  messagingSenderId: "61477857483",
  appId: "1:61477857483:web:e27782bd194f064d94934e",
  measurementId: "G-BGSCBXM7FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Fetch Projects from Firestore
async function fetchProjects() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectsList = document.getElementById("projects-list");

    querySnapshot.forEach(doc => {
        const project = doc.data();
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsList.appendChild(projectCard);
    });
}

// Load Projects on Page Load
fetchProjects();