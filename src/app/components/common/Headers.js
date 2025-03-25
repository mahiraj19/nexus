import React from "react";
import Image from "next/image";
import { Anchor, Col, Row } from "antd";
import "./style.css";
import NexusSvg from "./nexus1.png";
import "../website.css";
function AppHeader() {
  const anchorItems = [
    { key: "home", href: "#hero", title: "Home" },
    { key: "about", href: "#about", title: "About" },
    { key: "contact", href: "#contact", title: "Contact" },
  ];

  return (
    <div className="w-full shadow-md bg-white px-6 py-3">
      <Row align="middle" justify="space-between">
        <Col>
          <Image
            src={NexusSvg}
            alt="Logo"
            width={100} // Set explicit width
            height={60} // Set explicit height
            priority
            style={{ marginLeft: "25px" }}
          />
          ;
        </Col>

        <Col>
          <Anchor style={{marginRight: "15px"}} direction="horizontal" items={anchorItems} />
        </Col>
      </Row>
    </div>
  );
}

export default AppHeader;
