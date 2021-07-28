import React from 'react';
import '../styles.css/header.css'

function HeaderItem({Icon, title}) {
    return (
        <div className ='icon-div 
        '> 
            <Icon className ="icon"/>
            <p className ="opacity-0 group-hover:opacity-100
             tracking-widest">{title}</p>
            
        </div>
    )
}

export default HeaderItem
