"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { CheckCircle, Facebook, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Courses",          id: "#courses"},
        {
          name: "Success",          id: "#success"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "FAQs",          id: "#faqs"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="VERMA TUTORIAL"
      button={{
        text: "Enroll Now",        href: "#contact"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboard
      background={{
        variant: "radial-gradient"}}
      title="Unlock Your Potential with VERMA TUTORIAL"
      description="Meet Rajiv Sir, Director of Verma Tutorials (V.T.). With over 15 years of dedicated teaching experience, Rajiv Sir has consistently guided students to academic success through structured guidance, personalized mentoring, and proven teaching methodologies. Unlock your potential and embark on your journey to knowledge and competitive success with our expert coaching."
      tag="Your Path to Success"
      buttons={[
        {
          text: "Explore Courses",          href: "#courses"},
        {
          text: "Enroll Now",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/joyful-redhead-girl-with-beautiful-smile-sitting-close-her-handsome-boyfriend-stylish-hat-glasses_273609-9734.jpg",          alt: "Student 1"},
        {
          src: "http://img.b2bpic.net/free-photo/sad-teenage-girl-with-book-her-hands-emotion-concept_169016-65739.jpg",          alt: "Student 2"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-man-with-beard-red-messy-hair-wearing-glasses-with-striped-tshirt-drinking-coffee_1258-170802.jpg",          alt: "Student 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-clothes-sexy-carefree-woman-posing-near-blue-wall-positive-model-having-fun_158538-6595.jpg",          alt: "Student 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-pleased-african-american-blogger-holding-sandwich-smiling-camera-being-excited-taste-it-walking-across-food-festival-local-park_176420-19849.jpg",          alt: "Student 5"},
      ]}
      avatarText="Join 10,000+ successful students!"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EUEuqRBnlEIWiABQ51jqKM5qld/uploaded-1780809250906-qwnd87yd.png"
      imageAlt="Rajiv Sir, Director of Verma Tutorials (V.T.)"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "JEE & NEET Excellence"},
        {
          type: "text",          text: "Board Exam Mastery"},
        {
          type: "text",          text: "Olympiad Preparation"},
        {
          type: "text",          text: "Foundation Programs"},
        {
          type: "text",          text: "Experienced Faculty"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="About Rajiv Sir"
      description="Rajiv Sir\nDirector of Verma Tour Travels (V.T.)\n15+ Years of Experience"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EUEuqRBnlEIWiABQ51jqKM5qld/uploaded-1780809522808-ag4v3skr.png"
      imageAlt="Rajiv Sir, Director of Verma Tour Travels (V.T.)"
      mediaPosition="left"
      mediaClassName="w-full h-auto object-cover max-w-[80%]"
    />
  </div>

  <div id="courses" data-section="courses">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "JEE/NEET Preparation",          description: "Intensive coaching for engineering and medical entrance exams, focusing on in-depth concepts, problem-solving, and mock tests.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/study-concept-young-lady-with-laptop-with-headphones_185193-109580.jpg",            imageAlt: "Student understanding complex concepts"},
          items: [
            {
              icon: CheckCircle,
              text: "Expert Faculty"},
            {
              icon: CheckCircle,
              text: "Advanced Study Material"},
            {
              icon: CheckCircle,
              text: "Regular Mock Tests"},
          ],
          reverse: false
        },
        {
          title: "CBSE/ICSE Board Coaching",          description: "Structured courses for school board exams, covering all subjects with personalized attention and comprehensive syllabus coverage.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/girl-student-is-talking-phone-home-conversation-phone_169016-67555.jpg",            imageAlt: "Student preparing for exams"},
          items: [
            {
              icon: CheckCircle,
              text: "Chapter-wise Tests"},
            {
              icon: CheckCircle,
              text: "Doubt Clearing Sessions"},
            {
              icon: CheckCircle,
              text: "Previous Year Papers"},
          ],
          reverse: true
        },
        {
          title: "Foundation & Olympiad Courses",          description: "Early development programs for junior students, building strong fundamentals and preparing for various competitive Olympiads.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-student-with-pigtails-white-shirt-headphones-studying_141793-26442.jpg",            imageAlt: "Teacher providing support to a student"},
          items: [
            {
              icon: CheckCircle,
              text: "Concept Building"},
            {
              icon: CheckCircle,
              text: "Critical Thinking"},
            {
              icon: CheckCircle,
              text: "Problem Solving"},
          ],
          reverse: false
        }
      ]}
      title="Our Comprehensive Programs"
      description="Tailored coaching designed to meet diverse academic needs, from school curriculum to competitive exams, ensuring holistic development and stellar performance."
    />
  </div>

  <div id="success" data-section="success">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Our Success at a Glance"
      tag="Proven Results"
      metrics={[
        {
          id: "m1",          value: "10000+",          description: "Students Enrolled"},
        {
          id: "m2",          value: "95%",          description: "Success Rate"},
        {
          id: "m3",          value: "10+",          description: "Years of Excellence"},
        {
          id: "m4",          value: "50+",          description: "Expert Faculty"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Priya Sharma",          date: "May 2024",          title: "Achieved My IIT Dream!",          quote: "VERMA TUTORIAL's focused JEE coaching and dedicated faculty were instrumental in me securing a seat at IIT. The study material and mock tests were top-notch!",          tag: "JEE Success",          avatarSrc: "http://img.b2bpic.net/free-photo/happy-graduate-smiling-graduation-gown_23-2151970539.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/student-man-holding-trophy_1368-9280.jpg",          imageAlt: "Priya Sharma holding her IIT acceptance letter"},
        {
          id: "2",          name: "Rahul Singh",          date: "April 2024",          title: "Scored 98% in CBSE Boards!",          quote: "The personalized attention and comprehensive board exam preparation helped me excel beyond my expectations. Highly recommend VERMA TUTORIAL for school students.",          tag: "CBSE Boards",          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-smiling-white_1187-4323.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/person-with-books-digital-art-style-education-day_23-2151164353.jpg",          imageAlt: "Rahul Singh studying in a library"},
        {
          id: "3",          name: "Anjali Verma",          date: "June 2024",          title: "Cracked NEET with Confidence!",          quote: "The systematic approach to NEET syllabus and constant motivation from teachers made a huge difference. Thank you for guiding me to my medical career.",          tag: "NEET Success",          avatarSrc: "http://img.b2bpic.net/free-photo/young-blond-student-smiling-happy-standing-university_839833-13551.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/creative-students-working-together_23-2147656002.jpg",          imageAlt: "Anjali Verma in a group study session"},
        {
          id: "4",          name: "Sagar Gupta",          date: "March 2024",          title: "Strong Foundations for Future",          quote: "The foundation courses were excellent! They helped me understand concepts clearly and boosted my confidence for competitive exams from an early age.",          tag: "Foundation Course",          avatarSrc: "http://img.b2bpic.net/free-photo/young-girl-standing-straight-posing-camera-checked-shirt-red-t-shirt-looking-happy-front-view_176474-88837.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-device_23-2149085963.jpg",          imageAlt: "Sagar Gupta attending an online class"},
        {
          id: "5",          name: "Meena Devi",          date: "July 2024",          title: "Exceptional Mentorship!",          quote: "Beyond academics, the mentors at VERMA TUTORIAL provided invaluable guidance and support, which was crucial for my overall development and success.",          tag: "Mentorship",          avatarSrc: "http://img.b2bpic.net/free-photo/young-man-learning-virtual-classroom_23-2149200207.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/workplace-violence-taking-place-colleagues_23-2149361855.jpg",          imageAlt: "Meena Devi discussing with a teacher"},
        {
          id: "6",          name: "Alok Kumar",          date: "August 2024",          title: "Personalized Attention Paid Off",          quote: "The small batch sizes meant I received personalized attention, which was key to understanding complex topics. VERMA TUTORIAL truly cares about student success.",          tag: "Personalized Coaching",          avatarSrc: "http://img.b2bpic.net/free-photo/responsible-student_23-2147650755.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/teenage-student-smiling-with-book-head_23-2148208755.jpg",          imageAlt: "Alok Kumar studying with a book on his head"},
      ]}
      title="What Our Students Say"
      description="Hear directly from our successful students about their transformative learning experiences and achievements at VERMA TUTORIAL."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Standard",          price: "₹15,000",          subtitle: "Per Semester",          buttons: [
            {
              text: "Select Plan",              href: "#contact"},
          ],
          features: [
            "Access to Online Classes",            "Standard Study Material",            "Bi-weekly Doubt Sessions",            "Monthly Progress Reports",            "Basic Test Series"],
        },
        {
          id: "premium",          badge: "Popular",          badgeIcon: Sparkles,
          price: "₹25,000",          subtitle: "Per Semester",          buttons: [
            {
              text: "Select Plan",              href: "#contact"},
          ],
          features: [
            "All Standard Features",            "Premium Study Material",            "Weekly Doubt Sessions",            "Personalized Mentorship",            "Advanced Test Series",            "Career Counseling"],
        },
        {
          id: "elite",          badge: "Elite",          price: "₹40,000",          subtitle: "Per Semester",          buttons: [
            {
              text: "Select Plan",              href: "#contact"},
          ],
          features: [
            "All Premium Features",            "Exclusive Study Resources",            "Daily Doubt Support",            "One-on-One Coaching",            "Unlimited Mock Tests",            "Admission Guidance"],
        },
      ]}
      title="Flexible Learning Plans"
      description="Choose the program that best fits your academic journey and budget. Each plan is designed to provide maximum value and support for your success."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How do I enroll in a course?",          content: "You can enroll by filling out the online inquiry form on our contact page, visiting our center, or calling our admissions team. They will guide you through the process."},
        {
          id: "q2",          title: "What are the class timings?",          content: "Class timings vary by course and batch. Detailed schedules are provided during enrollment. We offer morning, afternoon, and evening batches to accommodate different student needs."},
        {
          id: "q3",          title: "Do you offer demo classes?",          content: "Yes, we offer complimentary demo classes for most of our programs. This allows students to experience our teaching methodology before committing. Contact us to schedule one."},
        {
          id: "q4",          title: "What is the qualification of your faculty?",          content: "Our faculty comprises highly experienced educators, many with advanced degrees and extensive teaching experience in their respective fields, including IIT and NEET qualifiers."},
        {
          id: "q5",          title: "What study materials are provided?",          content: "We provide comprehensive study modules, practice sheets, previous year question papers, and access to an extensive online resource library tailored for each course."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-thinking-classroom_1098-2838.jpg"
      imageAlt="Students discussing questions with a teacher"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers to common queries about our courses, enrollment, and methodology. If you don't find your answer, feel free to contact us directly."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      text="Ready to Achieve Your Academic Goals?"
      buttons={[
        {
          text: "Contact Us",          href: "#"},
        {
          text: "Call: 9971623830",          href: "tel:9971623830"},
        {
          text: "Instagram: @vermatutorial",          href: "https://www.instagram.com/vermatutorial"},
        {
          text: "Email: info@example.com",          href: "mailto:info@example.com"},
        {
          text: "Enroll Today",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="VERMA TUTORIAL"
      copyrightText="© 2024 VERMA TUTORIAL. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
