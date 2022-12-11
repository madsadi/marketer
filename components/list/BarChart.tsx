import ReactEcharts from "echarts-for-react";

export default function BarChart(){
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)',
                },
            }
        ]
    };

    return(
        <ReactEcharts style={{height: "350px"}} option={option}/>
    )
}