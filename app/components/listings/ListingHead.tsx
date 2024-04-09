"use client";

import useCountries from "@/app/hooks/useCountries";
import type { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  id: string;
  imageSrc: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  id,
  imageSrc,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="w-full object-cover"
        />

        <div
          className="
        absolute right-5 top-5
        "
        >
          <HeartButton currentUser={currentUser} listingId={id} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
