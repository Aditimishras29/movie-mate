// import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Admin/components/Navbar";
import Carousel from "@/components/Carousel";
import LatestReleasesCarousel from "@/components/ReleaseCarousel";
import Trending from "@/components/Trending";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <LatestReleasesCarousel />
      <Trending />
    </div>
  );
}
