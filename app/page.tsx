import BannerDiscount from "@/components/banner-discount";
import CarouselTextBanner from "@/components/carousel-text-baner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {

  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
    </main>
  );
}
