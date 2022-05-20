import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";
import axios from "axios";

const ReportingPage = () => {
  // tried sth -- not gud
  // const [records, setRecords] = useState([])

  // const fetchReports = aync () => {
  //     const { data } = await axios.get('/api/notes');
  //     setRecords(data);
  //     console.log(data);
  // };
  // useEffect(() => {
  //     fetchReports();
  // }, []);
  return (
    <MainScreen title="Reporting Dashboard" style={{ marginTop: 40 }}>
      <Link to="createReport">
        <Button style={{ marginLeft: 10, marginBottom: 6, marginTop: 10 }}>
          Report an Event
        </Button>
        <h2 style={{ marginLeft: 10, marginTop: 30, marginBottom: 10 }}>
          Ongoing Reports
        </h2>
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              Title
            </span>
            <div>
              <Button variant="outline-info" className="mx-2" size="sm">
                See status
              </Button>
              <Button variant="outline-danger" className="mx-2" size="sm">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Link>
    </MainScreen>
  );
};

export default ReportingPage;
