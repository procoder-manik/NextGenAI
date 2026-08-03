require('dotenv').config();

const connectDatabase = require('../config/db');

const User = require('../models/User');
const Service = require('../models/Service');
const Portfolio = require('../models/Portfolio');
const Team = require('../models/Team');
const HeroContent = require('../models/HeroContent');
const FAQ = require('../models/FAQ');
const Testimonial = require('../models/Testimonial');
const Blog = require('../models/Blog');
const PageContent = require('../models/PageContent');
const Career = require('../models/Career');


const seedData = async () => {

  try {

    console.log("🧹 Clearing database...");


    await Promise.all([
      User.deleteMany(),
      Service.deleteMany(),
      Portfolio.deleteMany(),
      Team.deleteMany(),
      HeroContent.deleteMany(),
      FAQ.deleteMany(),
      Testimonial.deleteMany(),
      Blog.deleteMany(),
      PageContent.deleteMany(),
      Career.deleteMany()
    ]);


    console.log("👤 Creating admin user...");


    await User.create({
      name: "Admin",
      email: "admin@nextgenai.com",
      password: "Admin@123",
      role: "admin"
    });


    console.log("🛠 Adding services...");


    await Service.insertMany([

      {
        title: "AI Development",
        slug: "ai-development",
        description: "Custom AI solutions for modern businesses.",
        icon: "brain"
      },

      {
        title: "AI Automation",
        slug: "ai-automation",
        description: "Automate business workflows using AI.",
        icon: "automation"
      },

      {
        title: "Web Application Development",
        slug: "web-application-development",
        description: "Modern scalable web applications.",
        icon: "code"
      },

      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Grow your business online.",
        icon: "marketing"
      },

      {
        title: "Email Marketing",
        slug: "email-marketing",
        description: "Professional email campaigns.",
        icon: "email"
      },

      {
        title: "SEO Optimization",
        slug: "seo-optimization",
        description: "Improve your search rankings.",
        icon: "seo"
      },

      {
        title: "Business Solutions",
        slug: "business-solutions",
        description: "Complete digital transformation.",
        icon: "business"
      }

    ]);



    console.log("📁 Adding portfolio...");


    await Portfolio.insertMany([

      {
        name: "AI Chatbot Platform",
        slug: "ai-chatbot-platform",
        description: "AI customer support chatbot system.",
        category: "AI"
      },

      {
        name: "E-commerce Website",
        slug: "ecommerce-website",
        description: "Modern ecommerce solution.",
        category: "Web"
      },

      {
        name: "Marketing Automation",
        slug: "marketing-automation",
        description: "Automated marketing workflow.",
        category: "Automation"
      }

    ]);



    console.log("👥 Adding team...");


    await Team.insertMany([

      {
        name: "John Smith",
        position: "CEO"
      },

      {
        name: "Sarah Johnson",
        position: "CTO"
      },

      {
        name: "Michael Lee",
        position: "Lead Developer"
      }

    ]);




    console.log("🏠 Adding hero content...");


    await HeroContent.create({

      heading: "Build The Future With AI",

      subHeading: "NextGenAI Digital Solutions",

      description:
      "We create AI, automation and digital products that help businesses grow."

    });




    console.log("❓ Adding FAQs...");


    await FAQ.insertMany([

      {
        question:"What services do you provide?",
        answer:"We provide AI development, automation, web development and digital marketing services.",
        category:"General",
        published:true
      },

      {
        question:"Do you build custom AI solutions?",
        answer:"Yes, we build custom AI solutions based on business requirements.",
        category:"AI",
        published:true
      },

      {
        question:"How long does a project take?",
        answer:"Project duration depends on complexity.",
        category:"Project",
        published:true
      },

      {
        question:"Do you provide support?",
        answer:"Yes, we provide ongoing support.",
        category:"Support",
        published:true
      }

    ]);




    console.log("⭐ Adding testimonials...");


    await Testimonial.insertMany([

      {
        name:"David",
        content:"Amazing AI solution and professional team.",
        rating:5,
        published:true
      },

      {
        name:"Emma",
        content:"Very fast and reliable service.",
        rating:5,
        published:true
      },

      {
        name:"Robert",
        content:"Great experience working with NextGenAI.",
        rating:4,
        published:true
      }

    ]);




    console.log("📝 Adding blogs...");


    await Blog.insertMany([

      {
        title:"How AI is Changing Business",
        slug:"how-ai-is-changing-business",
        content:"Artificial intelligence is transforming modern businesses.",
        author:"Admin"
      },

      {
        title:"Future of Automation",
        slug:"future-of-automation",
        content:"Automation helps companies save time and money.",
        author:"Admin"
      },

      {
        title:"Why Businesses Need Websites",
        slug:"why-businesses-need-websites",
        content:"A professional website builds trust.",
        author:"Admin"
      }

    ]);




    console.log("📄 Adding page content...");


    await PageContent.insertMany([

      {
        page:"home",
        section:"stats",
        title:"Our Statistics",
        content:{
          clients:100,
          projects:50,
          experience:"5 Years"
        }
      },


      {
        page:"home",
        section:"process",
        title:"Our Process",
        content:{
          steps:[
            "Planning",
            "Development",
            "Testing",
            "Launch"
          ]
        }
      }

    ]);




    console.log("💼 Adding careers...");


    await Career.insertMany([

      {
        title:"Frontend Developer",
        department:"Engineering",
        description:"React developer needed."
      },

      {
        title:"Backend Developer",
        department:"Engineering",
        description:"Node.js developer needed."
      }

    ]);



    console.log("✅ Database seeded successfully!");

    process.exit(0);



  } catch(error){

    console.error("❌ Seed error:", error);

    process.exit(1);

  }

};





const startSeed = async()=>{

  try{

    await connectDatabase();

    await seedData();


  }catch(error){

    console.error(
      "❌ Database connection error:",
      error
    );

    process.exit(1);

  }

};


startSeed();