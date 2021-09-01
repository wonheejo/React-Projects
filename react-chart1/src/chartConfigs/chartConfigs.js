import 'chartjs-adapter-date-fns';

export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5
  },

  animation: {
    duration: 1500,
  },

  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: {
        type: "time",
        distribution: 'linear',
        ticks: {
          source: 'data',
          display: true,
        },
        title: {
          display: true,
          text: 'Date',
        }
      },
  },
};