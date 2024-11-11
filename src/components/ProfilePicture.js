import React from "react";
import Image from 'react-bootstrap/Image';
import MyImage from '../assets/ppf.jpg';

export default function ProfilePicture() {
    return (
            <Image 
                src={MyImage} 
                roundedCircle 
                alt="Profile Picture"
                style={{ width: '300px', height: '300px' }}
            />
    );
}