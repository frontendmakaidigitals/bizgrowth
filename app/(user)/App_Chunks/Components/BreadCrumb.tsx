import React from "react";
import Link from "next/link";

interface BreadCrumbProps {
  path: string;
  params?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ path }) => {
  const formatUrlPart = (part: string) => part.replace(/-/g, " ");

  const segments = path.replace(/^\/+/, "").split("/").filter(Boolean);


  return (
    <ul className="flex items-center container gap-1 my-5 text-sm">
      <li>
        <Link href="/" className="text-blue-600">Home</Link>
      </li>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <li>/</li>
          <li className="capitalize">{formatUrlPart(segment)}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default BreadCrumb;
