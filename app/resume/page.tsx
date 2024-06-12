"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import DownloadResumeBtn from "@/components/DownloadResumeBtn";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function Resume() {
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);

  // }
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const resumeLink = "/Achal Pathak Resume SDE2 5yrs experience.pdf";

  return (
    <Layout>
      <section className="mx-4 p-4">
        <h1 className="text-3xl">Resume</h1>
        <div className="w-100 flex flex-col justify-center items-center">
          <DownloadResumeBtn />
          <Document file={resumeLink} className="my-6 flex justify-center">
            <Page scale={width > 786 ? 1.6 : 0.6} pageNumber={1} />
          </Document>

          <DownloadResumeBtn />
        </div>
      </section>
    </Layout>
  );
}

export default Resume;
