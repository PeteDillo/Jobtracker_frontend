import React, { useState, useEffect } from "react";
import axios from "axios";

function JobApplicationList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the job applications from the backend
    axios
      .get("http://localhost:3000/api/job-applications")
      .then((response) => {
        console.log(response.data); // log the response data
        setApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); // The empty array ensures that the effect only runs once

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {applications.map((application) => (
        <li key={application._id}>
          {application.companyName} - {application.jobTitle} -{" "}
          {application.status}
        </li>
      ))}
    </ul>
  );
}

export default JobApplicationList;
