import React from "react";
import {Alert} from "./index";
    
export default {
   title: "Alert"
};
const onClose=()=>console.log('close')
export const WithAlert = () => (
  <Alert type='primary' title='title' description='description' closeable onClose={onClose}/>
);
