"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Figma Assets
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/df2fca54-a2a0-4eb2-b04f-47de5a34c599";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/68ebdaf3-d4a3-47c5-8c8e-137eb91d992e";
const imgImage16 = "https://www.figma.com/api/mcp/asset/cf2dba1f-ae33-46f4-92a9-4cf26c6880fd";
const imgImage17 = "https://www.figma.com/api/mcp/asset/fba7483b-78fe-4be3-aa9a-e01be4ebbea0";
const imgImage18 = "https://www.figma.com/api/mcp/asset/6df353da-afb4-4a35-90fb-c2222f277b44";
const imgImage19 = "https://www.figma.com/api/mcp/asset/a339cfed-3f80-4df9-bb57-ef7d798b2de2";
const img112SparklingWaterCourt = "https://www.figma.com/api/mcp/asset/d2429917-ca3f-45f1-8107-44cd79ebdde0";
const img112SparklingWaterCourt1 = "https://www.figma.com/api/mcp/asset/c0e9374c-fdd3-4e10-bade-e3694d88bde0";
const imgEllipse223 = "https://www.figma.com/api/mcp/asset/0144b509-f969-4d9f-b101-8b65d974a737";
const imgEllipse224 = "https://www.figma.com/api/mcp/asset/dddb1259-3c54-4bec-9e8a-37a79a66b848";
const imgEllipse225 = "https://www.figma.com/api/mcp/asset/98624dd4-b497-4a28-bd83-c133e5d77d27";
const imgEllipse226 = "https://www.figma.com/api/mcp/asset/bcb0e5ec-2e29-40d8-857a-3c90564d0894";
const imgQvrn6Gdeq84Zgkw0Rlji1 = "https://www.figma.com/api/mcp/asset/56f7f0c0-4b98-455f-9f86-de9f159be339";
const imgFrame2147224460 = "https://www.figma.com/api/mcp/asset/adfbc1da-31dd-4c6b-b6f1-82986c9c82e7";
const imgInstagramLogo20162 = "https://www.figma.com/api/mcp/asset/b2420e30-589d-4103-bd01-4aea95152be6";
const imgFrame2147224461 = "https://www.figma.com/api/mcp/asset/7b59b972-5b0a-4c38-bacb-f55962eacf51";
const imgFrame = "https://www.figma.com/api/mcp/asset/39dc217f-42c0-444a-b5a5-a4831796ae42";
const imgGoogleGLogo1 = "https://www.figma.com/api/mcp/asset/03fbf42f-e53e-481b-bb2d-0fd8009c45bc";
const imgNounStar496059211 = "https://www.figma.com/api/mcp/asset/46f8af3b-cccb-4f02-9ce8-8c55a2e5b396";
const imgUnion = "https://www.figma.com/api/mcp/asset/fcafc4c7-aa6a-4bf8-b0ad-998175b77335";

// Listing data with marker positions (responsive)
const listings = [
  {
    id: 1,
    image: imgImage16,
    title: "Price adjustment notification sent to 847 buyers",
    time: "2 hours ago",
    markerPosition: { left: "30%", top: "40%" },
  },
  {
    id: 2,
    image: imgImage17,
    title: "Showing scheduled at 456 Mountain Ridge Ave",
    time: "Just now",
    markerPosition: { left: "55%", top: "30%" },
  },
  {
    id: 3,
    image: imgImage18,
    title: "Showing scheduled at 789 Sunset Blvd",
    time: "Just now",
    markerPosition: { left: "20%", top: "55%" },
  },
  {
    id: 4,
    image: imgImage19,
    title: "New listing at 321 Oak Street",
    time: "Just now",
    markerPosition: { left: "45%", top: "25%" },
  },
  {
    id: 5,
    image: imgImage18,
    title: "Open house at 555 Palm Drive",
    time: "Just now",
    markerPosition: { left: "70%", top: "50%" },
  },
];

// Animated Text Component
function AnimatedHeading({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <div ref={textRef} className={className}>
        {children}
      </div>
    </div>
  );
}

