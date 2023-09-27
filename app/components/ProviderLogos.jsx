import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProviderLogos = ({ respnose }) => {
  return (
    <div className="rounded h-72 flex justify-center items-center">
      <Link href={`/${respnose.id}/${respnose.slug}`}>
        <Image
          src={respnose.logo}
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
            height: "200px",
            border: "3px solid var(--global-text-primary)",
            objectFit: "cover",
            marginInline: "20px"
          }}
          alt="provider logo"
        />
      </Link>
    </div>
  );
};

export default ProviderLogos;
