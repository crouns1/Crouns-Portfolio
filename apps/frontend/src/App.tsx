import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSectin from './sections/ContactSection';
function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;
