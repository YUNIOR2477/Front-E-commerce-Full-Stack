import BannerDiscount from "@/components/banner-discount";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
     <FeaturedProducts/>
     <BannerDiscount/>
     <ChooseCategory/>
    </main>
  );
}
