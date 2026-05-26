import React from "react";
import { Title, Link, Meta } from "react-head";

const Head = () => (
  <>
    <Title>Zhongyu Zhang</Title>
    <Meta
      name="description"
      content="Zhongyu Zhang's personal website and project portfolio."
    />
    <Meta name="keywords" content="zhongyu zhang, web developer, portfolio" />
    <Link rel="canonical" content="https://www.webzhongyu.com" />
  </>
);

export default Head;
