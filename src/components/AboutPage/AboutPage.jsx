import { Container } from "react-bootstrap";
import Section2Img from "../../assets/about-section-2.svg";
import Section3Img from "../../assets/about-section-3.svg";
import Section4Img1 from "../../assets/about-section-4(1).svg";
import Section4Img2 from "../../assets/about-section-4(2).svg";
import Section5Img1 from "../../assets/about-section-5(1).svg";
import Section5Img2 from "../../assets/about-section-5(2).svg";
import Section5Img3 from "../../assets/about-section-5(3).svg";
import Section5Img4 from "../../assets/about-section-5(4).svg";
import Section5Img5 from "../../assets/about-section-5(5).svg";
import Section5Img6 from "../../assets/about-section-5(6).svg";
import Section5Img7 from "../../assets/about-section-5(7).svg";
import Section5Img8 from "../../assets/about-section-5(8).svg";
import Section5Img9 from "../../assets/about-section-5(9).svg";
import Section5Img10 from "../../assets/about-section-5(10).svg";
import Design1 from "../../assets/about-accolades-design1.svg";
import Design2 from "../../assets/about-accolades-design2.svg";
import "./AboutPage.scss";

export default function AboutPage() {
  let marqueeImages = [
    { img: Section5Img1, detail: "SKGA Multicultural Festival" },
    { img: Section5Img2, detail: "MSAC State-of-the-art- sports centre" },
    { img: Section5Img3, detail: "SCAFF 7 Colours Arts & Film Festival" },
    { img: Section5Img4, detail: "Melbourne Heritage Trinities Festival" },
    { img: Section5Img5, detail: "Melbourne Margazhi" },
    { img: Section5Img6, detail: "IPAC Australia" },
    { img: Section5Img7, detail: "HSV Mahashivaratri Festival" },
    { img: Section5Img8, detail: "Fiji Indian Diwali Festival (FISA)" },
    { img: Section5Img9, detail: "Chittirai Thiruvizha" },
    { img: Section5Img10, detail: "Australia Brahman Samaj" },
    { img: Section5Img1, detail: "SKGA Multicultural Festival" },
    { img: Section5Img2, detail: "MSAC State-of-the-art- sports centre" },
    { img: Section5Img3, detail: "SCAFF 7 Colours Arts & Film Festival" },
    { img: Section5Img4, detail: "Melbourne Heritage Trinities Festival" },
    { img: Section5Img5, detail: "Melbourne Margazhi" },
    { img: Section5Img6, detail: "IPAC Australia" },
    { img: Section5Img7, detail: "HSV Mahashivaratri Festival" },
    { img: Section5Img8, detail: "Fiji Indian Diwali Festival (FISA)" },
    { img: Section5Img9, detail: "Chittirai Thiruvizha" },
    { img: Section5Img10, detail: "Australia Brahman Samaj" },
  ];

  let accolades = [
    {
      award: "FAIT in Action Award",
      authority: "United Nations Youth for Human Rights, Australia",
    },
    {
      award: "Volunteer Recognition Community Award ",
      authority: "Council of City of Glen Eira, Australia",
    },
    {
      award: "Human Rights in Action Award",
      authority: "United Nations Youth for Human Rights, Australia",
    },
    {
      award: "Performing Artistes Recognition Award",
      authority: "The Trinities Heritage Festival, Australia",
    },
    {
      award: "Karnataka Sahithya Sangeetha Nruthya Academy Scholarship Award",
      authority: "Government of Karnataka",
    },
  ];
  return (
    <div className="about-page-container">
      <div className="section">
        <div className="inner-section-1">
          <Container>
            <div className="content">
              <div className="heading">Subhashree Thyagarajan</div>
              <div className="details">
                The visionary behind Shree Lasya Performing Arts (SLPA) is
                Subhashree Thyagarajan— a passionate performing artist,
                choreographer and the founder-director of the academy. She
                started dancing as a toddler at the age of 6 and completed her
                Arangetram (Rangapravesham) in 2012.
                <br /> She went on to pursue and attained a Master’s Degree
                (Vidwat) in Bharatanatyam affiliated to Karnataka State
                Government, further deepening her knowledge and expertise in the
                art form earned under the tutelage of  Guru Vidhushi Dr. Indu
                Nadig at Sri Sharada Nrithyalaya, Bangalore, Karnataka-India.
              </div>
            </div>
          </Container>
        </div>
        <div className="inner-section-2">
          <Container>
            <div className="content">
              <img alt="" src={Section2Img} />
              <div className="right-text">
                <div>
                  Her artistic journey spans continents, having performed and
                  co-ordinated prestigious dance events across the globe. She is
                  also trained in Indian Contemporary dance from Bangalore’s
                  Creative Space Sri Sathya BG and Bollywood dance from Shiamak
                  Dawar’s Dance School in the UK. As a Doordarshan Artist, she
                  has performed on DD Podhigai, and participated in global
                  events such as the Navaratri celebrations by Puthige Shri
                  Shashti Sambhrama, a join venture between San Jose,USA and
                  Bangalore, India. Her performances include cultural
                  representations at state level events, Navarasa Navaratri by
                  Kalasindhu Academy and dance dramas like Panchakalyanam during
                  Mahamastakabhishekam in Shravanabelagola and Raghavendra
                  Aradhana at Mantralaya, India.
                </div>
                <div>
                  <h4>Guided by Eminent Gurus</h4>
                  <div>
                    Every dancer’s journey is shaped by the wisdom and blessings
                    of their teachers. Subhashree’s art has been nurtured under
                    the guidance of her esteemed Guru Vidhushi Dr. Indu Nadig
                    whose teachings form the foundation of her bharatanatyam
                    practice. She has had the privilege of being mentored by
                    some of the most renowned exponents of Bharatanatyam,
                    including Vidhushi Rama Vaidhyanathan, Vidhushi Brugha
                    Basel, the Gurus of Upadhye School of Dance, and Vidwan
                    Mavin Khoo — guidance that continues to shape her artistic
                    journey enriching her practice with depth and authenticity. 
                    In addition, she pursues her training in the Carnatic
                    classical music under the guidance of the esteemed Guru
                    Vidwan, Karnataka Kalashree Tirumale Srinivas (Chamy Sir).
                    Their invaluable Their invaluable lessons in discipline,
                    devotion, and expression continue to inspire her path as
                    both a dancer and a teacher.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="inner-section-3">
          <Container>
            <div className="content">
              <img alt="" src={Section3Img} />
              <i>Passing on tradition under the watchful eyes of her guru.</i>
            </div>
          </Container>
        </div>
        <div className="inner-section-4">
          <Container>
            <div className="content">
              <h4>Original Productions</h4>
              <div className="img-wrapper">
                <div>
                  <div style={{ position: "relative" }}>
                    <img alt="" src={Section4Img1} />
                    <div className="img-detail">Krishna Kalaapam</div>
                  </div>
                  <div className="text">
                    A tribute to the Legendary Carnatic Vocalist M.S.
                    Subbulakshmi, created for Indian Raga online fellowship.
                  </div>
                </div>
                <div className="image-2-wrapper">
                  <div style={{ position: "relative" }}>
                    <img alt="" src={Section4Img2} />
                    <div className="img-detail">Shambho</div>
                  </div>
                  <div className="text">
                    A powerful  portrayal of the cosmic union of Lord Shiva and
                    Goddes Parvathi, blending themes of strength & grace,
                    devotion & divine balance, asceticism & beauty, destruction
                    & creation.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="inner-section-5">
          <Container>
            <div className="content">
              <h4>Performances in Melbourne</h4>
              <div className="text">
                Subhashree and the students of Shree Lasya Performing Arts
                (SLPA) have showcased their talent at numerous prestigious
                events hosted by organisations including
              </div>
              <div className="marquee">
                <div className="marquee-track">
                  {marqueeImages?.map((item, index) => {
                    return (
                      <div key={index} style={{ position: "relative" }}>
                        <img alt="" src={item.img} />
                        <div className="detail">{item.detail}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="inner-section-6">
          <Container>
            <div className="content">
              <h4>Honours and Accolades</h4>
              <div className="list">
                {accolades?.map((item, index) => {
                  return (
                    <div key={index} className="list-item">
                      <img alt="" src={Design1} />
                      <div className="text-wrapper">
                        <div style={{ fontSize: "17px" }}>{item.award}</div>
                        <div style={{ fontSize: "20px" }}>{item.authority}</div>
                      </div>
                      <img alt="" src={Design2} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
