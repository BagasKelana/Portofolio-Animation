'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import myPhoto from '@/my-photo.png';
import CarouselGallery from './carousel-gallery';
import CompetenciesSection from './competencies-section';
import LiveEmojiAnimation from './emoji-component';
import TechStack from './tech-stack';
import AutoGraph from './auto-graph';
import AbilitiesSlider from './abilities-slider';
import RandomWordEffect from '../RandomWordEffect';
import MediaIcon from './media-icon';

const AboutMe = () => {
  return (
    <section className={styles.aboutContainer}>
      <section className={styles.about}>
        <div className={styles.aboutTitle}>
          <div className={styles.title}>
            <span>ABOUT</span>ME
          </div>
          <div className={styles.containerLineHight}>
            <RandomWordEffect word="Based In Indonesia" />
            <div className={styles.lineHighlight} />
            <RandomWordEffect word="Journey Of Life" />
            <div className={styles.lineHighlight} />
            <RandomWordEffect word="Curious People" />
          </div>
        </div>
        <div className={styles.aboutCards}>
          <section className={styles.leftCard}>
            <div className={styles.myBackground}>
              <p>
                Hi, I&apos;m <span>M Hilal Bagas Kelana</span> creative web
                developer, based in Lamongan, East Java, Indonesia. Currently
                freelancing for website development.
              </p>
              <MediaIcon />
            </div>
            <TechStack />
            <AutoGraph />
          </section>
          <section className={styles.centerCard}>
            <div className={styles.photoContainer}>
              <Image
                data-scroll
                data-scroll-speed={0.1}
                src={myPhoto}
                alt="my photo"
              />
              <LiveEmojiAnimation />
            </div>
            <div className={styles.experience}>
              <div>
                <h2>EDUCATION & TRAINING</h2>
              </div>
              <div>
                <section>
                  <div className={styles.listYear}>
                    <p>2015 - 2018</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Natural Sciences & Information Technology Major
                    </p>
                    <p className={styles.darkParaf}>Major MA Matholiul Anwar</p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2018 - 2023</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Marine Science (Bachelor of Science)
                    </p>
                    <p className={styles.darkParaf}>
                      Trunojoyo University, Madura
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2023</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Web Development Bootcamp
                    </p>
                    <p className={styles.darkParaf}>Udemy</p>
                  </div>
                </section>
              </div>
            </div>

            <CarouselGallery />
          </section>
          <section className={styles.rightCard}>
            <section className={styles.experience}>
              <div>
                <h2>INTERNSHIPS</h2>
              </div>
              <div>
                <section>
                  <div className={styles.listYear}>
                    <p>2021</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Ministry of Marine Affairs and Fisheries, Central Jakarta
                    </p>
                    <p className={styles.darkParaf}>
                      Processing of Oceanographic Parameter Changes in the Banda
                      Sea, Indonesia
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2022</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Maduran State Elementary School, Lamongan
                    </p>
                    <p className={styles.darkParaf}>
                      Instructed elementary school students on the basics of
                      computer science and information technology.
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2022</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>
                      Wahid Hasyim High School, Lamongan
                    </p>
                    <p className={styles.darkParaf}>
                      Served as substitute teacher, actively engaged in school
                      activities.
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className={styles.experience}>
              <div>
                <h2>EXPERIENCE (Base on Projects)</h2>
              </div>
              <div>
                <section>
                  <div className={styles.listYear}>
                    <p>2024</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>Portfolio Website</p>
                    <p className={styles.darkParaf}>
                      Personal Portfolio Site Developed with Next.js and
                      Animation Framework
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2024</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>NEXT Courses Website</p>
                    <p className={styles.darkParaf}>Online Learning Platform</p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2023-2024</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>E-Commerce Website</p>
                    <p className={styles.darkParaf}>
                      Online Marketplace for Buying Various Products
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2022-2023</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>Cahyadi Rental Mobil</p>
                    <p className={styles.darkParaf}>
                      Yogyakarta-based Car Rental Service Provider Website
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2022-2023</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>Axios Games</p>
                    <p className={styles.darkParaf}>
                      Platform offering comprehensive information on diverse
                      genres of games
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <div>
              <AbilitiesSlider />
            </div>
          </section>
        </div>
        <CompetenciesSection />
      </section>
    </section>
  );
};

export default AboutMe;
