import {FC} from "react"
import {IRouteComponentProps,Redirect} from "umi"
const index: FC<IRouteComponentProps> = ({location,children}:IRouteComponentProps) => {
 if(location.pathname==="/"){
   return <Redirect from="/" to="/admin" exact />
 }else{
 return <div>{children}</div>
    
 }


 
}

export default index;