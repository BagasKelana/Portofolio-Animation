'use client';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const alpha = [
  '!',
  '#',
  '$',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  'A',
  'G',
  'T',
  'H',
  'Y',
  'Z',
  'X',
  'W',
  'O',
  'K',
  'Q',
  'S'
];

interface WordProps {
  word: string;
}
const RandomWordEffect: React.FC<WordProps> = ({ word }) => {
  const letters = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    //fungsion random letter
    const animateLetter = (letter: HTMLSpanElement, iteration: number) => {
      //get original letter using getAttribute
      const original = letter.getAttribute('data-letter') as string;
      letter.classList.add('randomWord');
      let i = 0;

      const letterInterval = setInterval(() => {
        const randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
        letter.textContent = randomLetter;

        //condition if the letter has been changed to equal iteration number / index === iteration
        if (i === iteration) {
          clearInterval(letterInterval);
          //set letter to original letter
          letter.textContent = original;
          letter.classList.remove('randomWord');
        }

        ++i;
      }, 40);

      return () => clearInterval(letterInterval);
    };

    //fungsion setTimeout forEach Letter run animateLetter(letter)
    const animateWord = () => {
      letters.current.forEach((letter, i) => {
        setTimeout(() => {
          animateLetter(
            letter,
            letters.current.length - i <= 5 ? 5 : letters.current.length - i
          );
        }, 100 * i);
      });
    };

    const mouseEnterHandler = () => {
      animateWord();
    };

    const wordElement = letters.current[0]?.closest('.word') as HTMLSpanElement;
    wordElement.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      wordElement.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, [word]);

  return (
    <div className={styles.containerRandomWord}>
      <span className="word">
        {word.split('').map((letter, index) => (
          <span
            key={letter + index}
            ref={(el) => (letters.current[index] = el as HTMLSpanElement)}
            className="letter"
            data-letter={letter}
          >
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
};

export default RandomWordEffect;
