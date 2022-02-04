import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";
import Filepreview from "../cards/Filepreview";
import { Worker } from "@react-pdf-viewer/core";

export default function Ui() {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
        <Navbar />
        <Filepreview />
        <Sidebar />
      </Worker>
    </>
  );
}
