import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
  mainColor?: string;
  mainAmount: number;
  amount: number;
};

export default function CheckAmountDonutChart({
  className,
  mainColor = '#8CF1EB',
  mainAmount,
  amount,
}: Props) {
  const ele = useRef(null);

  useEffect(() => {
    // Create the echarts instance
    const myChart = echarts.init(ele.current);

    // Draw the chart
    myChart.setOption({
      color: [mainColor, 'rgba(160, 160, 160, 0.4)'],
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [{ value: mainAmount }, { value: amount - mainAmount }],
        },
      ],
    });
  }, [amount, mainAmount]);

  return (
    <div className={className} ref={ele}>
      DonutChart
    </div>
  );
}
