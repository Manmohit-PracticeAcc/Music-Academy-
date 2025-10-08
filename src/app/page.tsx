import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
export default function Home() {
  return (
      <main className="min-h-screen bg-black/6 antialiased bg-grid-white/[0.02] ">
          <HeroSection />
          <FeaturedCourses />
          <WhyChooseUs /> 
          <MusicSchoolTestimonial />
          <UpcomingWebinars />
          <Instructors />
      </main>
  );
}
