import './App.css';
import BackgroundImage from './components/BackgroundImage';
import BackToTopButton from './components/BackToTopButton';
import HomePage from './sections/HomePage';
import Portfolio from './sections/Portfolio';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjcoQkJO4Ur_zzXlj5IrnV2Hv6vW17A5Q",
  authDomain: "portfolio-website-1f0f5.firebaseapp.com",
  projectId: "portfolio-website-1f0f5",
  storageBucket: "portfolio-website-1f0f5.appspot.com",
  messagingSenderId: "182711486737",
  appId: "1:182711486737:web:16f080e56483e7e2e664b0",
  measurementId: "G-MCBZ2L5FHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div id='someID' className='outfit-font text-white relative'>
      <div className='flex flex-col z-10'>
        <HomePage />
        <Portfolio />
      </div>
      <div className='absolute top-0 left-0 h-full w-full overflow-visible -z-10 '>
        <BackgroundImage />
      </div>
    </div>
  );
}

export default App;
