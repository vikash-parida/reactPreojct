import React from "react";
import "../Styles/Styles.css";
import Mission_ani from "./Mission_ani.json";
import Vision_ani from "./Vision_ani.json";
import Lottie from "lottie-react";

function Statements() {
  return (
    <div className="container my-4" id="statements">
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row card-sizing g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Our Mission
              </strong>
              {/* <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div> */}
              <p className="mb-auto">
                We are the Premier Provider of Industrial Solutions, delivering
                exceptional value to our clients through innovative products and
                unparalleled service.We strive to exceed customer expectations
                by offering top- quality equipment, expert advice, and reliable
                support.
              </p>
              {/* <a href="#" className="stretched-link">
                Know More
              </a> */}
            </div>
            <div className="col-auto d-none d-lg-block">
              <Lottie
                className="mx-auto"
                animationData={Mission_ani}
                loop={true}
                style={{ maxWidth: 200, maxHeight: 250 }}
              />
            </div>
          </div>
        </div>

        {/* vision  */}
        <div className="col-md-6">
          <div className="row card-sizing g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Our Vision
              </strong>
              {/* <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div> */}
              <p className="mb-auto">
                We aim to be the first choice for clients seeking reliable and
                efficient industrial equipment, setting the standard for quality
                and service in our industry. We envision a future where Mitra
                Enterprises is synonymous with trust, integrity, and superior
                performance.
              </p>
              {/* <a href="#" className="stretched-link">
                Know More
              </a> */}
            </div>
            <div className="col-auto d-none d-lg-block">
              <Lottie
                className="mx-auto"
                animationData={Vision_ani}
                loop={true}
                style={{ maxWidth: 200, maxHeight: 250 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statements;
