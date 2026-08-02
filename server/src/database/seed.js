require('dotenv').config();
const mongoose = require('mongoose');
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
const bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.log(err));

const seedData = async () => {
  try {
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Admin@123', salt);
    await User.create({
      name: 'Admin',
      email: 'admin@nextgenai.com',
      password: hashedPassword,
      role: 'admin'
    });

    await Service.insertMany([
      { title: 'AI Development', slug: 'ai-development', description: 'desc', icon: 'icon' },
      { title: 'Automation', slug: 'automation', description: 'desc', icon: 'icon' },
      { title: 'Web Application', slug: 'web-application', description: 'desc', icon: 'icon' },
      { title: 'Digital Marketing', slug: 'digital-marketing', description: 'desc', icon: 'icon' },
      { title: 'Email Marketing', slug: 'email-marketing', description: 'desc', icon: 'icon' },
      { title: 'SEO', slug: 'seo', description: 'desc', icon: 'icon' },
      { title: 'Business Solutions', slug: 'business-solutions', description: 'desc', icon: 'icon' }
    ]);

    await Portfolio.insertMany([
      { name: 'Port 1', slug: 'port-1', description: 'desc 1', category: 'web' },
      { name: 'Port 2', slug: 'port-2', description: 'desc 2', category: 'ai' },
      { name: 'Port 3', slug: 'port-3', description: 'desc 3', category: 'automation' }
    ]);

    await Team.insertMany([
      { name: 'Alice', position: 'CEO' },
      { name: 'Bob', position: 'CTO' },
      { name: 'Charlie', position: 'Lead Dev' }
    ]);

    await HeroContent.create({
      heading: 'Welcome to NextGenAI',
      subHeading: 'Innovating the Future',
      description: 'We build AI and Web Solutions'
    });

    await FAQ.insertMany([
      { question: 'Q1', answer: 'A1', category: 'General', published: true },
      { question: 'Q2', answer: 'A2', category: 'General', published: true },
      { question: 'Q3', answer: 'A3', category: 'Pricing', published: true },
      { question: 'Q4', answer: 'A4', category: 'Support', published: true }
    ]);

    await Testimonial.insertMany([
      { name: 'Client 1', content: 'Great service!', rating: 5, published: true },
      { name: 'Client 2', content: 'Awesome!', rating: 5, published: true },
      { name: 'Client 3', content: 'Very good', rating: 4, published: true }
    ]);

    await Blog.insertMany([
      { title: 'Blog 1', slug: 'blog-1', content: 'Content 1', author: 'Admin' },
      { title: 'Blog 2', slug: 'blog-2', content: 'Content 2', author: 'Admin' },
      { title: 'Blog 3', slug: 'blog-3', content: 'Content 3', author: 'Admin' }
    ]);

    await PageContent.insertMany([
      { page: 'home', section: 'stats', title: 'Our Stats', content: { clients: 100 } },
      { page: 'home', section: 'process', title: 'Our Process', content: { steps: ['Step 1'] } }
    ]);

    await Career.insertMany([
      { title: 'Frontend Developer', department: 'Engineering', description: 'desc' },
      { title: 'Backend Developer', department: 'Engineering', description: 'desc' }
    ]);

    console.log('Seeding completed');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
seedData();
