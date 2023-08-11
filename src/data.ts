// get dashboards
const allDashboards: any = {
  dashboard: [
    {
      dashboardId: 'uuid',
      someData: '',
      name: '',
    },
  ],
};

//get Dashboard

const oneDashboard = {
  widgets: [
    {
      type: 'type 1 | type2 | type3',
      data: {},
      metaData: {
        titleLable: 'asd',
        aggregationLable: 'dfsdfZ',
      },
      uuid: '',
      someRequestFormat: {
        column: 'sales',
        aggreation: 'sum',
        key: 'totalSales',
        timeFrame: {
          start: 'timestamp',
          end: 'timestamp',
        },
      },
      positioning: {
        x: 3,
        y: 1,
        width: 4,
        height: 2,
      },
    },
  ],
};

//get widget details  someRequestFormat
const widgetDetails = {
  //all data
  totalSales: [],
};
