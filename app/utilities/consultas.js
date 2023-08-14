import axios from "axios";
const FormData = require('form-data');

async function sentimentAnalysis(text){
    const options = {
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/sentiment-analysis/api/v1.1`,
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
            'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
        },
        data: {
            language: "en",
            text: text
        }
      };
      
      try {
          const {data} = await axios.request(options);
          return data
      } catch (error) {
          console.error(error);
      }
}

async function summarize(text, length = 40){
    const options = {
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/summarize-text/api/v1.1`,
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
            'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
        },
        data: {
            "language": "en",
            "summary_percent": length,
            text: text
        }
      };
      
      try {
          const {data} = await axios.request(options);
          return data.sentences
      } catch (error) {
          console.error(error);
      }
}

async function scanDocument(archive){
    
    const data = new FormData();
    data.append('input_file', archive);
    
    const options = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/text-mining/api/v1.1`,
      headers: {
        'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com',
      },
      data: data
    };
    
    try {
        const {data} = await axios.request(options);
        return(data.text);
    } catch (error) {
        console.error(error);
    }
}

export{sentimentAnalysis, summarize, scanDocument}