// Fade Up Component
function FadeUp({ children, className, delay = 0, stagger = false }: { children: React.ReactNode; className?: string; delay?: number; stagger?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const targets = stagger ? ref.current.children : ref.current;

    gsap.fromTo(
      targets,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Scale Reveal Component
function ScaleReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Line Reveal Component
function LineReveal({ className, delay = 0 }: { className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.inOut",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return <div ref={ref} className={className} />;
}

// Counter Animation Component
function AnimatedCounter({ value, suffix = "", className }: { value: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasDecimal = value.includes(".");
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const counter = { value: 0 };
        gsap.to(counter, {
          value: numericValue,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (ref.current) {
              const displayValue = hasDecimal
                ? counter.value.toFixed(1)
                : Math.floor(counter.value).toLocaleString();
              ref.current.textContent = `${prefix}${displayValue}${suffix}`;
            }
          },
        });
      },
    });
  }, [value, suffix]);

  return (
    <p ref={ref} className={className}>
      {value}{suffix}
    </p>
  );
}

// Star Rating Component
function StarRating() {
  return (
    <div className="flex gap-[4px]">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative w-[16px] h-[16px] md:w-[20px] md:h-[20px]">
          <Image src={imgNounStar496059211} alt="" fill className="object-contain" unoptimized />
        </div>
      ))}
    </div>
  );
}

// Review Card Component
interface ReviewCardProps {
  name: string;
  date: string;
  avatar: string;
  review: string;
}

function ReviewCard({ name, date, avatar, review }: ReviewCardProps) {
  return (
    <div className="bg-[#2b2b2b] border border-[#484848] rounded-[12px] p-[16px] md:p-[20px] w-[300px] md:w-[469px] flex flex-col gap-[11px] shrink-0 hover:border-[#666] transition-colors duration-300">
      <div className="flex justify-between items-start w-full">
        <div className="flex gap-[12px] md:gap-[16px] items-center">
          <div className="relative w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full overflow-hidden">
            <Image src={avatar} alt={name} fill className="object-cover" unoptimized />
          </div>
          <div className="flex flex-col gap-[2px] font-dm-sans font-medium text-[14px] md:text-[16px] text-white tracking-[0.48px]">
            <p className="leading-[20px] md:leading-[24px]">{name}</p>
            <p className="leading-[20px] md:leading-[24px] opacity-40 text-[12px] md:text-[16px]">{date}</p>
          </div>
        </div>
        <div className="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
          <Image src={imgGoogleGLogo1} alt="Google" fill className="object-contain" unoptimized />
        </div>
      </div>
      <StarRating />
      <p className="font-dm-sans font-normal text-[14px] md:text-[18px] text-white leading-[22px] md:leading-[28px]">{review}</p>
      <p className="font-dm-sans font-medium text-[14px] md:text-[16px] text-white opacity-40 tracking-[0.48px] leading-[24px] cursor-pointer hover:opacity-60 transition-opacity">
        Read More
      </p>
    </div>
  );
}

// Reviews data for infinite carousel
const reviews = [
  {
    name: "Jennifer M.",
    date: "November 25, 2024",
    avatar: imgEllipse223,
    review: "I've sold multiple investment properties and Shannon is by far the most professional agent I've worked with. Her marketing reach is 20x better than average agents. The data proves it."
  },
  {
    name: "Michael & Sarah T.",
    date: "November 25, 2024",
    avatar: imgEllipse224,
    review: "Shannon's marketing strategy was phenomenal. Our home had 94,000 views and we received a full-price offer within 30 days. The weekly Beacon reports kept us informed every step of the way."
  },
  {
    name: "Robert K.",
    date: "November 25, 2024",
    avatar: imgEllipse225,
    review: "As a luxury seller, I needed an agent who understood high-end marketing. Shannon's approach was sophisticated and data-driven. The 3D tours, professional photography, and targeted advertising reached the right buyers."
  },
  {
    name: "Megan Shay",
    date: "November 25, 2024",
    avatar: imgEllipse226,
    review: "This was my first time selling a home and Shannon made it stress-free. Her communication was outstanding - I always knew what was happening. The Beacon reports were like having a dashboard for my listing."
  },
  {
    name: "David & Lisa Chen",
    date: "November 18, 2024",
    avatar: imgEllipse223,
    review: "We were relocating from out of state and Shannon handled everything flawlessly. Her virtual tours and detailed Beacon updates made us feel like we were there every step of the way. Sold above asking!"
  },
  {
    name: "Amanda Rodriguez",
    date: "November 12, 2024",
    avatar: imgEllipse224,
    review: "The level of transparency Shannon provides is unmatched. I could see exactly how many people viewed my listing, where they came from, and what marketing was working. It's like having X-ray vision into the selling process."
  },
  {
    name: "Thomas Wright",
    date: "November 8, 2024",
    avatar: imgEllipse225,
    review: "After a disappointing experience with another agent, Shannon turned everything around. Her marketing generated 5x more views in the first week than my previous agent did in 3 months. Incredible results."
  },
  {
    name: "Patricia & James Moore",
    date: "October 30, 2024",
    avatar: imgEllipse226,
    review: "Shannon's attention to detail is remarkable. From staging advice to professional photography to targeted social media ads - every aspect was handled with precision. Our home sold in just 12 days!"
  },
  {
    name: "Kevin O'Brien",
    date: "October 25, 2024",
    avatar: imgEllipse223,
    review: "I'm a data person, and Shannon speaks my language. The analytics she provides through Beacon reports gave me confidence that my investment was being maximized. Best decision I made was choosing her team."
  }
];

