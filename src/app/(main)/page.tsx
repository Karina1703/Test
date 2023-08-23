import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="dish/123">Dish 123</Link>
			<Image src="/next.svg" width={100} height={100} alt="next"></Image>
    </div>
  );
};

export default page;
