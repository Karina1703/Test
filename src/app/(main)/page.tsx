import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
			<h1>
				Welcome to home page
			</h1>
      <Link
        href="dish/123"
        style={{
          color: "blue",
          fontSize: "2rem",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Link to another page
      </Link>
      <Image src="/next.svg" width={100} height={100} alt="next"></Image>
    </div>
  );
};

export default page;
