import React from 'react';
import HeaderItem from './HeaderItem';
import '../styles.css/header.css';

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";


function Header() {
    return (
         
        <header className = 'flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <h1>HEADER</h1>
        <div className = 'icon-row'> 
        <HeaderItem title= "HOME" Icon ={HomeIcon}/>
        <HeaderItem title= "TRENDING" Icon ={LightningBoltIcon}/>
        <HeaderItem title= "VERIFIED" Icon ={BadgeCheckIcon}/>
        <HeaderItem title= "COLLECTIONS" Icon ={CollectionIcon}/>
        <HeaderItem title= "SEARCH" Icon ={SearchIcon}/>
        <HeaderItem title= "Account" Icon ={UserIcon}/>
        </div>
        <img
        className = "icon"
        src = 'https://links.papareact.com/ua6'
        
          
        
        />
    </header>
    )
}

export default Header
