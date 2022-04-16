const getLineOption = (): any => {
  const option = {
    color: ["#4CDFE8"],
    title: {
      text: "Views",
      textStyle: {
        color: "rgba(27, 39, 103, 1)",
        fontSize: 12,
      },
      padding: [24, 0, 0, 40],
    },
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [],
        type: "line",
      },
    ],
  };
  return option;
};
export default {
  getLineOption,
};
