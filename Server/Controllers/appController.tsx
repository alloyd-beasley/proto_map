import * as axios from "axios";


export const getExample = (req, res, next) => {
    console.log(`Request: ${req}`)


    const response = res.json({
        message: "this is the response message"
    });
    
    console.log('response: ', response)
}