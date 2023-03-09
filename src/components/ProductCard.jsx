import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const ProductCard = () => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default ProductCard;
