import React from "react";

const CVViewer = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
      <h1>My CV</h1>
      <iframe
        src="/Guillaume_Ayad_CV.html"
        title="CV"
        style={{ width: "100%", height: "80vh", border: "none" }}
      ></iframe>
    </div>
  );
};

export default CVViewer;
