import styles from '@/styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image';

import CyberLogoLight from '@/public/images/cyber-logo-light.svg';
import CyberWordmarkLight from '@/public/images/cyber-wordmark-light.svg';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
        
        {/* LEFT PART OF THE NAVBAR */}
         <div className="Left">
            <button style={{all: "unset"}}> {/* TODO: Add onClick() action to go to home page */}
                <Image src={CyberLogoLight} alt="ACM ACYBER"/>
                <Image src={CyberWordmarkLight} alt=""/>
            </button>
         </div>
        
        {/* SPACER */}
         <div className={styles.spacer}/> 

        {/* RIGHT PART OF THE NAVBAR */}
         <div className="Right">
             <Link href="/events">EVENTS</Link>
             <Link href="/about">ABOUT</Link>
             <Link href="/pbr">PBR</Link>
             <Link href="/archive">ARCHIVE</Link>
         </div>
   </div>
    )
}