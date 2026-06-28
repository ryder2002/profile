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
        <div className="max-w-2xl mx-auto my-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/20">
              <Header />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <Bio />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <Certificate />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <CTASection />
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
