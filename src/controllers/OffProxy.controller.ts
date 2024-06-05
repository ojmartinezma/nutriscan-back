import { Request, Response } from "express";
import FormData from "form-data";
import fetch from "node-fetch";

export const uploadOffImage = async (req:Request, res: Response) => {
  try {
    const { code, imagefield } = req.body;
    const file = req.file;

    console.log("uploadOffImage", {code, imagefield, file});

    if(file){

      const formdata = new FormData();
      formdata.append("user_id", "jurodriguezch");
      formdata.append("password", "OpenFoodFactsNutriScan");
      formdata.append("code", code);
      formdata.append("imagefield", imagefield);
      formdata.append(`imgupload_${imagefield}`, new Blob([file.buffer]), file.filename);

      const requestOptions = {
        method: "POST",
        body: formdata
      };
  
      const response = await fetch("https://world.openfoodfacts.net/cgi/product_image_upload.pl", requestOptions);
      const result = await response.json();

      console.log("success");
      res.status(200).json(result);
    }else{
      throw new Error("field offimg return undefined")
    }

  } catch(error: unknown){
    if (error instanceof Error) {
      res.status(500).json({"message":error.message})
    }
  }
  
}
