import React, { useState } from 'react';
import '../../css/bootstrap.min.css';

function CompetencesTable({skillFamilyList, skillsDictionnary, forCertifs}) {
    const [active, setActive] = useState(skillFamilyList[0]);
    let activeIndex = skillFamilyList.indexOf(active);
  
    return (
      <>
       <div className="card" style={{ maxWidth: 1500 }}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs justify-content-center">
            {skillFamilyList.map((skillName, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={`nav-link ${active === skillName ? 'active' : ''}`}
                  onClick={() => setActive(skillName)}
                >
                  {skillName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          <h5 className="mt-2 mb-4">{active}</h5>
          {activeIndex !== -1 && forCertifs &&
            <div className="row row-cols-1 row-cols-lg-2 justify-content-center g-3">
              {Object.entries(skillsDictionnary[activeIndex]).map(([key, value]) => (
                <div class="card mb-3 mx-2" style={{maxWidth: 600}}>
                  <img src={value[0]} class="card-img-top mx-auto m-2" alt="certificat"/>
                  <div class="card-body">
                    <h5 class="card-title">{key}</h5>
                    <p class="card-text"><small class="text-body-secondary">notions acquises : {value[1]}</small></p>
                  </div>
                </div>
                ))}
            </div>
          }
          
          {activeIndex !== -1 && !forCertifs &&
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
              {Object.entries(skillsDictionnary[activeIndex]).map(([key, value]) => (
                <div className="col card-group g-3" key={key}>
                  <div className="card" style={{ maxWidth: "320px" }}>
                    <div className="row m-2 align-items-center">
                      {value !== "" && (
                        <div className="col-md-4 d-flex justify-content-center">
                          <img
                            src={value}
                            className="img-fluid"
                            alt={`logo ${key}`}
                            style={{ maxHeight: "80px", width: "auto" }}
                          />
                        </div>
                      )}
                      <div className={value !== "" ? "col-md-8" : "col-md-12"}>
                        <div
                          className="card-body d-flex justify-content-center align-items-center"
                          style={{ height: "100%" }}
                        >
                          <h5 className="card-text no-break mb-0 text-center">{key}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          </div>
        </div>
      </>
    )
}

export default CompetencesTable;