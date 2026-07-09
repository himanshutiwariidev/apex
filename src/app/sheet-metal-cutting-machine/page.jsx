import ProductSeoPage from "@/components/ProductSeoPage";
import { productPages } from "../productPages";

const page = productPages.sheetMetal;

export const metadata = {
  ...page.metadata,
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/sheet-metal-cutting-machine",
  },
};

export default function SheetMetalCuttingMachinePage() {
  return <ProductSeoPage page={page} />;
}
