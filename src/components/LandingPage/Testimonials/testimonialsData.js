import Image1 from "../../../assets/testimonialImg1.svg";
import Image2 from "../../../assets/testimonialImg2.svg";
import Image3 from "../../../assets/testimonialImg3.svg";
import Image4 from "../../../assets/testimonialImg4.svg";
import Image5 from "../../../assets/testimonialImg5.svg";
import Image6 from "../../../assets/testimonialImg6.svg";
import Image7 from "../../../assets/testimonialImg7.svg";
import Image8 from "../../../assets/testimonialImg8.svg";
import Image9 from "../../../assets/testimonialImg9.svg";
import Image10 from "../../../assets/testimonialImg10.svg";
import Image11 from "../../../assets/testimonialImg11.svg";

const testimonialsData = [
  {
    content:
      "I have always dreamed of learning dance but thought I had missed my chance, until I met Subha ma'am. She not only reignited that dream but also showed me that it's never too late, especially with the right teacher. Her ability to connect with students of all ages is truly rare. While she is an excellent teacher, witnessing her perform reveals the depth of her true artistry. She truly walks the talk.",
    name: "Arya Krishnan",
    role: "Student",
    image: Image1,
  },
  {
    content:
      "I still remember when I started with Subha akka. I was one of her first students but didn't exactly enjoy dancing when i joined. I was being forced. However, Subha akka taught to me to love dance as she patiently dealt with my shabby dancing. Over the years, seeing her love for dance made my passion grow and I aimed to refine my skill. Subha akka has always been the best, most talented and patient teacher I have ever had, and I have had about 3 teachers before her. She is an amazing and caring teacher, and a beautifully talented dancer as well.",
    name: "Vrinda Parekh",
    role: "Student",
    image: Image2,
  },
  {
    content:
      "Learning Bharatanatyam under the guidance of Subhashree ma'am has truly been an inspiring journey of my life. She has taught me to see Bharatanatyam not merely as a dance but as a language of devotion, grace and expression. She helps us understand the deeper meaning behind each step and encourages us to express emotions with our heart. What makes her class remarkable is her passion, dedication and gentle guidance which inspire every student to dance with soul. I feel extremely grateful to be a student of Shree Lasya Performing Arts and continue to dance with patience, wisdom and knowledge.",
    name: "Aahana Shetti",
    role: "Student",
    image: Image3,
  },
  {
    content:
      "My name is Sanskriti. I am a Bharatanatyam Dancer and my Guru is Vidushi Subhashree Thyagarajan. It is truly an amazing experience learning this art form from such a talented Guru like her. I used to attend in person classes but unfortunately had to travel back to my hometown. Although I was sad that I had to discontinue my classes with her, she gave me the confidence that I  will still be able to seek this art form under her guidance online no matter which part of the world I am in. I am so glad and blessed to be continuing my dance journey with Shree Lasya Performing Arts.",
    name: "Sanskriti.",
    role: "Student",
    image: Image4,
  },
  {
    content:
      "There comes a time in one’s life when you know you’re on the right track — for me, that moment was dancing on stage. This is the gift that Shree Lasya has given me. When I first joined this dance class, I was a bit skeptical if a guru with a full-time job could show the same dedication as my past dance teachers, but Subhashree akka has exceeded every expectation. The creativity and love she brings to each class are truly contagious, and it shows in every performance we give. Overall, Shree Lasya is the most vibrant and deeply dedicated dance school in Melbourne, and I know every student here feels the same way.",
    name: "Deeksha",
    role: "Student",
    image: Image5,
  },
  {
    content:
      "I love classical dance the rhythmic beat of the kolam makes you want to tap your legs . When you first see a classical dancer on stage you think it is very easy to copy the steps and do the same . But when you actually go to a Bharatanatyam class and learn it for the first time it is very hard without the right teacher. Shree Lasya helped me to learn all the steps needed to perform on stage. Shubha akka helped me understand the meaning and purpose behind the dance which made me understand it better .She also thought me the small corrections needed to make my performance stand out from the rest despite being an online class. All you have to do is practice the steps , learn the sollu kattu and enjoy the dance .",
    name: "Harini Muralidaran",
    role: "Student",
    image: Image6,
  },
  {
    content:
      "Subhashree Mam is herself a testimony of discipline, posture, grace; a harbinger of Indian culture and a true forerunner to carry the bastion of the ancient Indian culture to the world and future generations. When I first came to Australia, I wanted to get an option to stay rooted to our rich Indian culture. Everything felt new and different, and I missed the traditions that reminded me of home. Then I found Bharatanatyam—and with the guidance of my amazing teacher, I began to reconnect with my roots in the most beautiful way. Each class feels like a celebration of who I am. Through every step, rhythm, and expression, I’ve learned not just the dance itself, but the stories, discipline, and devotion behind it. My teacher’s patience, kindness, and passion have inspired me to fall in love with Bharatanatyam and to be proud of my heritage. Even though I’m far from India, this dance has brought me closer to it than ever before. I’ll always be grateful for the way my teacher has made Bharatanatyam feel like home.",
    name: "Saanvi Subudhi",
    role: "Student",
    image: Image7,
  },
  {
    content:
      "I've been attending these Bharatanatyam classes for over two years now, and it has truly been an incredible journey. My teacher has supported me through every step, guiding me with patience, encouragement, and deep knowledge of the art form. Each class is not only filled with learning and growth but also with joy and inspiration. I've gained so much confidence, developed a deeper love for dance, and formed a meaningful connection with this beautiful tradition. These classes have become a highlight of my week—something I genuinely look forward to every time! ",
    name: "Riya",
    role: "Student",
    image: Image8,
  },
  {
    content:
      "These classes have truly been an incredible experience for me, and I continue to learn something new every single day. Each lesson inspires and motivates me to do better, not just in class but also at home, where I’ve learned the value of hard work and resilience. We’re given the time and support to learn and perfect every step at our own pace, making the environment both encouraging and comfortable. The amazing opportunities to perform and grow have also helped me overcome my stage fright and build confidence along the way.",
    name: "Sejal",
    role: "Student",
    image: Image9,
  },
  {
    content:
      "Learning Bharatanatyam in Shree Lasya Performing Arts is a part of the week I truly look forward to. My Guru, Subhashree Thyagarajan teaches very well — fast enough to keep us engaged, but she also refines our movements to create a cohesive item. We also get many opportunities to perform on stage, and get lots of freedom when it comes to how and what we want to perform. Shree Lasya Performing Arts is a friendly community, and we all support each other when learning. Shree Lasya Performing Arts really is a fun place to learn this beautiful art form.",
    name: "Shreya",
    role: "Student",
    image: Image10,
  },
  {
    content:
      "My name is Tanvi Lanka, and I have been a student at Sree Lasya Performing Arts for one year and six months. I have really enjoy coming to dance and learning something new every day, whether it’s through discovering new segments of an item or refining the steps and pieces I have already learned. Over time, I’ve not only improved my skills but also developed a deeper appreciation for the art form of bharatanatyam and the amount of practice and discipline it takes to a good dancer. Going to these classes taught me how important it is to keep practicing as well as frequently watching other people perform which teaches more about how you can use your expressions to convey a story in a beautiful manner. I look forward to continuing my journey and learning even more in the future with Sree Lasya Performing Arts.",
    name: "Tanvi Lanka",
    role: "Student",
    image: Image11,
  },
];

export default testimonialsData;
