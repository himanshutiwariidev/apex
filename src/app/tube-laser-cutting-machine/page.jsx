import ProductSeoPage from "@/components/ProductSeoPage";
import { productPages } from "../productPages";

const page = productPages.tubeLaser;

export const metadata = {
  ...page.metadata,
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/tube-laser-cutting-machine",
  },
};

export default function TubeLaserCuttingMachinePage() {
  return <ProductSeoPage page={page} />;
}
