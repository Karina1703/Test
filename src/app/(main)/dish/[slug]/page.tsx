import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Welcome to the custom page</h1>
      <Link
        href="/"
        style={{
          color: "blue",
          fontSize: "2rem",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Link to home
      </Link>
    </div>
  );
};

export default page;
