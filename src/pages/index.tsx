import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'
import { artPieces } from '../utils/artData'

// .featured を横スクロールにしてイージングをかけるために、gsapを用いて実装した。
import { useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  // useEffect(() => {
  //   const list = gsap.utils.toArray('.js-scroll-item');
  //   let scrollTween = gsap.to(list, {
  //     xPercent: -100 * (list.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".js-container",
  //       pin: true,
  //       scrub: 0.5,
  //       snap: 1 / (list.length - 1),
  //       start: "top top",
  //       end: 3000
  //     }
  //   });
  // }, []);

  useEffect(() => {
  const list = gsap.utils.toArray('.js-scroll-item');
  const listInner = document.querySelector('.js-scroll-list__inner');

  if (!listInner) return;

  // Calculate total width of the items
  const totalWidth = list.reduce((acc, item) => acc + item.clientWidth, 0);
  console.log(totalWidth)
  listInner.style.width = `${totalWidth}px`;

  gsap.to(listInner, {
    x: () => -(totalWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".js-container",
      pin: true,
      scrub: 0.5,
      start: "top top",
      end: 5000
    }
  });
}, []);
  


  function getAspectRatioClass(aspectRatio) {
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
          <div className={styles.container__inner}>
            {/* headerの中には、ロゴ、p.descriptionがあり、p.descriptionは小さなタイトルと説明がある */}
            <header className={styles.header}>
              <div className={styles.logo}>
                <Image src="/images/logo.svg" alt="logo" width={170} height={22.5} />
              </div>
              <div className={styles.header__right}>
                <p className={styles.description}>
                  <span className={styles.description__title}>Welcome to</span>
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
                  <Link href="/index" className={styles.nav__link}>Index
                  </Link>
                  <Link href="/index" className={styles.nav__link}>Submit
                  </Link>
                </nav>

              </div>
            </header>
            {/* h1の中にspanが1つある */}
            <h1 className={styles.title}>
              {/* ここはsvg画像を配置 */}
              <Image src="/images/title.svg" alt="title" width={1200} height={500} />
            </h1>
            {/* コピーライトなどの細かいテキストが画面の右側にposition:absolute で固定する。3行に開業→（version: 0.1.0 (beta) br last-updated: 12st, Oct 2023 br ©DigitalArchiveofStreatArtinMontreal） */}
            <p className={styles.copy}>
              <span className={styles.copy__text}>version: 0.1.0 (beta)</span>
              <br />
              <span className={styles.copy__text}>last-updated: 12st, Oct 2023</span>
              <br />
              <span className={styles.copy__text}>©DigitalArchiveofStreatArtinMontreal</span>
            </p>
            {/* sectionがある。sectionの中には、h2{Featured Pieces}と、横にスクロールできる画像に一覧が存在する。各種アイテムの画像の横には画像の内容の種類を説明するテキストと、画像が撮影された場所を表すテキスト要素が付随する */}
            <section className={`${styles.featured} js-scroll-container`}>
              <h2 className={styles.featured__title}>Featured<br />Pieces</h2>
              <div className={`${styles.featured__list} js-scroll-list`}>
                <div className={`${styles.featured__list__inner} js-scroll-list__inner`}>
                  {artPieces.map((artPiece) => {
                    const aspectRatioClass = getAspectRatioClass(artPiece.aspectRatio[0]);
                    return (
                      <div className={`${styles.featured__item} js-scroll-item`} key={artPiece.id}>
                        <div className={`${styles.featured__item__image} top_artImage ${aspectRatioClass}`}>
                          <Image
                            src={artPiece.image[0]}
                            alt="artPiece"
                            width={800}
                            height={800}
                            // className={aspectRatioClass}
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
        </div>
      </main>
    </>
  )
}
