'use client';
import React, { useRef, useState } from 'react';
import styles from './page.module.scss';
import gsap, { Power1 } from 'gsap';
import { CustomEase } from 'gsap/all';
import Image from 'next/image';
import { createRoot } from 'react-dom/client';
gsap.registerPlugin(CustomEase);

type emojisState = {
  value: string;
  id: string;
};

export default function LiveEmojiReactions() {
  const emojiRef = useRef<any>(null);
  const [imgSource, setImgSource] = useState(
    '/emoji/smiling-face-with-heart-eyes-svgrepo-com.svg'
  );

  const emojis = [
    {
      id: 'laughing',
      value: '/emoji/grinning-squinting-face-svgrepo-com.svg'
    },
    { id: 'heartEyes', value: '/emoji/nerd-face-svgrepo-com.svg' },
    { id: 'astonished', value: '/emoji/partying-face-svgrepo-com.svg' },
    { id: 'surprised', value: '/emoji/shushing-face-svgrepo-com.svg' },
    {
      id: 'smiling',
      value: '/emoji/smiling-face-with-heart-eyes-svgrepo-com.svg'
    }
  ];

  const handleEmojiClick = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    animateEmoji(randomEmoji);
  };
  const animateEmoji = (emoji: emojisState) => {
    if (emojiRef.current) {
      const el = document.createElement('div');
      el.classList.add(styles.emoji);
      el.innerText = emoji.value;
      el.id = emoji.id;
      emojiRef.current.appendChild(el);
      const tl = gsap.timeline({
        onComplete: () => {
          el.remove();
        },
        smoothChildTiming: true,
        defaults: {
          duration: 1.4,
          ease: Power1.easeOut
        }
      });

      const xValue = gsap.utils.random(-50, 50, 50);
      tl.to(el, {
        y: gsap.utils.random(-200, -150, 5),
        rotation: gsap.utils.random(-60, 60),
        immediateRender: false
      })
        .to(
          el,
          {
            x: xValue,
            scale: gsap.utils.random(0.8, 1.2),
            ease: CustomEase.create(
              'custom',
              'M0,0.069 C0.321,0.085 0.308,0.393 0.49,0.404 0.713,0.416 0.795,0 1,0 '
            )
          },
          '<'
        )
        .to(
          el,
          {
            opacity: 0,
            ease: 'power1.in'
          },
          '<'
        );

      //
      const ImageWrapper = () => (
        <Image
          priority
          src={emoji.value}
          width={50}
          height={50}
          alt={emoji.id}
        />
      );

      createRoot(el).render(<ImageWrapper />);
    }
  };

  return (
    <div className={styles.tatang}>
      <div className={styles.liveEmojiContainer}>
        <button onClick={handleEmojiClick}>
          <Image src={imgSource} alt="hilal" height={50} width={50} />
        </button>
        <div className={styles.emojiList} ref={emojiRef}></div>
      </div>
    </div>
  );
}

// type emojisState = {
//   value: any;
//   id: string;
// };

// export default function LiveEmojiReactions() {
//   const emojiRef = useRef<any>(null);

//   const emojis = [
//     {
//       id: 'laughing',
//       value: '/emoji/grinning-squinting-face-svgrepo-com.svg'
//     },
//     { id: 'heartEyes', value: '/emoji/nerd-face-svgrepo-com.svg' },
//     { id: 'astonished', value: '/emoji/partying-face-svgrepo-com.svg' },
//     { id: 'surprised', value: '/emoji/shushing-face-svgrepo-com.svg' },
//     {
//       id: 'smiling',
//       value: '/emoji/smiling-face-with-heart-eyes-svgrepo-com.svg'
//     }
//   ];

//   const handleEmojiClick = () => {
//     const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
//     animateEmoji(randomEmoji);
//   };

//   const animateEmoji = (emoji: emojisState) => {
//     if (emojiRef.current) {
//       const el = document.createElement('div');
//       el.id = emoji.id;
//       el.classList.add(styles.emoji);
//       emojiRef.current.appendChild(el);

//       const tl = gsap.timeline({
//         onComplete: () => {
//           el.remove();
//         },
//         smoothChildTiming: true,
//         defaults: {
//           duration: 1, // Durasi default untuk setiap animasi
//           ease: Power1.easeInOut // Easing function yang lebih smooth
//         }
//       });

//       const xValue = gsap.utils.random(-100, 100); // xValue dapat menjadi -100 atau nilai positif lainnya

//       tl.to(el, {
//         x: xValue,
//         y: gsap.utils.random(-200, -150),
//         scale: gsap.utils.random(0.8, 1.2),
//         rotation: gsap.utils.random(-30, 30),
//         immediateRender: false
//       }).to(
//         el,
//         {
//           x: xValue < 0 ? -xValue : xValue, // Menentukan nilai x tween kedua berdasarkan nilai x tween pertama
//           y: '+=100',
//           scale: 0.8,
//           opacity: 0,
//           ease: Power1.easeInOut // Easing function yang lebih smooth
//         },
//         '<'
//       );

//       //
//       const ImageWrapper = () => (
//         <Image src={emoji.value} width={50} height={50} alt={'one'} />
//       );

//       createRoot(el).render(<ImageWrapper />);
//     }
//   };

//   return (
//     <div className={styles.tatang}>
//       <div className={styles.liveEmojiContainer}>
//         <button onClick={handleEmojiClick}>Send Emoji</button>
//         <div className={styles.emojiList} ref={emojiRef}></div>
//       </div>
//     </div>
//   );
// }
