import React from "react";
import QRCode from "react-qr-code";

type Props = {
    size?: number;
};

const QrCode = ({ size }: Props) => {
    return (
        <div>
            <QRCode
                value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                size={size}
            />
        </div>
    );
};

export default QrCode;
