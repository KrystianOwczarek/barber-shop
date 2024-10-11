'use client';
import Header from "../../components/Header";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        const navs = document.querySelectorAll('nav');
        const button = document.querySelector('#mobile-open-button');

        navs.forEach((nav) => {
            nav.style.visibility = 'hidden';
        });    
        button.style.visibility = 'hidden';
    }, [])

  return (
    <>
      <Header />
      <main className="max-w-full w-full">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}