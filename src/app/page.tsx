import MaxWidthWapper from "@/components/MaxWidthWapper";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        {/* 
          lg:grid         // Creates a grid in the page
          lg:grid-cols-3  // Creates 2 equally spaced columns in the grid 
        */}
        <MaxWidthWapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6">
            <h1 className="text-5xl font-bold w-fit mt-16 tracking-tight text-balance !leading-tight text-gray-900 text-center">
              Your Image on a{" "}
              <span className="bg-green-600 text-white px-2">Custom</span> Phone
              Case
            </h1>

            <p className="text-lg text-center mt-8 text-balance">
              Capture your favorite memories with your own,{" "}
              <span className="font-semibold">one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your phone
              case.
            </p>

            <ul className="flex flex-col items-center mt-8 font-medium">
              <div className="space-y-2">
                <li className="flex gap-1.5">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  High quality, Durable material
                </li>
                <li className="flex gap-1.5">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  print guarantee
                </li>
                <li className="flex gap-1.5">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Modern iphone phones supported
                </li>
              </div>
            </ul>

            <div className="flex flex-col mt-12 items-center gap-5">
              <div className="flex -space-x-4">
                <img
                  className="h-10 w-10 object-cover rounded-full ring-2"
                  src="/users/user-1.png"
                />
                <img
                  className="h-10 w-10 object-cover rounded-full ring-2"
                  src="/users/user-2.png"
                />
                <img
                  className="h-10 w-10 object-cover rounded-full ring-2"
                  src="/users/user-3.png"
                />
                <img
                  className="h-10 w-10 object-cover rounded-full ring-2"
                  src="/users/user-4.jpg"
                />
                <img
                  className="h-10 w-10 object-cover rounded-full ring-2"
                  src="/users/user-5.jpg"
                />
              </div>

              <div className="flex gap-0.5">
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
              </div>
            </div>
          </div>
        </MaxWidthWapper>
      </section>
    </div>
  );
}
