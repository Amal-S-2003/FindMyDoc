import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

export const docterLogin=async(reqBody)=>{
  return await commonAPI("POST", `${server_url}/login`, reqBody, "");
}
export const docterRegister=async(reqBody,reqheader)=>{
  console.log("DOCTER DATA",reqBody);
  
  return await commonAPI("POST", `${server_url}/docter-register`, reqBody, reqheader);
}