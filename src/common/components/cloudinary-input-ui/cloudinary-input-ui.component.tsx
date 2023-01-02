import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { theme } from "@app/core/themes"


import { Card, CardActions, CardContent, CardHeader, Skeleton, Typography } from "@mui/material"

import { FC, useRef } from "react"
import { Button, ThemeProvider } from "react-admin"

interface CloudinaryInputUIProps {
    label: string;
    value?: string;
    disabled: boolean;
    onImageSelected: (image: File) => void;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({ label, value, disabled, onImageSelected }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!e.target.files) {
            return
        }
        const [file] = Array.from(e.target.files)

        onImageSelected(file)
    }
    const onUpLoadClcik = () => {
        inputRef.current?.click()
    }

    const image = cloudinary.image(value)

    //image.addTransformation('w_984,h_440,dpr_2.0')

    return (
        <div style={{ marginBottom: 20 }}>
            <ThemeProvider theme={theme}>
                <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} onChange={onFileInputChange} />
                <Card variant="outlined">
                    <CardHeader title={label} />
                    <CardContent>
                        {value ? <AdvancedImage cldImg={image}  width={250} /> : <Skeleton variant="rectangular" width={250}  />}
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" onClick={onUpLoadClcik} disabled={disabled}>
                            <Typography>
                                Завантажити
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
    )
}