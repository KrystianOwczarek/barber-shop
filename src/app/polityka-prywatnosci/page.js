'use client';
import { useEffect } from "react";
import dynamic from 'next/dynamic'

export default function Home() {
    const DynamicHeader = dynamic(() => import('../../components/Header'), { ssr: false });
    const DynamicPrivacyPolicy = dynamic(() => import('../../components/PrivacyPolicy'));
    const DynamicFooter = dynamic(() => import('../../components/Footer'));

    useEffect(() => {
        setTimeout(() => {
            const navs = document.querySelectorAll('nav');
            const button = document.querySelector('#mobile-open-button');
                navs.forEach((nav) => {
                    nav.style.visibility = 'hidden';
                });    
                button.style.visibility = 'hidden';
        }, 300)
        
    }, [])

  return (
    <>
      <DynamicHeader />
      <main className="max-w-full w-full">
        <DynamicPrivacyPolicy />
      </main>
      <DynamicFooter />
    </>
  );
}