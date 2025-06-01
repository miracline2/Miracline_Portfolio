import Footer from "./components/Footer";
import Header from "./components/Header"
import ProfileBanner from "./components/Profile/ProfileBanner"
import Skills from "./components/TeckStack/Skills";
import { DarkTheme } from "./styles/Styles"

const App = () => {
  return (
    <div className={`${DarkTheme.backGround} w-full min-h-screen pt-20`}>
      <Header />
      <ProfileBanner />
      <Skills/>


      <Footer/>
    </div>
  );
};


export default App
