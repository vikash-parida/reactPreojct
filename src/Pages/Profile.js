import React from "react";
import '../Styles/Styles.css'

function Profile() {
  return (
    <div className="container my-4" id="profile">
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7  order-md-2">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th scope="row">Company Name</th>
                <td>Mitra Enterprises</td>
              </tr>
              <tr>
                <th scope="row">Established</th>
                <td>2018</td>
              </tr>
              {/* <tr>
                <th scope="row">Nature of Business</th>
                <td>Exporter and OEM Manufacturer</td>
              </tr>
              <tr>
                <th scope="row">Company CEO</th>
                <td>Mr.Nikhil Medhe</td>
              </tr> */}
              <tr>
                <th scope="row">Email Id</th>
                <td>sales@concretemitra.com</td>
              </tr>
              <tr>
                <th scope="row">Head Office</th>
                <td>
                  <tr>
                    Office No. 1/A, Kalyan-Dipti CHS, Near Birla College,{" "}
                  </tr>
                  <tr>Beside Hotel Paradise Kalyan, West. </tr>
                  <tr>Thane, Maharashtra, India, 421301.</tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid"
            src='https://source.unsplash.com/400x400/?rain,laptop'
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
