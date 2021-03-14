import {FC,useState,useEffect} from "react"
import{ useSelector }from "umi"

const Title:FC = () => {
  // let [title,settitle]=useState('')
  
  const pageTitle = useSelector((state: any) => state.admin.pageTitle)
  
  return (
    <div className="tilte" >
    <div className="left">
      {pageTitle}
    </div>
    <div className="right">
       10
    </div>
    </div>
  );
}

export default Title;