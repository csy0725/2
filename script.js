Highcharts.chart('container', {

    title: {
        text: ' ',
        align: 'left'
    },

    subtitle: {
        text: '僅統計至112年9月',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '死傷人數 每(千)人'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '資料範圍：民國108年到112年'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '民國108年',
        data: [3.31, 1.91, 2.53, 2.7, 2.94, 2.54, 
            2.71, 0.9, 1.67, 2.45, 3.53, 3.86 ]
    }, {
        name: '民國109年',
        data: [2.74, 2.39, 1.75, 2.43, 2.95, 2.13, 
            2.14, 1.91, 0.6, 2.49, 2.72, 3.34 ]
    }, {
        name: '民國110年',
        data: [2.81, 1.43, 2.01, 2.03, 2, 1.56, 
            2.02, 2.3, 2.34, 3.07, 2.44, 3.17 ]
    }, {
        name: '民國111年',
        data: [2.93, 1.59, 2.72, 1.52, 1.19, 1.05, 0.86, 
            2.19, 2.89, 3.59, 3.28, 3.59 ]
    },{
        name: '民國112年',
        data: [3.22, 2.78, 3.04, 2.83, 3.5, 3.32, 
            3.16, 2.83, 2.9, , ,  ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});