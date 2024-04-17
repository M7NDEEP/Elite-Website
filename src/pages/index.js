import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CgMouse } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, EffectCreative } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import "@/styles/Swiper.module.css"
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import { FaArrowAltCircleRight } from "react-icons/fa";
const axios = require('axios')


export default function Home() {
  const [fixedImgSrc, setFixedImgSrc] = useState("");
  const [showFixedImg, setShowFixedImg] = useState(false);
  const [quote,setQuote] = useState("To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.");

  const handlequote = ()=>{
    axios.get('https://api.quotable.io/random')
    .then(response => {
      const quote = response.data.content;
      setQuote(quote)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  const teamMembers = [
    { name: "Mandeep Yadav", role: "Web Developer", imageSrc: "mandeep.png" ,insta:'https://www.instagram.com/themandeepyadav/',linkdin:'https://www.linkedin.com/in/mandeepyadav27',github:'https://github.com/M7NDEEP'},
    { name: "Mayank Matkar", role: "Java Developer", imageSrc: "mayank.jpeg" ,insta:'https://www.instagram.com/mayank_matkar',linkdin:'https://www.linkedin.com/in/mayank-matkar-042003k',github:'https://github.com/Codermayankkk'},
    { name: "Abhigya Sharma", role: "Java Developer", imageSrc: "abhigya.jpeg" ,insta:'https://www.instagram.com/itz_abhisss',linkdin:'https://www.linkedin.com/in/abhigya-sharma-88a929288',github:'https://github.com/abhigyaabs2'},
    { name: "Aditya Patel", role: "Web Developer", imageSrc: "aditya.jpeg" ,insta:'https://www.instagram.com/i_aditya.p/',linkdin:'https://www.linkedin.com/in/adityapatel09',github:'https://github.com/iampateladitya'},
    { name: "Khushbu Gehlot", role: "Web Developer", imageSrc: "khushbu.jpeg" ,insta:'https://www.instagram.com/khushbugehlot___',linkdin:'https://www.linkedin.com/in/khushbu-gehlot-15a38b214',github:'https://github.com/khushbugehlot31'},
    { name: "Kripansh Kumrawat", role: "Java/Python Developer", imageSrc: "kripansh.jpg" ,insta:'https://www.instagram.com/_kripansh_',linkdin:'http://linkedin.com/in/kripansh29',github:'http://github.com/shallow-universe'},
    { name: "Nawadha Jadiya", role: "Java/Flutter Developer", imageSrc: "navadha.jpeg" ,insta:'https://www.instagram.com/nawadhaaa___',linkdin:'https://www.linkedin.com/in/nawadha-jadiya-aab426253',github:'https://github.com/NawadhaJadiya'},
    { name: "Ayush Maddhesiya", role: "Backend Developer", imageSrc: "ayush.jpeg" ,insta:'#',linkdin:'https://www.linkedin.com/in/ayush-maddhesiya/',github:'https://github.com/ayush-maddhesiya'},
    { name: "Shreyanshi Bhagoriya", role: "UI/UX", imageSrc: "shreyanshi.jpeg" ,insta:'#',linkdin:'https://www.linkedin.com/in/shreyanshi-bhagoriya-582405268/',github:'https://github.com/ShreyanshiBhagoriya'},
  ];

  const handleMouseEnter = (imgSrc) => {
    setFixedImgSrc(imgSrc);
    setShowFixedImg(true);
  };

  const handleMouseLeave = () => {
    setShowFixedImg(false);
  };

  return (
    <>
      <Head>
        <title>Elite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.box1}>
        <img src="/bg5.jpg" alt="" />
      </div>

      <Navbar />
      <main className={styles.main}>
        <div
          className={styles.fixedimg}
          style={{
            display: showFixedImg ? "block" : "none",
            backgroundImage: fixedImgSrc ? `url(${fixedImgSrc})` : "none",
          }}
          onMouseEnter={() => setShowFixedImg(true)}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div className={styles.page1}>
          <h2
          >
            Innovation <br /> is Intrinsic
          </h2>
          <div className={styles.follow}>
            Follow Us - <span className={styles.insta}><Link href='#'>Instagram</Link></span> |{" "}
            <span className={styles.ghub}><Link href='#'>Github</Link></span>
          </div>

          <div className={styles.getquote}>
            <p style={{ fontSize: '1.2rem', letterSpacing: '0.5px' ,cursor:'pointer'}} onClick={handlequote}> <a href="https://forms.gle/bZ1vKGGaXZ8KecEC6" target="_blank">Contact Us</a> <span>&#8594;</span></p>
            <p style={{ fontSize: '1.1rem', letterSpacing: '0.5px',width:'55%'}}>
              {quote.slice(0,150)}
            </p>
          </div>
          <CgMouse className={styles.mousebtn} size={32} />

          <div className={styles.tri1}><img src="/tri.png" alt="" /></div>
          <div className={styles.tri2}><img src="/tri.png" alt="" /></div>
          <div className={styles.tri3}><img src="/tri.png" alt="" /></div>
        </div>

        <div className={styles.page2}>
          <div className={styles.box2}>
          <div className={styles.box2div}>
  <h2>Did you know ?</h2>
  <p className={styles.box2divp}>Abhyudaya Elite is the ultimate destination for coding enthusiasts like you! Join us to explore exciting workshops, hackathons, and collaborations. Let's unlock our coding brilliance together!
  </p>
</div>
            <div style={{ marginTop: '5rem' }}>
              <h3>
                <span className={styles.eight}>8</span>
                <span style={{ fontSize: '5rem', fontWeight: '500', color: 'transparent', WebkitTextStroke: '1px white' }}>
                  +
                </span>{" "}
                <br />
                <span style={{ lineHeight: '1rem' }}>Team Members</span>
              </h3>
            </div>
            <div className={styles.gola}></div>
          </div>

          <div className={styles.services}>
            <div className={styles.services_help}>
              <h1>What We Can Do </h1>
              <h2>Services we can help you with</h2>
              <p>
                Our Services <span>&#8594;</span>
              </p>
            </div>

            <div style={{}} className={styles.services_img}>
              <div className={styles.services_img1}>
                <h1>
                  App <br /> Development
                </h1>
              </div>
              <div className={styles.services_img2}>
                <h1>
                  Web <br /> Development
                </h1>
              </div>
              <div className={styles.services_img3}>
                <h1>Ui/Ux Design</h1>
              </div>
              <div className={styles.services_img4} style={{marginRight:'2rem'}}>
                <h1>Technology</h1>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.page3}>
          <div className={styles.page3gola}></div>
          <h2>Our Projects</h2>

          <div className={styles.elem_container}>
            <div
              className={styles.elem}
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://blog.depositphotos.com/wp-content/uploads/2021/11/20-Best-Website-Designs-from-Awwwards-in-2021-5.jpg.webp"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.overlay}></div>
              <h1 style={{ display: 'flex' }}>We seek diverse perspective</h1>
            </div>
            <div
              className={styles.elem}
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://blog.depositphotos.com/wp-content/uploads/2021/11/20-Best-Website-Designs-from-Awwwards-in-2021-1.jpg.webp"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.overlay}></div>
              <h1 style={{ display: 'flex' }}>The Grids</h1>
            </div>
            <div
              className={styles.elem}
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://www.awwwards.com/awards/gallery/2015/11/be-careful-trends-awwwards-09.png"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.overlay}></div>
              <h1 style={{ display: 'flex' }}>Spothecary</h1>
            </div>
            <div
              className={styles.elem}
              onMouseEnter={() =>
                handleMouseEnter(
                  "https://assets.awwwards.com/awards/sites_of_the_day/2016/06/awwwards-sotd-Designembraced-1.jpg"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.overlay}></div>
              <h1 style={{ display: 'flex' }}>Creative : The Art Director</h1>
            </div>
          </div>

          <Link style={{ fontSize: '1rem', color: 'white', display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', paddingRight: '4rem', fontWeight: '500', letterSpacing: '1px' }} href="/"> See All Projects<span style={{ paddingLeft: '0.5rem', color: 'white' }}> &#8594;</span></Link>
        </div>

        <div className={styles.page4_1}>
          <h2 id="teamhash">Our Mentor</h2>
          <h1>Our Awesome <br />mentor</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', paddingLeft: '1rem', alignItems: 'center' }}>
          <div className={styles.teamcard_4}>
                    <img src="Namansir.jpg" alt="image not found" />
                    <div className="flex flex-col
                     text-white" style={{ position: 'absolute', bottom: '0%', left: '0', padding: '0.5rem' }}>
                      <h3>Naman Sisodiya</h3>
                      <p>Mentor</p>
                    </div>
                    <div className={styles.teamcardicon_4}>
                    <Link href="https://www.instagram.com/naman29.ai" target='_blank'><IoLogoInstagram size={35} style={{ marginBottom: '0.5rem' }} /></Link>
                    <Link href="https://www.linkedin.com/in/naman-sisodiya-7632622aa/" target='_blank'><FaLinkedinIn size={28} style={{ marginBottom: '0.5rem' }} /></Link>
                    </div>
                  </div>
          </div>
        </div>

        <div className={styles.page4}>
          <h2 id="teamhash">Our Team</h2>
          <h1>Awesome team <br />members</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', paddingLeft: '1rem', alignItems: 'center' }}>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"

            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.teamcard}>
                    <img src={member.imageSrc} alt={member.name} />
                    <div className="flex flex-col text-white" style={{ position: 'absolute', bottom: '0%', left: '0', padding: '0.5rem' }}>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                    <div className={styles.teamcardicon}>
                    <Link href={member.insta} target='_blank'><IoLogoInstagram size={30} style={{ marginBottom: '0.5rem' }} /></Link>
                    <Link href={member.linkdin} target='_blank'><FaLinkedinIn size={22} style={{ marginBottom: '0.5rem' }} /></Link>
                    <Link href={member.github} target='_blank'><FaGithub size={23} /></Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={styles.page5}>
          <div className={styles.page5gola1}></div>
          <div className={styles.page5gola2}></div>
          <div>
            <h2>Our Blogs</h2>
            <h1>Explore the upcoming <br />blogs</h1>
            <Link href='/blog'>View Blog →</Link>
          </div>

          <img src="/dots.png" alt="" className={styles.dots} />

          <div style={{ position: 'relative', width: '30vw', height: '30vw', overflow: 'hidden', borderRadius: '10px', backgroundColor: 'black', mixBlendMode: 'difference', transform: 'translateX(-60%)' }}>
            <img src='https://images.unsplash.com/photo-1555601568-c9e6f328489b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagenot found' style={{ width: '30vw', opacity: '0.8',transform:'translateY(-20%)' }} />
            <div className="flex flex-col text-white" style={{ position: 'absolute', bottom: '0%', left: '0', padding: '0.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#A1A1A1', fontWeight: '500' }}>2024</p>
              <h3 style={{ fontSize: '1.7rem', color: 'white', fontWeight: 'bold', lineHeight: '2rem' }}>How to write without fear.</h3>
            </div>
          </div>


        </div>

        <div className={styles.page6}>
          <div className={styles.hbackground}>
            <div className={styles.siteheading}>
              <h2>Innovation is Intrinsic </h2>
              <h2>Innovation is Intrinsic </h2>
              <h2>Innovation is Intrinsic </h2>
            </div>
          </div>
        </div> 

      </main>
    </>
  );
}