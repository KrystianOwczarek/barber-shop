import { useState, useRef, useEffect } from 'react';
import styles from '../app/Button.module.css';
import Image from 'next/image';

export default function Button() {
  const [showPhone, setShowPhone] = useState(false); // Stan kontrolujący widoczność numeru telefonu
  const [isSweeping, setIsSweeping] = useState(false); // Stan kontrolujący animację zmiotki
  const broomRef = useRef(null); // Referencja do zmiotki

  const handleClick = () => {
    if(window.innerWidth <= 480){
      window.location.href = 'tel:+48668637979'
    }else{ 
      setIsSweeping(true); // Rozpocznij animację zmiotki
      setTimeout(() => {
        setShowPhone(true); // Po zakończeniu animacji pokaż numer telefonu
      }, 200); // Czas trwania animacji (1 sekunda)
    }
  };

  return (
    <div className={styles.buttonWrapper}>
      <button className={!showPhone ? styles.button : styles.button2} onClick={handleClick}>
        <span className={showPhone ? styles.sweepOut : ''}>
            Umów wizytę
        </span>
        {showPhone && (
            <span className={styles.phoneNumber}>+48 668 637 979</span>
        )}
      
      </button>
      {isSweeping && (
          <Image
            ref={broomRef}
            src="/image/broom.webp"
            alt="Zmiotka"
            className={styles.broom} // Dodajemy klasę animacji
            width={50}
            height={50}
            loading='lazy'
          />
        )}
    </div>
  );
}