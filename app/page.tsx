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
        <div className="max-w-2xl mx-auto my-6 px-4">
          <div className="gradient-border">
            <div className="card-content">
              <Header />
              <div className="h-px bg-gradient-to-r from-transparent via-[#87ceeb]/30 to-transparent" />
              <Bio />
              <div className="h-px bg-gradient-to-r from-transparent via-[#87ceeb]/30 to-transparent" />
              <Certificate />
              <div className="h-px bg-gradient-to-r from-transparent via-[#87ceeb]/30 to-transparent" />
              <CTASection />
              <div className="h-px bg-gradient-to-r from-transparent via-[#87ceeb]/30 to-transparent" />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
