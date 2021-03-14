import  {FC,useState} from "react"
import {Card,Button} from "antd"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const index:FC = () => {
  const [editorState,seteditorState]=useState(EditorState.createEmpty())
  const onEditorStateChange: Function = (editorState:any) => {
    console.log(editorState)
   seteditorState(editorState)
  };
  const show=()=>{
    console.log(draftToHtml(editorState.getCurrentContent()))
  }
  return (
    
    <>
    <Button onClick={show}>文本</Button>
     <Card title="富文本编辑器">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </Card>
    </>
  );
}

export default index;