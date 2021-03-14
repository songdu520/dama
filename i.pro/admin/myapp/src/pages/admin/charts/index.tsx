import  {FC,useEffect} from "react"
import { Card } from 'antd';
import { Chart } from '@antv/g2';
const index:FC = () => {
  const initChart = () => {
    const data = [
      { week: '周1', sales: 38 },
      { week: '周2', sales: 52 },
      { week: '周3', sales: 61 },
      { week: '周4', sales: 145 },
      { week: '周5', sales: 48 },
      { week: '周6', sales: 38 },
      { week: '周7', sales: 38 },
    ];
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    
    chart.data(data);
    chart.scale('sales', {
      nice: true,
    });
    
    chart.tooltip({
      position: 'right',
      crosshairs: {
        type: 'y',
      },
    });
    chart.interaction('element-highlight');
    
    chart.interval().position('week*sales');
    
    chart.render();
  }

  const initChart1=()=>{
    const data = [
      { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
      { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
      { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
      { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
      { name: 'London', 月份: 'May', 月均降雨量: 47 },
      { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
      { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
      { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
      { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
      { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
      { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
      { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
      { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
      { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
      { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
      { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    ];
    
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    
    chart.data(data);
    chart.scale('月均降雨量', {
      nice: false,
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });
    
    chart
      .interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);
    
    chart.interaction('active-region');
    
    chart.theme({ "styleSheet": { "brandColor": "#FF4500", "paletteQualitative10": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26"], "paletteQualitative20": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26", "#946DFF", "#6C3E00", "#6193FF", "#FF988E", "#36BCCB", "#004988", "#FFCF9D", "#CCDC8A", "#8D00A1", "#1CC25E"] } });
    chart.render();
  }
  
  useEffect(()=>{
    initChart()
    initChart1()
  },[])
  return (
    <>
    <Card>
     <div id="container"></div>
    </Card>
    <Card>
     <div id="container1"></div>
    </Card>
    
    </>
  );
}

export default index;