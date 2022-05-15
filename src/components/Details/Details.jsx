import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart, registerables } from "chart.js";

import useStyles from "./style";
import useTransactions from "../../useTransactions";

const DetailsCard = ({ title, subheader }) => {
  Chart.register(ArcElement);
  Chart.register(...registerables);
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  // console.log(chartData);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Typography variant="h5"> ₹{total}</Typography>
        <Doughnut type="pie" data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
