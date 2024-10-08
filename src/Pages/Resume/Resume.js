// import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Resume.pdf";
import resume from '../../assets/images/Resume.png'
import './Resume.css'
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "pdfjs-dist/build/pdf.worker";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div className="mt-5">
      <Container className="resume-section mt-5">
        <Row className="mb-5" style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>


        {/* <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}

        <div className="text-center">
          <img src={resume} alt="" className="w-75" />
        </div>


        <Row style={{ justifyContent: "center", position: "relative" }} className="mt-5">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
