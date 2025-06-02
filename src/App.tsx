import ScrollRevealWrapper from "./common/ScrollRevealWrapper";
import ExperienceDetails from "./components/Experience/ExperienceDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfileBanner from "./components/Profile/ProfileBanner";
import ProjectDetails from "./components/Project/ProjectDetailsCard";
import ResumeViewer from "./components/Resume/ResumeViewer";
import Skills from "./components/TeckStack/Skills";
import { DarkTheme } from "./styles/Styles";

const App = () => {
  const sections = [
   
    <ProfileBanner />,
    <Skills />,
    <ExperienceDetails />,
    <ProjectDetails/>,
    <ResumeViewer/>
   
  ];

  return (
    <div className={`${DarkTheme.backGround} w-full min-h-screen pt-20`}>
       <Header />
      {sections.map((Section, index) => (
        <ScrollRevealWrapper key={index} index={index}>
          {Section}
        </ScrollRevealWrapper>
      ))}
       <Footer />,
    </div>
  );
};

export default App;
