import { useContext } from "react";
import ScrollRevealWrapper from "./common/ScrollRevealWrapper";
import ExperienceDetails from "./components/Experience/ExperienceDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfileBanner from "./components/Profile/ProfileBanner";
import ProjectDetails from "./components/Project/ProjectDetailsCard";
import ResumeViewer from "./components/Resume/ResumeViewer";
import Skills from "./components/TeckStack/Skills";
import { ThemeContext } from "./contextAPI/ThemeContext";
import { DarkTheme, FloatingTheme, LightTheme } from "./styles/Styles";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const sections = [

    <ProfileBanner />,
    <Skills />,
    <ExperienceDetails />,
    <ProjectDetails />,
    <ResumeViewer />,

  ];

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{

          className: '',
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },

          success: {
            duration: 4000,
            style: {
              background: '#10b981',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#10b981',
            },
          },

          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#ef4444',
            },
          },
        }}
      />
      <div className="relative w-full min-h-screen">
        <FloatingTheme />
        <div className={`
    ${theme === 'Dark' ?
            DarkTheme.backGround : LightTheme.backGround} w-full min-h-screen pt-20`}>

          <Header />
          {sections.map((Section, index) => (
            <ScrollRevealWrapper key={index} index={index}>
              {Section}
            </ScrollRevealWrapper>
          ))}
          <Footer />,
        </div>
      </div>
    </>
  );
};

export default App;
