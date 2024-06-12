import Image from "next/image";

function DownloadResumeBtn(){

  const resumeLink = "/Achal Pathak Resume SDE2 5yrs experience.pdf";
  return (

          <a href={resumeLink} target="_blank" download>
          <button className="duration-300 hover:scale-105 bg-gray-300 hover:bg-purple-400 text-purple-900 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Image
              className=""
              src="/pdf-file-svgrepo-com.svg"
              width={25}
              height={25}
              alt="ProfilePic"
            />
            <span className="px-4">Download PDF</span>
          </button>
          </a>
  );
}

export default DownloadResumeBtn;
