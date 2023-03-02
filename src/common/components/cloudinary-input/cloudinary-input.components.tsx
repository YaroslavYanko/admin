import {  useCloudinarySignatureQuery } from "@app/core/types"
import { FC } from "react"
import { InputProps, useInput, useNotify } from "react-admin"
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component"
import axios, { AxiosError } from 'axios'
import { CloudinaryUploadDTO } from "./cloudinary-upload.dto"


export const CloudinaryInput: FC<InputProps> = (props) => {
    const {label, source}= props
    const computedLabel = String(label) ?? source

    const { data: cloudSignature, loading } = useCloudinarySignatureQuery({
        fetchPolicy: 'network-only'
    })


    const notify = useNotify()

    const {field:{onChange,value} } = useInput(props)

    const onImageSelected = async (image: File) => {
        if (!cloudSignature?.cloudinariSignature) {
            return
        }
        const { cloudName, apiKey, publicId, signature, timestamp } = cloudSignature.cloudinariSignature
          
      
        const url = `http://api.cloudinary.com/v1_1/${cloudName}/upload`

        const formData = new FormData()
        formData.append('file', image)
        formData.append('api_key', apiKey)
        formData.append('public_id', publicId)
        formData.append('signature', signature)
        formData.append('timestamp', String(timestamp))
        formData.append('folder', 'goods')

        let data: CloudinaryUploadDTO;
        try {
          ({ data } = await axios.post<CloudinaryUploadDTO>(url, formData));
        } catch (error) {
          notify((error as AxiosError).message);
        }
        
        onChange(data!.public_id);
      };
    

    return <CloudinaryInputUI label={computedLabel} value={value} disabled={loading} onImageSelected={onImageSelected} />
}