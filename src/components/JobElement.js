import React from "react";
import "./JobElement.scss";

const JobElement = (props) => {
  const { id, title, batch, ctc, link } = props;
  return (
    <>
      <div className="job-element" key={id}>
        <div className="job-element-left">
          <h3>{id}</h3>
        </div>
        <div className="job-element-details">
          <h4>
            Title: <span>{title}</span>
          </h4>
          <h4>
            Batch: <span>{batch}</span>
          </h4>
          <h4>
            CTC: <span>{ctc}</span>
          </h4>
        </div>
        <div className="job-element-right">
          <a href={link} target="_blank" rel="noreferrer">
            Apply
          </a>
        </div>
      </div>
    </>
  );
};

export default JobElement;
