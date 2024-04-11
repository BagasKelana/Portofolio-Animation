'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import myPhoto from '@/my-photo.png';
import Download from '@/app/assets/svg/download';
import InstagramIcon from '@/app/assets/svg/instagram';
import Github from '@/app/assets/svg/github';
import LinkedinIcon from '@/app/assets/svg/linkedin';
import YoutubeIcon from '@/app/assets/svg/youtube';
import CarouselGallery from './carousel-gallery';
import CompetenciesSection from './competencies-section';
import LiveEmojiAnimation from './emoji-component';
import TechStack from './tech-stack';

const AboutMe = () => {
  const downloadResume = () => {
    const fileUrl =
      '/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png';
    const fileName = 'myresume.png';

    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;

    downloadLink.click();
  };
  return (
    <section className={styles.aboutContainer}>
      <section>
        <div className={styles.title}>ABOUT-ME</div>
        <div className={styles.aboutCards}>
          <section className={styles.leftCard}>
            <div className={styles.myBackground}>
              <p>
                Hi, I&apos;m <span>M Hilal Bagas Kelana</span> creative web
                developer, based in Lamongan, East Java, Indonesia. Currently
                freelancing for website development.
              </p>
              <section>
                <div>
                  <InstagramIcon /> <Github /> <LinkedinIcon /> <YoutubeIcon />
                </div>
                <div onClick={downloadResume}>
                  <Download /> Resume
                </div>
              </section>
            </div>

            <TechStack />
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
            <CarouselGallery />
          </section>
          <section className={styles.rightCard}>
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
                      Marine Science ( Bachelor of Science )
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
            <div className={styles.experience}>
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
            </div>
            <div className={styles.experience}>
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
                      My Personal Portotfolio Website Builded with NextJS and
                      Framework Animation
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2024</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>NEXT Courses Website</p>
                    <p className={styles.darkParaf}>
                      learning service provider site
                    </p>
                  </div>
                </section>
                <section>
                  <div className={styles.listYear}>
                    <p>2023-2024</p>
                  </div>
                  <div>
                    <p className={styles.lightParaf}>E-Commerce Website</p>
                    <p className={styles.darkParaf}>
                      learning service provider site
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
                      Website Provide Information About Games
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <CompetenciesSection />
      </section>
    </section>
  );
};

export default AboutMe;