// Infinite Scroll Carousel Component
function InfiniteCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth / 2;
    
    const tl = gsap.to(scrollContainer, {
      x: -scrollWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    scrollContainer.addEventListener("mouseenter", () => tl.pause());
    scrollContainer.addEventListener("mouseleave", () => tl.play());

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex gap-[16px] md:gap-[32px] w-fit">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`first-${index}`}
            name={review.name}
            date={review.date}
            avatar={review.avatar}
            review={review.review}
          />
        ))}
        {reviews.map((review, index) => (
          <ReviewCard
            key={`second-${index}`}
            name={review.name}
            date={review.date}
            avatar={review.avatar}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
}

// Property Card Component
interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  location: string;
  badge: string;
  index: number;
}

function PropertyCard({ image, price, address, location, badge, index }: PropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: (index % 3) * 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={ref} className="flex flex-col gap-[16px] md:gap-[24px] w-full md:w-[calc((100%-60px)/3)] group cursor-pointer">
      <div className="relative w-full aspect-[664/830] overflow-hidden rounded-[4px]">
        <Image 
          src={image} 
          alt={address} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          unoptimized 
        />
        <div className="absolute top-[12px] right-[12px] md:top-[16px] md:right-[16px] bg-white border border-[rgba(43,43,43,0.15)] rounded-[19px] px-[8px] py-[4px]">
          <p className="font-geist font-normal text-[12px] md:text-[14px] text-[#2b2b2b] tracking-[1px] leading-[20px]">
            Sold
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] md:gap-[12px] text-[#2b2b2b]">
        <p className="font-geist font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]">{price}</p>
        <p className="font-gilda text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] group-hover:text-[#555] transition-colors duration-300">{address}</p>
        <p className="font-geist font-normal text-[12px] md:text-[14px] tracking-[1px] uppercase opacity-60 leading-[20px]">
          {location}
        </p>
      </div>
      <div className="border border-[rgba(43,43,43,0.15)] rounded-[19px] px-[8px] py-[4px] w-fit">
        <p className="font-geist font-normal text-[12px] md:text-[14px] text-[#2b2b2b] tracking-[1px] leading-[20px]">
          {badge}
        </p>
      </div>
    </div>
  );
}

