import React from 'react';
import {svgService} from  '../services/svgService'

function SvgIcon({iconName}){
    const html  = svgService.getSvg(iconName)

    return (
        <i className='svg-icon' dangerouslySetInnerHTML={{ __html: html }}></i>
    );

}



export default SvgIcon