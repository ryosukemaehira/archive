import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'
import { artPieces } from '../utils/artData'

import LottieAnimation from '@/components/graffiti';

import { gsap } from 'gsap';
import lottie from 'lottie-web';

interface Props {
  delay: number;      // 再生開始までの遅延時間（ミリ秒）
  loopInterval?: number; // ループの間隔（ミリ秒）
}

export default function Home() {

  // 要素の参照を作成
  const sectionRef = useRef(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;

    // ウィンドウがスクロールされたときのイベントリスナーを追加
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        
        // sectionのアニメーション
        const sectionMoveDistance = Math.min(scrollY * 0.2, 120);
        gsap.to(section, {
          y: -sectionMoveDistance,
          ease: "power2.out",
        });
        
        const titleScaleValue = 1 - (0.1 * (sectionMoveDistance / 120)); // 1から0.8のスケールに変化
        gsap.to(titleRef.current, {
          // opacity: opacityValue,
          scale: titleScaleValue,
          ease: "power2.out",
        });
        
        // listの拡大アニメーション
        const scaleValue = 1 + (0.4 * (sectionMoveDistance / 120)); // 1から1.5のスケールに変化
        if(list) {
          gsap.to(list, {
              scale: scaleValue,
              transformOrigin: "left bottom",
              ease: "power2.out",
          });
        }
        
        // listの水平移動アニメーション
        const maxListMoveDistance = list?.offsetWidth 
        ? (list.offsetWidth * scaleValue) - window.innerWidth + 260
        : 0;  // または他のデフォルト値

        const listMoveDistance = Math.min(scrollY * 0.3, maxListMoveDistance);
        gsap.to(list, {
          x: -listMoveDistance,
          ease: "power2.out",
        });
        
        // 必要なスクロール量を動的に再計算
        const requiredScrollAmount = (maxListMoveDistance + 1) * 3.3333 + window.innerWidth / 2;
        const container = document.querySelector('.js-virtualScrollContainer');
        if (container instanceof HTMLElement) {
            container.style.height = `${requiredScrollAmount}px`;
        }
    });

    return () => {
        window.removeEventListener("scroll", () => {});
    };
  }, []);

  function getAspectRatioClass(aspectRatio: string): string {
    switch (aspectRatio) {
      case '1:1':
        return 'aspect-ratio-1-1';
      case '4:3':
        return 'aspect-ratio-4-3';
      case '16:9':
        return 'aspect-ratio-16-9';
      case '2.35:1':
        return 'aspect-ratio-235-1';
      case '3:4':
        return 'aspect-ratio-3-4';
      case '9:16':
        return 'aspect-ratio-9-16';
      default:
        return '';
    }
  }
    
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} t-global-text-style`}>
        <div className={`${styles.container} js-container`}>
          <div className={styles.container__bg}
          ></div>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Image src="/images/logo.svg" alt="logo" width={170} height={22.5} />
            </div>
            <div className={styles.header__right}>
              <p className={styles.description}>
                <span className={styles.description__title}>About this site</span>
                <span className={styles.description__text}>
                  Murals, graffiti, and sculptures. <br />
                  Montreal is filled with various street art<br />
                  (whether legally or not).<br />
                  Some of those art pieces<br />
                  have existed for more than 10 years,<br />
                  while others are removed or overwritten<br />
                  in a few months.<br />
                  This Website is a digital archive<br />
                  of those ever-changing artworks.
                </span>
              </p>
              <nav className={styles.nav}>
                <Link href="/#" className={styles.nav__link}>Index
                </Link>
                <Link href="/#" className={styles.nav__submit}>Submit
                </Link>
              </nav>

            </div>
          </header>
          <h1 className={styles.title} ref={titleRef}>
            <Image src="/images/title.svg" alt="title" width={1200} height={500} />
          </h1>
          <p className={styles.copy}>
            <span className={styles.copy__text}>version: 0.1.0 (beta)</span>
            <br />
            <span className={styles.copy__text}>last-updated: 12st, Oct 2023</span>
            <br />
            <span className={styles.copy__text}>©DigitalArchiveofStreatArtinMontreal</span>
          </p>
          <div className={`${styles.virtualScrollContainer} js-virtualScrollContainer`}>
            <section className={`${styles.featured}`} ref={sectionRef}>
              <h2 className={styles.featured__title}>
                Featured<br />Pieces
                <span className={styles.featured__title__arrow}></span>
              </h2>
              <div className={`${styles.featured__list}`}>
                <div className={`${styles.featured__list__inner}`} ref={listRef}>
                  {artPieces.map((artPiece, index) => {
                    const aspectRatioClass = getAspectRatioClass(artPiece.aspectRatio[0]);
                    return (
                      <div className={`${styles.featured__item}`} key={artPiece.id}>
                        <div
                          className={`${styles.featured__item__image} item__imageContainer ${aspectRatioClass}`}
                        >
                          <Image
                            src={artPiece.image[0]}
                            alt="artPiece"
                            width={800}
                            height={800}
                          />
                        </div>
                        <div className={styles.featured__item__text}>
                          <p className={styles.featured__item__type}>{artPiece.type}</p>
                          <p className={styles.featured__item__place}>{artPiece.neightborhood}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <div className={styles.container__graffitiHeader}>
            <LottieAnimation delay={8500} loopInterval={22000} path="/animations/graffiti_header_full.json" />
          </div>
          <div className={styles.container__graffitiFooter}>
            <LottieAnimation delay={2000} loopInterval={22000} path="/animations/graffiti_footer_full.json" />
          </div>
          <div className={styles.container__graffitiHeader2}>
            <LottieAnimation delay={18000} loopInterval={23000} path="/animations/graffiti_header_full.json" />
          </div>
        </div>
      </main>
    </>
  )
}
