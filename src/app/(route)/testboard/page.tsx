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

