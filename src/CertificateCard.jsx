import React, { useState } from "react";
import ViewFullImage from "./ViewFullImage";


export default function CertificationCard(props) {

  const [toggleFullImage, setToggleFullImage] = useState(false);

  return (
    <>
      <div
        className="card-container border-solid border-gray-50 p-3 flex flex-col justify-start"
        style={{
          width: "20rem",
          border: "0.5px solid #0369a1",
          borderRadius: "20px",
        }}
      >
        <img
          src={props.ImgSrc}
          className="rounded-xl mb-3"
          style={{ maxWidth: "100%", height: "13.5rem", objectFit: "cover" }}
        ></img>
        <div className="flex flex-col" style={{ flexGrow: "1" }}>
          <h4 className="text-sky-500 font-bold text-wrap px-1">
            {props.Name}
          </h4>
          <p className="text-gray-400 px-1 text-sm">{props.Company}</p>
          <p className="text-gray-600 text-sm mb-8 px-1">
            Issue Date: {props.IssueDate}
          </p>
        </div>
        <div className="flex">
        <a
          className="px-5 py-1 mx-1 text-sm text-center border border-[#0284c7] rounded flex view-credential-btn"
          style={{
            color: "#fff",
          }}
          onClick={() => setToggleFullImage(true)}
        >View Certificate
        </a>
        <a
          href={props.Link}
          className="px-5 py-1 mx-1 text-sm text-center bg-[#0284c7] rounded flex view-credential-btn"
          style={{
            backgroundColor: "#0284c7",
            color: "#fff",
          }}
        >View credential
        </a>
        </div>
      </div>

      {toggleFullImage && (
        <ViewFullImage
          imgSrc={props.ImgSrc}
          setToggleFullImage={setToggleFullImage}
        />
      )}
    </>
  );
}
