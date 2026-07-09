import ProductSeoPage from "@/components/ProductSeoPage";
import { productPages } from "../productPages";

const page = productPages.roboticLaser;

export const metadata = {
  ...page.metadata,
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/robotic-laser-solutions",
  },
};

export default function RoboticLaserSolutionsPage() {
  return <ProductSeoPage page={page} />;
}
