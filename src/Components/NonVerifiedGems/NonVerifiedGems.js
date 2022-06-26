import React, { useEffect, useState } from "react";
import "./NonVerifiedGems.css";
import { getNonVerifiedGems } from "../../Services/ProductService";
import { getUser, updateGems } from "../../Services/UserService";
import { Link } from "react-router-dom";

const NonVerifiedGems = () => {
  const [nonVerifiedGems, setNonVerifiedGems] = useState([]);
  const [userData, setUserData] = useState({});

  const getGems = async () => {
    try {
      const res = await getNonVerifiedGems();
      setNonVerifiedGems(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateGem = (gems) => {
    try {
      updateGems(gems._id, { ...gems, verified: true })
        .then((res) => {
          console.log(res);
          alert("Gem Certificate verified successfully!")
          getGems();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      console.log("error");
    }
  };

  const userInfo = async (id) => {
    try {
      const res = await getUser(id);
      setUserData(res);
      console.log("calledddddddddddddddddddddddd");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGems();
  }, []);

  return (
    <>
      <div className="container orders">
        <div className="card">
          <div className="table-responsive">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Seller Name</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Product</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Gem Certificate</th>
                  {/* <th></th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {nonVerifiedGems.map((gems) => (
                  <tr>
                    <td>
                      <div className="d-flex px-2">
                        {/* <div>
                                           <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" className="avatar avatar-sm rounded-circle me-2" />
                                       </div> */}
                        <div className="my-auto">
                          {/* <h6 className="mb-0 text-xs">{userData.data.data.firstName}</h6> */}
                          <h6 className="mb-0 text-xs"></h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-dot me-4">
                        <i className="bg-info"></i>
                        <span className="text-dark text-xs">{gems.title}</span>
                      </span>
                    </td>
                    <td className="align-middle">
                      <button className="btn btn-link text-xs mb-0 viewButton" onClick={() => window.open(gems.gem_certificate, "_blank")}>
                        View
                      </button>
                    </td>
                    {/* {gems.verified == true? 
                    <td className="align-middle text-center text-sm"></td>
                    } */}
                    <td className="align-middle">
                      <button
                        className="btn activate-button p-3"
                        onClick={() => {
                          updateGem(gems);
                        }}
                      >
                        Verify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonVerifiedGems;
