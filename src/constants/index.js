import { userimg } from "../utils/utils";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];
export const footerLinks = [
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Careers", path: "/careers" },
  { name: "FAQs", path: "/faqs" },
];
export const extralinks = [
  { name: "Community", path: "/community" },
  { name: "Blog", path: "/blog" },
  { name: "Events", path: "/events" },
];

export const reviews = [
  {
    id: 1,
    name: "Bardan Gurung",
    pic: userimg,
    rating: 5,
    date: "2 days ago",
    content:
      "This product exceeded my expectations! The quality is superb and it works exactly as described. Highly recommend it to everyone.",
  },
  {
    id: 2,
    name: "Suhana Shrestha",
    pic: userimg,
    rating: 4,
    date: "1 week ago",
    content:
      "Good product overall. It's very functional, but I wish the instructions were a bit clearer. Still, a solid purchase.",
  },
  {
    id: 3,
    name: "Ranajung Thapa",
    pic: userimg,
    rating: 5,
    date: "3 weeks ago",
    content:
      "Absolutely love it! It has made my daily routine so much easier. The design is sleek and modern, fitting perfectly with my setup.",
  },
  {
    id: 4,
    name: "Bibek Rai",
    pic: userimg,
    rating: 3,
    date: "1 month ago",
    content:
      "It's okay. It does the job, but I found a few minor issues. Nothing major, but something to consider if you're looking for perfection.",
  },
  {
    id: 5,
    name: "Ravin Thapa",
    pic: userimg,
    rating: 5,
    date: "2 months ago",
    content:
      "Fantastic! I've been using it constantly since I got it. It's durable, efficient, and a great value for the price.",
  },
];
