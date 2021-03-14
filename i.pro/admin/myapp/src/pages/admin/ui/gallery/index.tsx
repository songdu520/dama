import  {FC,useEffect,useState} from "react"
import { Row, Col,Card  } from 'antd';
import {getGalleryList} from "@/utils/api"
import {} from "./gallery.less"

const { Meta } = Card;



const index:FC = () => {
  const [gallery,setgallery]=useState([])

  useEffect(() => {
    (async() => {
      const res:any = await getGalleryList();
      if (res.status === 0) {
        setgallery(res.list)
      }
     console.log(res) 
    })()
  }, [])

  

  return (
    
  
  <div className="gallery">
       <Row gutter={10}>
         {
           gallery.map((item:string[],index:number)=>{
           return  (<Col className="gutter-row" span={index==4?4:5} key={index}>
                      {/* <div style={style}>col-6</div> */}
                      {
                        item.map((v,i)=>{
                        return ( <Card
                                 key={i}
                                hoverable
                                style={{ width:"100%"}}
                                cover={<img alt="example" src={v} />}
                              >
                                <Meta title="React Admin I Love Imooc" description="www.instagram.com" />
                              </Card>)
                        })
                      }
                    </Col>)
           })
         }
      {/* <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col> */}
    </Row>

  </div>
   
  );
}

export default index;