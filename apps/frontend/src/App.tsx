import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  );
}

export default App;
