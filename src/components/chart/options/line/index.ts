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
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [100, 200, 300, 102, 104, 108, 66, 136, 144, 80, 76, 320],
        type: "line",
      },
    ],
  };
  return option;
};
export default {
  getLineOption,
};
