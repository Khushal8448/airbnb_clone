"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <Image
        alt="Logo"
        className="md:block hidden cursor-pointer"
        src="/images/logo.png"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Logo;
