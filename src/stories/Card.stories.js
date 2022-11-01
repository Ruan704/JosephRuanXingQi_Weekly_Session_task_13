import React from "react";

import { Card } from "./Card";

export default {
  title: "Component/Card",

  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Cards = Template.bind({});
