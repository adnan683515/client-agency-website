import React from 'react'
import '../../../app/globals.css'
export type TButton = {
    btn_name: string;
    mobile_px?: string;
    laptop_px?: string;
    mobile_py?: string;
    laptop_py?: string;
    mobile_text_size?: string;
    tablet_text_size?: string;
    desktop_text_size?: string;
    bg_color?: string;
    text_color?: string;
    hover_bg_color?: string;
    hover_text_color?: string;
    rounded?: string;
    border?: string,
    hover_border?: string,
    onClick?: () => void;        // Optional click handler

};

export default function Button({
    btn_name,
    mobile_px = "px-4",
    laptop_px = "lg:px-6",
    mobile_py = "py-2",
    laptop_py = "lg:py-3",
    mobile_text_size = "text-sm",
    tablet_text_size = "md:text-base",
    desktop_text_size = "lg:text-lg",
    bg_color = "bg-black",
    text_color = "text-white",
    hover_bg_color = "hover:bg-gray-800",
    hover_text_color = "hover:text-white",
    rounded = "rounded-full",
    border,
    hover_border,
    onClick,

}: TButton) {
    return (
        <button
            onClick={onClick}
            className={`
        ${mobile_px} ${laptop_px} 
        ${mobile_py} ${laptop_py} 
        ${mobile_text_size} ${tablet_text_size} ${desktop_text_size} 
        ${bg_color} ${text_color} 
        ${hover_bg_color} ${hover_text_color} 
        ${rounded} 
        ${border}
        ${hover_border}
        transition 

      `}
        >
            {btn_name}
        </button>
    );
}
