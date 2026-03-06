KANIYA KODES — Interactive Portfolio Website

Live Sites

https://kaniya-kodes.vercel.app

https://kaniya-kodes-git-main-kaniyakms-projects.vercel.app

https://kaniya-kodes-2rgxbxzkv-kaniyakms-projects.vercel.app

An interactive security-themed developer portfolio built with modern frontend architecture and animation systems.
The site uses cryptography and vault metaphors to create a memorable user experience where projects are "unlocked" through interactive UI patterns.

Designed to showcase full-stack engineering, UX thinking, and modern frontend performance standards.

Project Philosophy

This portfolio is designed as a product experience, not just a website.

Goals:

• demonstrate production-level frontend architecture
• showcase UX engineering decisions
• highlight interactive design patterns
• present projects through exploration mechanics

The vault metaphor reinforces:

trust

discovery

secure systems

controlled access to information

System Architecture

The application follows a component-driven architecture with modular UI sections.

High-level system design:

Browser
   │
   ▼
React Application
   │
   ├── UI Components
   │
   ├── Animation System
   │
   ├── State Management
   │
   └── Styling System
   │
   ▼
Vite Build Pipeline
   │
   ▼
Vercel Edge CDN

Key architectural goals:

maintainability

animation performance

accessibility

scalability for future features

Application Architecture Diagram
App.tsx
 │
 ├── Preloader
 │
 ├── NavbarKeys
 │
 ├── HeroVault
 │
 ├── AboutDecrypt
 │
 ├── ProjectsVault
 │     │
 │     ├── ProjectCard
 │     ├── UnlockHover
 │     ├── UnlockCode
 │     └── UnlockDrag
 │
 ├── SkillsCipher
 │
 ├── ContactAccess
 │
 └── FooterSignature

Each component is designed to be isolated and reusable, following modern React architecture practices.

Component Dependency Map
App
│
├── Layout Components
│   ├── NavbarKeys
│   └── FooterSignature
│
├── Experience Components
│   ├── Preloader
│   ├── HeroVault
│   └── AboutDecrypt
│
├── Content Systems
│   ├── ProjectsVault
│   │    └── ProjectCard
│   │         ├── UnlockHover
│   │         ├── UnlockCode
│   │         └── UnlockDrag
│   │
│   └── SkillsCipher
│
└── Interaction Systems
    └── ContactAccess

Design strategy:

top-level layout remains stable

sections load progressively

animation triggers depend on viewport visibility

Folder Architecture
src/
│
├── app
│   │
│   ├── components
│   │
│   ├── Preloader.tsx
│   ├── NavbarKeys.tsx
│   ├── HeroVault.tsx
│   ├── AboutDecrypt.tsx
│   ├── ProjectsVault.tsx
│   ├── SkillsCipher.tsx
│   ├── ContactAccess.tsx
│   └── FooterSignature.tsx
│
└── styles
    │
    ├── fonts.css
    ├── index.css
    ├── tailwind.css
    └── theme.css

Architecture principles:

component isolation

scalable folder structure

design token separation

Animation Architecture

Animations are implemented using Framer Motion.

Goals:

create smooth interactive experiences

maintain performance

support reduced motion accessibility

Animation Layers
Layer 1 — Page Initialization

Handled by:

Preloader.tsx

Features:

terminal boot simulation

session storage logic

progressive loading state

Layer 2 — Section Transitions

Triggered by viewport entry.

Example pattern:

initial → hidden
animate → visible

Used in:

HeroVault

AboutDecrypt

SkillsCipher

ProjectsVault

Layer 3 — Interaction Animations

Micro-interactions triggered by user input.

Examples:

hover elevation

glow highlights

drag interactions

unlock transitions

Layer 4 — System Animations

Application-wide effects:

scroll-based reveals

navigation transitions

loading states

Motion Performance Strategy

Performance techniques used:

• GPU-accelerated transforms
• opacity-based transitions
• minimized layout reflows
• staggered animation sequencing

These ensure smooth performance even with heavy animation usage.

UX Engineering Decisions

This portfolio intentionally prioritizes interaction design.

Vault Interaction Model

Instead of static project cards, projects are locked vault entries.

Unlock mechanics create curiosity and engagement.

Benefits:

increases time on page

encourages exploration

creates memorable UX

Progressive Discovery

Users gradually unlock deeper information.

Flow:

Landing
   ↓
Curiosity
   ↓
Interaction
   ↓
Project Exploration
   ↓
Contact
Information Hierarchy

Content is structured in this order:

Visual identity

Personal narrative

Technical projects

Skill overview

Contact opportunity

This follows common recruiter browsing behavior.

Portfolio Project System

The Projects Vault currently includes several product-style applications.

CineTrack ATL

A movie discovery platform inspired by Atlanta’s growing film industry ecosystem.

Focus areas:

UI exploration

cinematic design patterns

content discovery

Balance Blueprint

A financial dashboard emphasizing:

data visualization

budgeting UX

dashboard design systems

Music Broadcast Player

Media streaming interface featuring:

playlist management

sticky playback UI

broadcast-style layouts

Gro Glow

Wellness tracking application designed around:

habit tracking

health dashboards

clean interface design

Travel Planner

Trip management platform featuring:

itinerary timelines

travel organization

destination browsing

Accessibility Design

Accessibility was integrated into the development process.

Implemented features:

semantic HTML

keyboard navigation

ARIA attributes

reduced motion support

color contrast compliance

Goal:

Ensure usability across a wide range of users and devices.

Performance Optimization

Optimization strategies include:

• Vite optimized bundling
• session-based preloader logic
• minimized animation overhead
• responsive layout system

Future improvements may include:

route-level code splitting

asset optimization

performance monitoring

Tech Stack

Frontend

React
TypeScript
Vite

Styling

Tailwind CSS
Custom CSS tokens

Animation

Framer Motion

Icons

Lucide React

Deployment

Vercel Edge Network

Local Development

Clone repository

git clone https://github.com/YOUR_USERNAME/portfolio

Install dependencies

npm install

Run development server

npm run dev

Build production version

npm run build

Preview production build

npm run preview
Deployment Architecture

Deployment is handled through Vercel.

Pipeline:

GitHub Push
     ↓
Vercel Build
     ↓
Static Optimization
     ↓
Edge CDN Distribution

Benefits:

fast global delivery

automatic builds

preview deployments

Future System Enhancements

Potential improvements:

• CMS for project management
• analytics tracking
• project deep-dive pages
• animation performance profiling
• light/dark theme switching

Author

Kaniya Martin
Software Engineer | Frontend Developer | UI/UX Engineer

Portfolio
https://kaniya-kodes.vercel.app

GitHub
https://github.com

LinkedIn
https://linkedin.com

License

MIT License