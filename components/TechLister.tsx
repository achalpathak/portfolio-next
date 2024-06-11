import TechStackData from "@/config/techStack.json";
import Image from "next/image";
import React from "react";

interface TechItem {
  name: string;
  icon_path: string;
}

interface TechStack {
  [key: string]: TechItem[];
}
const TechStack: TechStack = TechStackData;

function TechLister({
  sectionName,
  sectionData,
}: {
  sectionName: string;
  sectionData: Array<{ [key: string]: any }>;
}) {
  return (
    <div>
      <h2 className="mt-8 mb-2 text-xl font-semibold">{sectionName}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2">
        {sectionData.map((eachData, idx) => (
          <li className="p-3 flex items-center bg-zinc-800 rounded" key={idx}>
            <Image
              className="p-2 bg-zinc-700 rounded"
              src={`/${eachData.icon_path}`}
              width={40}
              height={40}
              alt={`${eachData.name}`}
            />
            <span className="text-blue-300 text-lg sm:text-xl mx-3">
              {eachData.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechLister;
