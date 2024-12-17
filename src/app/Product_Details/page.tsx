import Image from "next/image"
import pinkSnkrs from "@/images/pinkSnkr.png"
import Button from "@/components/ui/Button"
import { Link } from "lucide-react";
// import Image from "next/image";
 // Adjust the image path as needed

function ProductDetails() {
  return (
    <main className="m-0 p-0">
      <div className="w-[93%] mx-auto mt-10 lg:mt-32 pb-20">
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 mx-auto">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
            <Image
              className="max-h-[400px] md:max-h-[500px] lg:max-h-[653px] max-w-full"
              src={pinkSnkrs}
              alt="Shoe"
              width={653}
              height={653}
              layout="intrinsic"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 px-6 lg:px-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#111111]">
              Nike Air Force 1 PLT.AF.ORM
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-6 lg:leading-7">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid.
              Its inside out inspired construction, including unique layering and
              exposed foam accents, ups the ante on this timeless Jordan Brand
              silhouette. Details like the deco stitching on the Swoosh add coveted
              appeal, while the unexpected shading, rich mixture of materials, and
              aged midsole aesthetic give this release an artisan finish.
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold my-5 text-[#111111]">
              ₹8695.00
            </h2>
            <Link href="/CheckOut"> <Button text="Add To Cart" /></Link>
           
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
