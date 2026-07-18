import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import Cloudinary from '@/components/technologies/Cloudinary';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import GraphQL from '@/components/technologies/GraphQL';
import GSAP from '@/components/technologies/GSAP';
import Hostinger from '@/components/technologies/Hostinger';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Lonestar academy',
    description:
      'Developed a custom institutional website for Lonestar Academy using Next.js, Node.js, Express.js, MongoDB, Cloudinary, and Hostinger VPS. Built a fully dynamic custom CMS with an Admin Dashboard that enables administrators to manage the entire website without developer intervention. Implemented features for creating and managing courses with pricing, duration, descriptions, curriculum, images, and blogs, along with a centralized enquiry management system. Developed a complete student enrollment workflow with secure document uploads (ID proofs, educational certificates, and other supporting documents), integrated online payment gateway for course enrollments, and used Cloudinary for optimized media and document storage. Deployed and configured the backend on Hostinger VPS, delivering a scalable, secure, and easy-to-manage platform.',
    image: '/project/lone.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    video:"/project/videos/lonestarrecording.mp4",
    link: 'https://www.lonestaracademy.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      // { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      {name:"Cloudinary", icon:<Cloudinary key="cloudinary"/>},
      // { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      {name:"Hostinger", icon:<Hostinger key="hostinger"/>}
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/lonestar',
    isWorking: true,
  },
   {
    title: 'Sohwais',
    description:
  'Royal-heritage traditional clothing e-commerce platform with an admin dashboard for products, orders, coupons, and enquiries',
    image: '/project/sohwais.png',
    video: '/project/videos/sohwais.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Hostinger', icon: <Hostinger key="hostinger" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      // { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'ExpressJs', icon: <ExpressJs key="express" /> },
      { name: 'NodeJs', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'GSAP', icon: <GSAP key="gsap" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
    ],
    // github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://sohwais.com/',
    details: true,
    projectDetailsPageSlug: '/projects/sohwais',
    isWorking: true,
  },
  {
    title: 'ARN Holidays (Rajasthan)',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/arn_rajasthan.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/arn_rajasthan',
    isWorking: true,
  },
  {
    title: 'ARN Holidays (Thailand)',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/project/thailand.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://thailandtourpackage.arnholidays.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Hostinger', icon: <Hostinger key="hostinger" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      // { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      // { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/ramxcodes/syncify',
    live: 'https://syncify.rocks',
    details: true,
    projectDetailsPageSlug: '/projects/arn_thailand',
    isWorking: true,
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/websitoz.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  },
 
  {
    title: 'FestX',
    description:
      "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
    image: '/project/refokus.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/fest-x',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: true,
  },
  {
    title: "Meetzy",
    description:
      'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
    image: '/project/meetzy.png',
    link: 'https://chillguy.ramx.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      // { name: 'GitHub', icon: <Github key="github" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'SocketIo', icon: <SocketIo key="socket" /> },
    ],
    github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://chillguy.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/chill-guy',
    isWorking: true,
  },
  {
    title: "Social Sphere",
    description:
      'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
    image: '/project/socialsphere.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://blog.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'NextJS', icon: <NextJs key="next" /> },
       { name: 'PostgreSQL', icon: <PostgreSQL key="postgres" /> },
       { name: 'Supabase', icon: <Supabase key="supabase" /> },
        { name: 'GraphQL', icon: <GraphQL key="graphql" /> },
         { name: 'ExpressJs', icon: <ExpressJs key="express" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      
    ],
    live: 'https://blog.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/poems-blog',
    isWorking: true,
  },
  {
    title: 'The Baby Care Services',
    description:
      'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
    image: '/project/nanny.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://intent-js.ramx.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://intent-js.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/intent-js',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
  {
    title: 'Valorant Remastered',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
    image: '/project/valorant.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
    link: 'https://valorant.ramx.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/ramxcodes/valorant-remastered',
    live: 'https://valorant.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/valorant-remastered',
    isWorking: true,
  },
  {
    title: 'That Startup',
    description:
      'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
    image: '/project/that-startup.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
    link: 'https://that-startup.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Sanity', icon: <Sanity key="sanity" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ramxcodes/that-startup',
    live: 'https://that-startup.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/that-startup',
    isWorking: true,
  },
];
