import React from "react";
import Header from "../components/Header";
import "./LandingPage.scss";
import Footer from "../components/Footer";
import JobElement from "../components/JobElement";
import data from "../data.json";

const LandingPage = () => {
  const totalPages = Math.ceil(data.length / 10);

  const [currentPage, setCurrentPage] = React.useState(1);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;

  const currentData = data.slice(firstIndex, lastIndex);

  const NextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const PrevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="landing-page">
        <Header />
        <div className="mid-div">
          <div className="jobs-container">
            {currentData.map((job) => {
              return (
                <JobElement
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  batch={job.batch}
                  ctc={job.ctc}
                  link={job.link}
                />
              );
            })}
          </div>

          <div className="paging-container">
            <div className="paging-left">
              <button className="btn-paging" onClick={PrevPageHandler}>
                Prev
              </button>
            </div>
            <div className="paging-center">
              <h4>
                {currentPage} <span> / {totalPages}</span>
              </h4>
            </div>
            <div className="paging-right">
              <button className="btn-paging" onClick={NextPageHandler}>
                Next
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
