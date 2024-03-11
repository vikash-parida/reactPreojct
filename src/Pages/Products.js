import React from "react";
import Vibrator1 from "../Images/Vibrator1.jpg";
import Vibrator2 from "../Images/Vibrator2.jpg";
import Vibrator3 from "../Images/Vibrator3.jpg";
import Vibrator4 from "../Images/Vibrator4.jpg";
import Vibrator5 from "../Images/Vibrator5.jpg";
import Vibrator6 from "../Images/Vibrator6.jpg";
import Vibrator7 from "../Images/Vibrator7.jpg";
import Vibrator8 from "../Images/Vibrator8.jpg";
const VIBRATOR1_PDF_FILE = "http://localhost:3000/vibrator_1pdf.pdf";
const VIBRATOR2_PDF_FILE = "http://localhost:3000/vibrator_2pdf.pdf";
const VIBRATOR4_PDF_FILE = "http://localhost:3000/vibrator_4pdf.pdf";
const VIBRATOR5_PDF_FILE = "http://localhost:3000/vibrator_5pdf.pdf";

function Products() {
  const DownloadCatalog = (url) => {
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
    <div className="container" id="products">
      <nav aria-label="breadcrumb  bg-secondary text-white">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>

      <div className="row row-cols-1 g-3 d-flex justify-content-around">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator1}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Standard Uras Vibrator</h6>
                <p className="card-text text-muted">
                  The Explosion-Proof Vibrator line has added safety features
                  allowing it to comply with strict explosion proof standards.
                </p>
                <p className="card-text">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => {
                      DownloadCatalog(VIBRATOR1_PDF_FILE);
                    }}
                  >
                    Catalog
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator2}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">
                  Standard Single Phase Uras Vibrator
                </h6>
                <p className="card-text text-muted">
                  Single-phase Vibrators can be used with household or portable
                  power supplies.
                </p>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    DownloadCatalog(VIBRATOR2_PDF_FILE);
                  }}
                >
                  Catalog
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator3}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Explosion Proof Uras Vibrator</h6>
                <p className="card-text text-muted">
                  The Explosion-Proof Vibrator line has added safety features
                  allowing it to comply with strict explosion proof standards.{" "}
                </p>
                <p className="card-text">
                  <a href="#contactus">
                    <button className="btn btn-sm btn-outline-secondary">
                      Catalog
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator4}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">High Frequency Uras Vibrator</h6>
                <p className="card-text text-muted">
                  High Frequency Vibrators provide vibration frequencies ranging
                  from 100 to 180Hz, which is particularly useful for concrete
                  filling.
                </p>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    DownloadCatalog(VIBRATOR4_PDF_FILE);
                  }}
                >
                  Catalog
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator5}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Flange Mount Uras Vibrator</h6>
                <p className="card-text text-muted">
                  Flange Mount Vibrators create 3-dimensional vibration using
                  only a single unit, particularly useful for circular screens.
                </p>
                <p className="card-text">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => {
                      DownloadCatalog(VIBRATOR5_PDF_FILE);
                    }}
                  >
                    Catalog
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator6}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">CVC Turbine Air Vibrator</h6>
                <p className="card-text text-muted">
                  Light and compact, pneumatic turbine vibrators use compressed
                  air to produce circular vibration.
                </p>
                <a href="#contactus">
                  <button className="btn btn-sm btn-outline-secondary">
                    Catalog
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator7}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">CVC Piston Air Vibrator</h6>
                <p className="card-text text-muted">
                  Light and compact, pneumatic piston vibrators use compressed
                  air to produce linear vibration.
                </p>
                <p className="card-text">
                  <a href="#contactus">
                    <button className="btn btn-sm btn-outline-secondary">
                      Catalog
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={Vibrator8}
                width={170}
                height={190}
                className="card-img-top"
                alt="vibrator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">CVC Single Impactor</h6>
                <p className="card-text text-muted fs-6">
                  Air impactors use compressed air to produce forceful impacts,
                  useful for preventing blockages and freeing sticky materials
                  from surfaces.
                </p>
                <a href="#contactus">
                  <button className="btn btn-sm btn-outline-secondary">
                    Catalog
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
