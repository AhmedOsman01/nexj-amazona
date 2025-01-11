import { HomeCarousel } from "@/components/shared/home/home-carousel"
import data from "@/lib/data"

export default function Home() {
  return (
    <div className="h1-bold text-center p-10">
      <HomeCarousel items={data.carousels} />
    </div>
  );
}
