const getPieOption = (): any => {
  const option = {
    // title: {
    //   text: "Nightingale Chart",
    //   subtext: "Fake Data",
    //   left: "center",
    // },
    legend: {
      orient: "vertical",
      right: 80,
      top: "middle",
    },
    tooltip: {
      // trigger: "item",
      // formatter: "{a} <br/>{b} : {c} ({d}%)",
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
        name: "Radius Mode",
        type: "pie",
        radius: [20, 140],
        center: ["25%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 33, name: "rose 2" },
          { value: 28, name: "rose 3" },
          { value: 22, name: "rose 4" },
          { value: 20, name: "rose 5" },
          { value: 15, name: "rose 6" },
          { value: 12, name: "rose 7" },
          { value: 10, name: "rose 8" },
        ],
      },
    ],
  };
  return option;
};
export default {
  getPieOption,
};
