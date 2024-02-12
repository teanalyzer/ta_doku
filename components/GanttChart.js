import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const GanttChart = () => {
    useEffect(() => {
        const gantt = require('highcharts/modules/gantt')
        gantt(Highcharts)
        Highcharts.setOptions({
            lang: {
                months: [
                    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
                ],
                weekdays: [
                    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
                ],
                shortWeekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                decimalPoint: ',',
                thousandsSep: '.',
                rangeSelectorFrom: "Von",
                rangeSelectorTo: "Bis",
                rangeSelectorZoom: "Zeitraum",
                downloadPNG: 'Download PNG',
                downloadJPEG: 'Download JPEG',
                downloadPDF: 'Download PDF',
                downloadSVG: 'Download SVG',
                printChart: 'Diagramm drucken',
                resetZoom: 'Zoom zurücksetzen',
                resetZoomTitle: 'Zoom 1:1 zurücksetzen',
                // Anpassen weiterer Texte
                shortMonths: [
                    'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
                ],
                // Spezifische Textanpassung für 'Week'
                week: 'Woche'
            }
        })
    }, [])

    const options = {
        chart: {
            scrollablePlotArea: {
                minWidth: 1200, // Experimentiere mit diesem Wert
                scrollPositionX: 1
            },
            height: 800
        },
        // title: {
        //     text: 'Projektplanung'
        // },
        yAxis: {
            uniqueNames: true,
            labels: {
                style: {
                    fontSize: '12px' // Pass die Schriftgröße an, falls nötig
                }
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    align: 'left',
                    format: '{point.name}',
                    style: {
                        fontSize: '12px'
                    }
                },
                // Anpassen der Padding-Einstellungen
                pointPadding: 0.1, // Experimentiere mit diesem Wert
                groupPadding: 0, // Experimentiere mit diesem Wert
            }
        },
        series: [
            {
                name: 'Projektaufgaben',
                data: [
                    {
                        start: Date.UTC(2024, 1, 12, 8, 0), // 12. Februar 2024, 8:00 Uhr
                        end: Date.UTC(2024, 1, 13, 17, 0),   // 13. Februar 2024, 17:00 Uhr
                        name: 'KO Selbstreferenz'
                    },
                    { start: Date.UTC(2024, 1, 14, 8, 0), end: Date.UTC(2024, 1, 15, 17, 0), name: '#XXYYYY Prüfung' },
                    { start: Date.UTC(2024, 1, 16, 8, 0), end: Date.UTC(2024, 1, 19, 17, 0), name: 'Baustein-Aufrufe' },
                    { start: Date.UTC(2024, 1, 20, 8, 0), end: Date.UTC(2024, 1, 21, 17, 0), name: '.SET Differenzierung' },
                    { start: Date.UTC(2024, 1, 22, 8, 0), end: Date.UTC(2024, 1, 25, 17, 0), name: '.USES Analyse' },
                    { start: Date.UTC(2024, 1, 26, 8, 0), end: Date.UTC(2024, 1, 27, 17, 0), name: 'Variablen-Abfrage' },
                    { start: Date.UTC(2024, 1, 28, 8, 0), end: Date.UTC(2024, 2, 1, 17, 0), name: 'OMS Versand' },
                    { start: Date.UTC(2024, 2, 1, 8, 0), end: Date.UTC(2024, 2, 4, 17, 0), name: '.instance Komplexität' },
                    { start: Date.UTC(2024, 2, 5, 8, 0), end: Date.UTC(2024, 2, 6, 17, 0), name: 'Dialog-Abhängigkeiten' },
                    { start: Date.UTC(2024, 2, 7, 8, 0), end: Date.UTC(2024, 2, 10, 17, 0), name: '.EOJ Komplexität' },
                    { start: Date.UTC(2024, 2, 11, 8, 0), end: Date.UTC(2024, 2, 12, 17, 0), name: 'Bedingungs-Verschachtelung' },
                    { start: Date.UTC(2024, 2, 13, 8, 0), end: Date.UTC(2024, 2, 14, 17, 0), name: 'Format-Count' },
                    { start: Date.UTC(2024, 2, 15, 8, 0), end: Date.UTC(2024, 2, 18, 17, 0), name: 'Spezifikationen BRIEFNAME' },
                    { start: Date.UTC(2024, 2, 19, 8, 0), end: Date.UTC(2024, 2, 20, 17, 0), name: '.SET Aufrufe' },
                    { start: Date.UTC(2024, 2, 21, 8, 0), end: Date.UTC(2024, 2, 24, 17, 0), name: 'Befehlszähler Prüfung' }
                ]
            }
        ]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'ganttChart'}
                options={options}
            />
        </div>
    )
}

export default GanttChart



// import React, { useEffect } from 'react'
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'

// const GanttChart = () => {
//     useEffect(() => {
//         // Stelle sicher, dass das Gantt-Modul nur im Client importiert wird
//         const gantt = require('highcharts/modules/gantt')
//         gantt(Highcharts)
//     }, [])

//     const options = {
//         title: {
//             text: 'Projektplanung'
//         },
//         yAxis: {
//             uniqueNames: true
//         },
//         series: [
//             {
//                 name: 'Projektaufgaben',
//                 data: [
//                     { start: Date.UTC(2024, 1, 12), end: Date.UTC(2024, 1, 13), name: 'KO Selbstreferenz' },
//                     { start: Date.UTC(2024, 1, 14), end: Date.UTC(2024, 1, 15), name: '#XXYYYY Prüfung' },
//                     { start: Date.UTC(2024, 1, 16), end: Date.UTC(2024, 1, 19), name: 'Baustein-Aufrufe' },
//                     { start: Date.UTC(2024, 1, 20), end: Date.UTC(2024, 1, 21), name: '.SET Differenzierung' },
//                     { start: Date.UTC(2024, 1, 22), end: Date.UTC(2024, 1, 25), name: '.USES Analyse' },
//                     { start: Date.UTC(2024, 1, 26), end: Date.UTC(2024, 1, 27), name: 'Variablen-Abfrage' },
//                     { start: Date.UTC(2024, 1, 28), end: Date.UTC(2024, 1, 29), name: 'OMS Versand' },
//                     { start: Date.UTC(2024, 2, 1), end: Date.UTC(2024, 2, 4), name: '.instance Komplexität' },
//                     { start: Date.UTC(2024, 2, 5), end: Date.UTC(2024, 2, 6), name: 'Dialog-Abhängigkeiten' },
//                     { start: Date.UTC(2024, 2, 7), end: Date.UTC(2024, 2, 10), name: '.EOJ Komplexität' },
//                     { start: Date.UTC(2024, 2, 11), end: Date.UTC(2024, 2, 12), name: 'Bedingungs-Verschachtelung' },
//                     { start: Date.UTC(2024, 2, 13), end: Date.UTC(2024, 2, 14), name: 'Format-Count' },
//                     { start: Date.UTC(2024, 2, 15), end: Date.UTC(2024, 2, 18), name: 'Spezifikationen BRIEFNAME' },
//                     { start: Date.UTC(2024, 2, 19), end: Date.UTC(2024, 2, 20), name: '.SET Aufrufe' },
//                     { start: Date.UTC(2024, 2, 21), end: Date.UTC(2024, 2, 24), name: 'Befehlszähler Prüfung' }
//                 ]
//             }
//         ]
//     }

//     return (
//         <div>
//             <HighchartsReact
//                 highcharts={Highcharts}
//                 constructorType={'ganttChart'}
//                 options={options}
//             />
//         </div>
//     )
// }

// export default GanttChart
