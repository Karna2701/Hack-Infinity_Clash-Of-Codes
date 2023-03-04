import React from 'react'
import { Textarea } from "@material-tailwind/react";

const url = () => {
    return (
        <div>
            <div className="w-96 mx-20 my-30">
                <Textarea placeholder="Copy Your Url Here" />
            </div>
        </div>
    )
}

export default url