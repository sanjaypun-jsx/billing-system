import "./styles.scss";
import { Button, Col, Divider, Row, Slider } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import { PointsList } from "./Files/PointsList.js";
import Points from "./Components/Points";

export default function App() {
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [views, setViews] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!isYearlyBilling) {
      if (views < 10) {
        setPrice(8);
      } else if (views < 50) {
        setPrice(12);
      } else if (views < 100) {
        setPrice(16);
      } else if (views < 500) {
        setPrice(24);
      } else if (views < 1000) {
        setPrice(36);
      }
    } else if (isYearlyBilling) {
      if (views < 10) {
        setPrice(0.75 * 8);
      } else if (views < 50) {
        setPrice(0.75 * 12);
      } else if (views < 100) {
        setPrice(0.75 * 16);
      } else if (views < 500) {
        setPrice(0.75 * 24);
      } else if (views < 1000) {
        setPrice(0.75 * 36);
      }
    }
  }, [views, isYearlyBilling]);
  function handleSwitch(checked) {
    setIsYearlyBilling((prevState) => !prevState);
  }

  function onChange(value) {
    console.log("onChange: ", value);
    setViews(value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }
  return (
    <div className="App">
      <div>
        <h1>Simple, traffic-based pricing</h1>
        <p> Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className="offer-box">
        <div className="views-price">
          <p style={{ textTransform: "uppercase", marginTop: 15 }}>
            {views}k pageviews
          </p>
          <p>
            <span
              style={{
                color: "hsl(227, 35%, 25%)",
                fontWeight: 600,
                fontSize: 30
              }}
            >
              ${price}
            </span>
            <span>/month</span>
          </p>
        </div>

        <Slider
          defaultValue={30}
          onChange={onChange}
          onAfterChange={onAfterChange}
          min={0}
          max={1000}
        />

        <div>
          <p className="billing-discount">
            Monthly Billing <Switch defaultChecked onChange={handleSwitch} />
            Yearly Billing <span className="discount-style">25% discount </span>
          </p>
        </div>
        <Divider style={{ marginTop: "10%" }} />
        <Row style={{ marginTop: "5%" }}>
          <Col span={16} xs={24} sm={16} md={16}>
            {PointsList?.map((point) => {
              return <Points key={point.id}>{point.des}</Points>;
            })}
          </Col>
          <Col span={8} xs={24} sm={8} md={8} style={{ margin: "auto" }}>
            <Button>Start my trial</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
