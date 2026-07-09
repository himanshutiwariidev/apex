import ProductSeoPage from "@/components/ProductSeoPage";
import { productPages } from "../productPages";

const page = productPages.fiberLaser;

export const metadata = {
  ...page.metadata,
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/fiber-laser-cutting-machine",
  },
};

export default function FiberLaserCuttingMachinePage() {
  return <ProductSeoPage page={page} />;
}
