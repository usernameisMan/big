import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
  checked: number;
  rectified: number;
  notRectified: number;
  waitRectify: number;
};

export default function CheckSituationDonutChart({
  className,
  checked,
  rectified,
  notRectified,
  waitRectify,
}: Props) {
  console.log(
    `📄 ~ {
  className,
  checked,
  rectified,
  notRectified,
  waitRectify,
}:`,
    {
      className,
      checked,
      rectified,
      notRectified,
      waitRectify,
    },
  );
  const ele = useRef(null);

  useEffect(() => {
    // Create the echarts instance
    const myChart = echarts.init(ele.current);

    // Draw the char
    myChart.setOption({
      series: [
        {
          name: 'Access From1',
          type: 'pie',
          radius: ['0', '30%'],
          data: [{ value: 100 }],
          labelLine: {
            show: false,
          },
          color: [
            'rgba(230, 230, 230, .5)',
            'rgba(130, 197, 249, .3)',
            'rgba(140, 241, 235, 1)',
            'rgba(255, 217, 119, 1)',
          ],
        },
        {
          name: 'Access From2',
          type: 'pie',
          radius: ['40%', '80%'],
          data: [
            { value: 0 },
            { value: rectified },
            { value: waitRectify },
            { value: 0 },
          ],
          labelLine: {
            show: false,
          },
          color: [
            'rgba(230, 230, 230, .5)',
            'rgba(130, 197, 249, .3)',
            'rgba(140, 241, 235, 1)',
            'rgba(255, 217, 119, 1)',
          ],
        },
        {
          name: 'Access From3',
          type: 'pie',
          radius: ['90%', '100%'],
          data: [
            { value: checked },
            { value: 0 },
            { value: 0 },
            { value: notRectified },
          ],
          labelLine: {
            show: false,
          },
          color: [
            'rgba(230, 230, 230, .5)',
            'rgba(130, 197, 249, .3)',
            'rgba(140, 241, 235, 1)',
            'rgba(255, 217, 119, 1)',
          ],
        },
      ],
    });
  }, [rectified, waitRectify, checked, notRectified]);

  return <div className={className} ref={ele}></div>;
}
