import { dbConnect } from "@/app/database/db";
import { NextResponse } from "next/server";

// check database connection here
dbConnect();

// it returns all necessary settings that required for our website
export async function POST(request) {
  return NextResponse.json({
    company_name: `E-commerce`,
    version: `1`,
    terems: {
      terms_condition: `<div className='text-3xl'>Terms and Condition</div>`,
    },
    about: {
      about_us: `<div className="flex items-center space-y-4 md:space-x-6 md:space-y-8 justify-center">
      <div className="w-full px-10">
        <p className="text-lg text-gray-600 leading-relaxed">
          At eRequirement, we are dedicated to making your life easier
          by providing a wide range of home services. Whether you need
          plumbing repairs, electrical work, cleaning, or any other
          home-related service, we've got you covered.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Our team of experienced professionals is committed to
          delivering high-quality service and ensuring your
          satisfaction. We take pride in our work and strive to make
          your home a better place.
        </p>
      </div>
    </div>`,
    },
    privacy: {
      privacy_policy: `<div className='text-3xl'>Privacy Policy</div>`,
    },
    payment: {
      payment_gateway: {},
    },
  });
}
