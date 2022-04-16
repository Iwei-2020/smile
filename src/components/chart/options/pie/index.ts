const getPieOption = (): any => {
  const option = {
    title: {
      text: "用户分布",
      left: "center",
      top: 18,
    },
    legend: {
      top: "bottom",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/> {b} : {c} ({d}%)",
    },
    toolbox: {
      show: true,
      showTitle: false,
      feature: {
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
        },
      },
    },
    series: [
      {
        name: "用户类型",
        type: "pie",
        radius: [20, 140],
        // center: ["25%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        data: [],
      },
    ],
  };
  return option;
};
export default {
  getPieOption,
};
