'use client'

import { useTheme } from '../../providers/theme-provider'
import Chart from 'react-apexcharts'
import { emerald } from 'tailwindcss/colors'
import { CardContent } from '../ui/card';

interface OperationAccumulatedChartProps {
    prices: number[];
    timestamps: string[];
}

export default function OperationAccumulatedChart({
    prices,
    timestamps,
}: OperationAccumulatedChartProps) {
    const { theme } = useTheme()

    return (
        <CardContent className="p-0">
            <Chart
                type="area"
                width="100%"
                height={260}
                options={{
                    chart: {
                        id: 'webhook-events-amount-chart',
                        toolbar: {
                            show: false,
                        },
                        parentHeightOffset: 0,
                        sparkline: {
                            enabled: false,
                        },
                    },
                    grid: {
                        show: false,
                        padding: {
                            left: -9,
                            right: -1,
                            bottom: -8,
                            top: -20,
                        },
                    },
                    tooltip: {
                        // enabled: false,
                        theme: theme,
                        style: {
                            fontFamily: 'Inter',
                            fontSize: '11px',
                        },
                        y: {
                            formatter: (value) => Math.round(value).toString(),
                        },
                    },
                    colors: [emerald[500]],
                    stroke: {
                        curve: 'smooth',
                        width: 3,
                        lineCap: 'round',
                    },
                    fill: {
                        gradient:
                            theme === 'light'
                                ? {
                                    opacityFrom: 0.8,
                                    opacityTo: 0.4,
                                }
                                : {
                                    opacityFrom: 0.4,
                                    opacityTo: 0.1,
                                },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    xaxis: {
                        labels: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        categories: timestamps,
                        tooltip: {
                            enabled: true,
                        },
                    },
                    yaxis: {
                        labels: {
                            show: false,
                        },
                    },
                }}
                series={[
                    {
                        name: 'Preços',
                        data: prices,
                    },
                ]}
            />
        </CardContent>
    )
}