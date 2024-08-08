import MaxWidthWapper from "@/components/MaxWidthWapper";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        {/* 
          lg:grid         // Creates a grid in the page
          lg:grid-cols-3  // Creates 2 equally spaced columns in the grid 
        */}
        <MaxWidthWapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 xl:gap-x-8 xl:pt-32 bg-orange-600">
          <div className="col-span-2 bg-blue-500 px-6">
            <h1 className="text-5xl font-bold w-fit mt-16 tracking-tight text-balance !leading-tight text-gray-900">
              Add Your Image on a
              <span className="bg-green-600 text-white px-2">Custom</span> Phone
              Case
            </h1>

            <ul>
              <li>
                <Check className="h-5 w-5 text-green-600" />
                High quality, Durable material
              </li>
              <li>5 year print guarantee</li>
              <li>Modern iphone phones supported</li>
            </ul>
          </div>
        </MaxWidthWapper>
      </section>
    </div>
  );
}
