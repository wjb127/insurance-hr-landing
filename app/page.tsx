import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Recruitment from "@/components/Recruitment";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Recruitment />
      <ApplicationForm />
      <Footer />
    </main>
  );
}