// Interactive Activity Card Component
interface ActivityCardProps {
  image: string;
  title: string;
  time: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function ActivityCard({ image, title, time, isSelected = false, onClick }: ActivityCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-[12px] md:gap-[20px] items-center p-[12px] md:p-[16px] rounded-[8px] w-full transition-all duration-300 cursor-pointer text-left ${
        isSelected
          ? "bg-[#f4f1ea] border-2 border-white scale-[1.02]"
          : "border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]"
      }`}
    >
      <div className="relative w-[60px] h-[45px] md:w-[85px] md:h-[64px] rounded-[6px] overflow-hidden shrink-0">
        <Image src={image} alt="" fill className="object-cover" unoptimized />
      </div>
      <div className="flex flex-col gap-[2px] md:gap-[4px] flex-1">
        <p
          className={`font-geist font-medium text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] ${
            isSelected ? "text-[#2b2b2b]" : "text-white"
          }`}
        >
          {title}
        </p>
        <p className="font-geist font-normal text-[12px] md:text-[14px] text-[#71706c] leading-[16px] md:leading-[20px]">{time}</p>
      </div>
    </button>
  );
}

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string;
  badge: string;
  index: number;
}

function StatCard({ label, value, badge, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={ref} className="flex-1 flex flex-col gap-[12px] md:gap-[20px]">
      <AnimatedCounter 
        value={value} 
        className="font-gilda text-[48px] md:text-[80px] text-[#2b2b2b] leading-[56px] md:leading-[88px]" 
      />
      <p className="font-geist font-normal text-[12px] md:text-[14px] text-[#2b2b2b] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
        {label}
      </p>
      <LineReveal className="w-[50px] h-px bg-[#2b2b2b]" delay={index * 0.1} />
      <div className="border border-[rgba(43,43,43,0.15)] rounded-[19px] px-[8px] py-[4px] w-fit">
        <p className="font-geist font-normal text-[11px] md:text-[14px] text-[#2b2b2b] tracking-[1px] leading-[16px] md:leading-[20px] whitespace-nowrap">
          {badge}
        </p>
      </div>
    </div>
  );
}

// Performance Stat Component
interface PerformanceStatProps {
  label: string;
  value: string;
  badge: string;
  index: number;
}

function PerformanceStat({ label, value, badge, index }: PerformanceStatProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={ref} className="flex-1 flex flex-col gap-[10px] md:gap-[14px] items-center py-[24px] md:py-[46px] px-[8px] border border-[#d6d3cd]">
      <p className="font-geist font-normal text-[10px] md:text-[14px] text-[#2b2b2b] tracking-[1px] uppercase text-center leading-[14px] md:leading-[20px]">
        {label}
      </p>
      <AnimatedCounter 
        value={value} 
        className="font-gilda text-[32px] md:text-[64px] text-[#2b2b2b] text-center leading-[36px] md:leading-[64px]" 
      />
      <div className="border border-[rgba(43,43,43,0.15)] rounded-[19px] px-[6px] md:px-[8px] py-[4px]">
        <p className="font-geist font-normal text-[9px] md:text-[14px] text-[#2b2b2b] tracking-[1px] leading-[12px] md:leading-[20px] whitespace-nowrap">
          {badge}
        </p>
      </div>
    </div>
  );
}

// Social Platform Card Component
interface SocialPlatformCardProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  index: number;
}

function SocialPlatformCard({ icon, name, value, index }: SocialPlatformCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={ref} className="flex-1 flex flex-col gap-[12px] md:gap-[20px] p-[12px] md:p-[16px] md:px-[20px] border border-[rgba(43,43,43,0.15)] rounded-[8px] hover:border-[rgba(43,43,43,0.3)] transition-colors duration-300">
      <div className="flex gap-[8px] md:gap-[12px] items-center">
        {icon}
        <p className="font-geist font-normal text-[14px] md:text-[18px] text-black leading-[20px] md:leading-[24px]">{name}</p>
      </div>
      <p className="font-gilda text-[24px] md:text-[32px] text-[#2b2b2b] leading-[28px] md:leading-[40px]">{value}</p>
    </div>
  );
}

// Map Marker Component
interface MapMarkerProps {
  isActive: boolean;
  position: { left: string; top: string };
}

function MapMarker({ isActive, position }: MapMarkerProps) {
  return (
    <div
      className="absolute transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.left, top: position.top }}
    >
      {isActive ? (
        // Selected state: Circle with house icon
        <div className="relative">
          <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] bg-[#f4f1ea] rounded-full flex items-center justify-center shadow-lg border-2 border-[#2b2b2b] z-20 animate-bounce">
            <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6L8 1.33333L14 6V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V6Z" stroke="#2b2b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 14.6667V8H10V14.6667" stroke="#2b2b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full bg-[#2b2b2b]/20 animate-ping" />
        </div>
      ) : (
        // Default state: Small dot
        <div className="w-[12px] h-[12px] bg-[#2b2b2b] rounded-full border-2 border-[#f4f1ea] shadow-md opacity-80 hover:opacity-100 transition-opacity z-10" />
      )}
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-label", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(".hero-name", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.4 });
      gsap.fromTo(".hero-line", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1, ease: "power3.inOut", delay: 0.8 });
      gsap.fromTo(".hero-tagline", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1 });
      gsap.fromTo(imageRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-[24px] md:px-[64px] gap-[40px] lg:gap-0">
      <div className="flex flex-col gap-[16px] md:gap-[19px] w-full lg:w-[594px] order-2 lg:order-1">
        <p className="hero-label font-geist font-normal text-[12px] md:text-[14px] text-[#2b2b2b] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
          The Portfolio
        </p>
        <div className="overflow-hidden">
          <h1 className="hero-name font-gilda text-[56px] sm:text-[80px] md:text-[100px] lg:text-[128px] text-[#2b2b2b] leading-[1] md:leading-[115.2px]">
            Shannon Gillette
          </h1>
        </div>
        <div className="hero-line w-[60px] md:w-[100px] h-px bg-[#2b2b2b]" />
        <p className="hero-tagline font-geist font-light text-[16px] md:text-[20px] text-[#2b2b2b] leading-[26px] md:leading-[32.5px] w-full md:w-[450px]">
          Data-driven marketing. Transparent communication. Exceptional results.
        </p>
      </div>
      <div ref={imageRef} className="relative w-full lg:w-[658px] aspect-[658/718] lg:h-[718px] overflow-hidden order-1 lg:order-2">
        <Image src={imgRectangle1} alt="Shannon Gillette" fill className="object-cover" unoptimized />
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const [selectedListing, setSelectedListing] = useState<number | null>(1);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#f4f1ea] relative min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <FadeUp delay={0}>
        <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-[24px] md:px-[64px] py-[12px] md:py-[13px]">
          <div className="relative w-[150px] md:w-[252px] h-[46px] md:h-[78px]">
            <Image src={imgQvrn6Gdeq84Zgkw0Rlji1} alt="Logo" fill className="object-contain object-left" unoptimized />
          </div>
          <div className="flex gap-[8px] md:gap-[12px] items-center">
            <p className="font-dm-sans font-semibold text-[10px] md:text-[16px] text-[#1b2826] tracking-[1px] md:tracking-[1.6px] uppercase text-right leading-[14px] md:leading-[24px]">
              Powered by
            </p>
            <div className="relative w-[40px] md:w-[57px] h-[12px] md:h-[18px]">
              <Image src={imgUnion} alt="Beacon" fill className="object-contain" unoptimized />
            </div>
          </div>
        </header>
      </FadeUp>

      {/* Main Content */}
      <main className="w-full flex flex-col gap-[60px] md:gap-[120px] items-center pt-[24px] md:pt-[32px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Market Insights Section */}
        <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-[40px] md:gap-[80px] px-[24px] md:px-[64px]">
          <div className="flex flex-col gap-[16px] md:gap-[24px] text-[#2b2b2b]">
            <FadeUp>
              <p className="font-geist font-normal text-[12px] md:text-[14px] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
                Market Insights
              </p>
            </FadeUp>
            <AnimatedHeading className="font-gilda text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]">
              Curating exceptional real estate
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>experiences through data and design.
            </AnimatedHeading>
          </div>
          <div className="flex flex-col md:flex-row gap-[32px] md:gap-[30px]">
            <StatCard
              value="998,820+"
              label="Total Views (Last 30 Days)"
              badge="20x industry average"
              index={0}
            />
            <StatCard
              value="10"
              label="Active Listings"
              badge="Comprehensive portfolios"
              index={1}
            />
            <StatCard
              value="42"
              label="Avg Days on Market"
              badge="35% faster"
              index={2}
            />
          </div>
        </section>

        {/* Full Transparency Section - FULL WIDTH */}
        <section className="w-full bg-[#2b2b2b] flex justify-center py-[60px] md:py-[128px]">
          <div className="w-full max-w-[1600px] flex flex-col lg:flex-row gap-[40px] md:gap-[64px] px-[24px] md:px-[64px]">
            {/* Map Section */}
            <ScaleReveal className="flex-1 relative min-h-[300px] md:min-h-[672px]">
              <div className="relative w-full h-[300px] md:h-[672px] rounded-[8px] overflow-hidden">
                <Image src={imgRectangle2} alt="Map" fill className="object-cover" unoptimized />
                
                {/* Map Markers */}
                {listings.map((listing) => (
                  <MapMarker
                    key={listing.id}
                    isActive={selectedListing === listing.id}
                    position={listing.markerPosition}
                  />
                ))}
                
                {/* Home icon button */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-black rounded-full flex items-center justify-center shadow-lg z-30">
                  <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L8 1.33333L14 6V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V6Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 14.6667V8H10V14.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </ScaleReveal>

            {/* Activity Feed */}
            <FadeUp className="w-full lg:w-[632px] flex flex-col gap-[24px] md:gap-[30px] relative" delay={0.3}>
              <div className="flex flex-col gap-[16px] md:gap-[30px] w-full lg:w-[554px]">
                <h2 className="font-gilda text-[36px] md:text-[64px] text-white leading-[40px] md:leading-[64px]">Full Transparency</h2>
                <p className="font-geist font-normal text-[12px] md:text-[14px] text-white tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
                  Real-time view of our team&apos;s activity across all listings
                </p>
                <div className="w-[60px] md:w-[100px] h-px bg-white" />
              </div>
              <div className="flex flex-col gap-[8px] md:gap-[12px]">
                {listings.map((listing) => (
                  <ActivityCard
                    key={listing.id}
                    image={listing.image}
                    title={listing.title}
                    time={listing.time}
                    isSelected={selectedListing === listing.id}
                    onClick={() => setSelectedListing(listing.id)}
                  />
                ))}
              </div>
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[109px] bg-gradient-to-t from-[#2b2b2b] to-transparent pointer-events-none" />
            </FadeUp>
          </div>
        </section>

        {/* Performance Section */}
        <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-[40px] md:gap-[64px] px-[24px] md:px-[64px]">
          <div className="flex flex-col gap-[24px] md:gap-[41px] items-center px-0 md:px-[130px] text-[#2b2b2b] text-center">
            <FadeUp>
              <p className="font-geist font-normal text-[12px] md:text-[14px] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
                Performance
              </p>
            </FadeUp>
            <AnimatedHeading className="font-gilda text-[32px] md:text-[64px] leading-[40px] md:leading-[64px] w-full md:w-[932px]">
              Data-driven campaigns
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>delivering measurable results.
            </AnimatedHeading>
          </div>

          {/* Performance Stats Grid */}
          <div className="grid grid-cols-2 md:flex border border-gray-100">
            <PerformanceStat label="Total Reach" value="2.4M+" badge="All platforms" index={0} />
            <PerformanceStat label="Engagements" value="231K" badge="Interactions" index={1} />
            <PerformanceStat label="Video Views" value="1.8M" badge="All content" index={2} />
            <PerformanceStat label="Campaigns" value="47" badge="This month" index={3} />
          </div>

          {/* Social Platform Stats */}
          <div className="grid grid-cols-2 md:flex gap-[12px] md:gap-[30px]">
            <SocialPlatformCard
              icon={
                <div className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px]">
                  <Image src={imgFrame2147224460} alt="Facebook" fill className="object-contain" unoptimized />
                </div>
              }
              name="Facebook"
              value="850K"
              index={0}
            />
            <SocialPlatformCard
              icon={
                <div className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px] bg-[#ff850f] rounded-[5px] overflow-hidden">
                  <Image src={imgInstagramLogo20162} alt="Instagram" fill className="object-cover" unoptimized />
                </div>
              }
              name="Instagram"
              value="720K"
              index={1}
            />
            <SocialPlatformCard
              icon={
                <div className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px]">
                  <Image src={imgFrame2147224461} alt="TikTok" fill className="object-contain" unoptimized />
                </div>
              }
              name="TikTok"
              value="580K"
              index={2}
            />
            <SocialPlatformCard
              icon={
                <div className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px] bg-[#d72228] rounded-[5px] overflow-hidden">
                  <Image src={imgFrame} alt="YouTube" fill className="object-contain" unoptimized />
                </div>
              }
              name="Youtube"
              value="250K"
              index={3}
            />
          </div>
        </section>

        {/* Recent Success Stories */}
        <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-[40px] md:gap-[120px] px-[24px] md:px-[64px]">
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-[#2b2b2b] text-center">
            <FadeUp>
              <p className="font-geist font-normal text-[12px] md:text-[14px] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
                Recent Success Stories
              </p>
            </FadeUp>
            <AnimatedHeading className="font-gilda text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] w-full md:w-[855px]">
              Each listing backed by comprehensive marketing portfolios
            </AnimatedHeading>
          </div>

          {/* Property Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-[40px] md:gap-x-[30px] md:gap-y-[68px] w-full">
            <PropertyCard
              image={img112SparklingWaterCourt}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="Generated 99.8K views"
              index={0}
            />
            <PropertyCard
              image={img112SparklingWaterCourt1}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="Full price offer in 18 days"
              index={1}
            />
            <PropertyCard
              image={img112SparklingWaterCourt}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="156K views generated"
              index={2}
            />
            <PropertyCard
              image={img112SparklingWaterCourt}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="Generated 99.8K views"
              index={3}
            />
            <PropertyCard
              image={img112SparklingWaterCourt1}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="Full price offer in 18 days"
              index={4}
            />
            <PropertyCard
              image={img112SparklingWaterCourt}
              price="$4,250,000"
              address="112 Sparkling Water Court"
              location="Scottsdale, AZ"
              badge="156K views generated"
              index={5}
            />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full bg-[#2b2b2b] flex flex-col gap-[40px] md:gap-[64px] py-[60px] md:py-[128px] overflow-hidden">
          {/* Text Content */}
          <div className="w-full max-w-[1440px] mx-auto px-[24px] md:px-[64px] flex flex-col gap-[20px] md:gap-[32px]">
            <FadeUp>
              <p className="font-geist font-normal text-[10px] md:text-[12px] text-[#f4f1ea] tracking-[2px] md:tracking-[3.6px] uppercase leading-[14px] md:leading-[16px]">
                AI Analysis of Client Reviews
              </p>
            </FadeUp>
            <AnimatedHeading className="font-gilda text-[22px] md:text-[32px] text-[#f4f1ea] leading-[32px] md:leading-[48px] max-w-[992px]">
              Based on 47 verified reviews across Google and Zillow, Shannon consistently receives praise for her sophisticated marketing approach, transparent communication through Beacon reports, and ability to generate significantly higher visibility than competing agents. Average rating: 4.9/5.0
            </AnimatedHeading>
          </div>

          {/* Infinite Scrolling Review Cards */}
          <InfiniteCarousel />
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-[40px] md:gap-[70px] items-center px-[24px] md:px-[64px]">
          <div className="flex flex-col gap-[24px] md:gap-[41px] items-center text-[#2b2b2b] text-center">
            <FadeUp>
              <p className="font-geist font-normal text-[12px] md:text-[14px] tracking-[1px] uppercase leading-[16px] md:leading-[20px]">
                Ready for results like these?
              </p>
            </FadeUp>
            <AnimatedHeading className="font-gilda text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] w-full md:w-[932px]">
              Experience marketing that&apos;s transparent, data-driven, and gets your home in front of serious buyers. Every campaign tracked. Every view documented. Every effort proven.
            </AnimatedHeading>
          </div>
          <FadeUp>
            <button className="bg-[#2b2b2b] w-full md:w-[307px] h-[56px] md:h-[62px] flex items-center justify-center px-[24px] md:px-[27px] py-[18px] md:py-[21px] hover:bg-[#3b3b3b] transition-colors group">
              <p className="font-geist font-medium text-[13px] md:text-[14px] text-white tracking-[1px] uppercase text-center leading-[20px] group-hover:tracking-[2px] transition-all duration-300">
                Let&apos;s Make Your Home Shine
              </p>
            </button>
          </FadeUp>
        </section>
      </main>

      {/* Footer */}
      <FadeUp>
        <footer className="w-full max-w-[1052px] mx-auto flex flex-col gap-[16px] md:gap-[22px] items-center py-[40px] md:py-[64px] px-[24px]">
          <div className="relative w-[80px] md:w-[118px] h-[52px] md:h-[78px]">
            <Image src={imgQvrn6Gdeq84Zgkw0Rlji1} alt="Logo" fill className="object-contain" unoptimized />
          </div>
          <p className="font-geist font-normal text-[11px] md:text-[14px] text-[#2b2b2b] tracking-[1px] uppercase text-center leading-[16px] md:leading-[20px]">
            All rights reserved. Gillette Group
          </p>
        </footer>
      </FadeUp>
    </div>
  );
}
