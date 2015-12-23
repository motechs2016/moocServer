﻿function createflash(fvalue, chartdiv, leibie) {

    var bg = "", caption = "", yname = "";
    var xianzhi = 0;

    if (leibie == "aqi") {
        xianzhi = 100;
        if (chartdiv == "chartdiv") {
            caption = "最近24小时宽带质量总体评价";
        } else {
            caption = "最近两周宽带质量总体评价";
        }
        yname = "宽带质量总体评分";
    }

    if (leibie == "pm25") {
        xianzhi = 75;
        if (chartdiv == "chartdiv") {
            caption = "最近24小时网页评价";
        } else {
            caption = "最近两周网页评价";
        }
        yname = "网页评分(单位：ms)";
    }

    if (leibie == "pm10") {
        xianzhi = 150;
        if (chartdiv == "chartdiv") {
            caption = "最近24小时下载评价";
        } else {
            caption = "最近两周下载评价";
        }
        yname = "下载评分";
    }

    if (leibie == "so2") {
        if (chartdiv == "chartdiv") {
            xianzhi = 500;
            caption = "最近24小时视频评价";
        } else {
            xianzhi = 150;
            caption = "最近两周视频评价";
        }
        yname = "视频评分";
    }
    if (leibie == "no2") {
        if (chartdiv == "chartdiv") {
            xianzhi = 200;
            caption = "最近24小时音频评价";
        } else {
            xianzhi = 80;
            caption = "最近两周音频评价";
        }
        yname = "音频评分";
    }
    if (leibie == "co") {
        if (chartdiv == "chartdiv") {
            xianzhi = 10;
            caption = "最近24小时邮件评价";
        } else {
            xianzhi = 4;
            caption = "最近两周邮件评价";
        }
        yname = "邮件评分";
    }
    if (leibie == "o3") {
        if (chartdiv == "chartdiv") {
            xianzhi = 200;
            caption = "最近24小时通信评价";
        } else {
            xianzhi = 160;
            caption = "最近两周通信评价";
        }
        yname = "通信评分";
    }
    if (leibie == "aqi" || leibie == "pm25") bg = "bgImage='../images/flashimg/flash_shuoming.gif'";

    var myChart = new FusionCharts("./charts/MSLine.swf", "myChartId" + Math.ceil(Math.random() * 1000), "810", "300"); //
    var str = "<chart caption='" + caption + "' bgImageVAlign='bottom' logoURL=''  chartBottomMargin='10' bgImageHAlign='middle' showValues='1'  numVDivLines='12' canvasBorderThickness='1' baseFont='宋体' labelDisplay='Rotate' slantLabels='1' bgColor='EBEFF7'   baseFontSize ='12'   yAxisName='" + yname + "' showNames='1' decimalPrecision='0' formatNumberScale='0'>";
    str = str + "<trendLines><line startValue='" + xianzhi + "' color='0033FF' displayvalue='良(限值)' toolText='良(二级标准限值:" + xianzhi + ")' /></trendLines>"; /* xAxisName='日期' */


    str = str + fvalue + "</chart>"


    /* 如何caption="" 则隐藏flash */
    if (caption != "") {
        myChart.setDataXML(fvalue);
        myChart.render(chartdiv);
    }
    else
    { document.getElementById(chartdiv).style.display = "none"; }
}

function leibie(lb) {

    document.getElementById("aqi").className = "nom";
    document.getElementById("pm25").className = "nom";
    document.getElementById("pm10").className = "nom";
    document.getElementById("so2").className = "nom";
    document.getElementById("no2").className = "nom";
    document.getElementById("co").className = "nom";
    document.getElementById("o3").className = "nom";

    document.getElementById(lb).className = "currtitle";
}