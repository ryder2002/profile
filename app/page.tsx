import Header from "@/components/Header";
import Bio from "@/components/Bio";
import Certificate from "@/components/Certificate";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <>
      <AudioPlayer />
      <StarField />
      <main className="min-h-screen relative">
        <div className="max-w-card mx-auto bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl my-4 overflow-hidden border border-white/20">
          <Header />
          <hr className="border-white/10" />
          <Bio />
          <hr className="border-white/10" />
          <Certificate />
          <hr className="border-white/10" />
          <CTASection />
          <hr className="border-white/10" />
          <Footer />
        </div>
      </main>
    </>
  );
}