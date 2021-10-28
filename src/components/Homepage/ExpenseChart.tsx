import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { Checkbox } from "../reusable/Checkbox";
import { ExpenseChart_query$key } from "./__generated__/ExpenseChart_query.graphql";

type ExpenseGraphProps = {
  query: ExpenseChart_query$key;
};

type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderWidth: number;
};

type ChartData = {
  labels: string[];
  datasets: Dataset[];
};

const ChartContainer = styled.div`
  width: 400px;
`;

export const ExpenseChart = ({ query }: ExpenseGraphProps) => {
  const [chartData, setChartData] = useState<ChartData>({} as ChartData);
  const [showAllExpenses, setShowAllExpenses] = useState<boolean>(false);
  const response = useFragment<ExpenseChart_query$key>(
    graphql`
      fragment ExpenseChart_query on Query {
        expenses: userExpenses(first: 2147483647) {
          edges {
            node {
              id
              name
              price
            }
          }
        }
        me {
          monthlyWage
        }
      }
    `,
    query
  );

  const getRandomColors = (iterations: number): string[] => {
    let colors = [];
    const hex = "0123456789ABCDEF".split("");

    for (let i = 0; i < iterations; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }

    return colors;
  };

  const chart = () => {
    let dataValues = [response?.me?.monthlyWage / 100];
    let dataLabels = ["Ganhos mensais"];
    let backgroundColors = getRandomColors(response.expenses.edges.length);

    if (!showAllExpenses) {
      let expenseSum = 0;
      response.expenses.edges.map(({ node }) => (expenseSum += node.price));
      dataValues.push(expenseSum / 100);
      dataLabels.push("Gastos totais");

      const chartData = {
        labels: dataLabels,
        datasets: [
          {
            label: "Expense",
            data: dataValues,
            backgroundColor: ["rgba(32, 129, 226, 1)", ...backgroundColors],
            borderWidth: 4,
          },
        ],
      } as ChartData;

      setChartData(chartData);
      return;
    }

    for (const dataObj of response?.expenses?.edges) {
      dataValues.push(dataObj.node.price / 100);
      dataLabels.push(dataObj.node.name);
    }

    const chartData = {
      labels: dataLabels,
      datasets: [
        {
          label: "Expense",
          data: dataValues,
          backgroundColor: ["rgba(32, 129, 226, 1)", ...backgroundColors],
          borderWidth: 4,
        },
      ],
    } as ChartData;

    setChartData(chartData);
    return;
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    chart();
  }, [response, showAllExpenses]);

  return (
    <ChartContainer>
      <Pie data={chartData} />
      <Checkbox
        isChecked={showAllExpenses}
        onclickFn={() => setShowAllExpenses((prev) => !prev)}
        title="Mostrar todas as despesas"
      />
    </ChartContainer>
  );
};
