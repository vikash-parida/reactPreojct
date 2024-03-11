import React from "react";
import UTC_logo from "../Images/UTC_logo.jpg";
import EXENLOGO from "../Images/EXENLOGO.png";
import NMIlogo from "../Images/NMIlogo.png";
const URAS_PDF_FILE = "http://localhost:3000/uras_vibrator_en.pdf";
const EXEN_PDF_FILE = "http://localhost:3000/exen_catalog_vibrators.pdf";
const NIPON_PDF_FILE = "http://localhost:3000/maghammer-en.pdf";

function Downloads() {
  const DownloadFileAtUrl = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <div className="container" id="downloads">
      <nav aria-label="breadcrumb  bg-secondary text-white">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Downloads
          </li>
        </ol>
      </nav>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">OUR CLIENTS</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">URAS TECHNO</th> */}
            <th scope="row">
              <img src={UTC_logo} 
              width={200}
              className="img-fluid"
              alt="uras"
              />
            </th>

            <td>
              <div className="iframe-container">
                <iframe
                  width="250"
                  height="200"
                  src="https://www.youtube.com/embed/rwx7R6uW9ig?si=JJQbGHqU8yyGlH_7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </td>
            <td>
              <a href="https://www.uras-techno.co.jp/">Click Here</a>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  DownloadFileAtUrl(URAS_PDF_FILE);
                }}
              >
                Downloads
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
            <img
              src={EXENLOGO}
              width={200}
              // height={50}
              className="img-fluid"
              alt="Exen"
            /></th>
            <td>
              <div className="iframe-container">
                <iframe
                  width="250"
                  height="200"
                  src="https://www.youtube.com/embed/rwx7R6uW9ig?si=JJQbGHqU8yyGlH_7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </td>
            <td>
              <a href="https://www.exen.co.jp//">Click Here</a>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  DownloadFileAtUrl(EXEN_PDF_FILE);
                }}
              >
                Downloads
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
            <img
              src={NMIlogo}
              width={200}
              // height={50}
              className="img-fluid"
              alt="nmi"
            />
            </th>
            <td>
              <div className="iframe-container">
                <iframe
                  width="250"
                  height="200"
                  src="https://www.youtube.com/embed/rwx7R6uW9ig?si=JJQbGHqU8yyGlH_7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </td>
            <td>
              <a href="https://www.nmi-jpn.com/">Click Here</a>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  DownloadFileAtUrl(NIPON_PDF_FILE);
                }}
              >
                Downloads
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Downloads;
