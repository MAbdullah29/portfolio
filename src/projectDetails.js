import arzepak from './assets/arzepak-details.png';
import ping from './assets/ping-details.png';
import humaan from './assets/humain-ai-details.png';
import dealcart from './assets/dealcart-details.png';
import favvo from './assets/fayvo-thumb.png';

const projects = [
    {
      id: 'arzepak',
      title: 'ARZEPAK',
      subtitle: 'UX STRATEGY | DESIGN SYSTEM | INTERACTION DESIGN',
      category: 'REAL ESTATE | PROPTECH | RENTAL & LEASING',
      year: '2024',
      image : arzepak,
      slug: 'arzepak',
      fullCase: {
        tagline: "Don't settle for less - Make a smart move",
        description: "Arzepak is a property buying and renting platform designed to bridge the trust gap between real estate agents and customers. It simplifies listings, makes agent communication clearer, and empowers users to make informed decisions.",
        roles: ["UX Strategy", "Flows & Wireframes", "Web App UX/UI", "Visual Design", "User Testing"],
        challenge: {
          title: "The Challenge",
          content: "The real estate experience in the local market is broken by misinformation, unclear listings, and a lack of trust between buyers, renters, and agents. Most property platforms offer either outdated data or poor user experiences that create confusion rather than clarity. For agents, listing properties is often a manual or disconnected process, leading to inconsistent visibility and high effort with low reward. For consumers, the experience is worse - scattered listings, no verified details, and little guidance on how to contact or trust an agent.",
          solution: "Arzepak set out to create a unified platform that makes the real estate journey clear, reliable, and action-driven for both agents and end users."
        },
        businessGoals: {
          title: "Business Goals",
          description: "Our product goals were centered around enhancing trust, transparency, and efficiency for both property seekers and agents. We wanted to replace cluttered property experiences with clear, guided, and trustworthy interactions.",
          goals: [
            "A seamless user journey from property discovery to inquiry",
            "A transparent agent experience with structured listing and pricing plans",
            "Up-to-date listings with verified information to build user confidence",
            "Increased lead quality for agents by improving visibility and access"
          ]
        },
        research: {
          title: "Gaps in the Real Estate Experience",
          description: "Before starting design, we reviewed popular real estate platforms in the region including Zameen.com, Graana and OLX to understand where they failed users. The research revealed a consistent pattern of outdated listings, vague pricing, and lack of agent accountability.",
          gaps: [
            {
              issue: "Outdated property data",
              detail: "Many listings were inactive or duplicate"
            },
            {
              issue: "No agent verification", 
              detail: "Users couldn't trust who they were contacting"
            },
            {
              issue: "Cluttered UI/UX",
              detail: "Overwhelming filters and poor mobile usability"
            },
            {
              issue: "No clear inquiry system",
              detail: "Users dropped off before contacting agents"
            }
          ]
        },
        userInsights: {
          title: "Insights That Shaped Our Direction",
          description: "We interviewed both property seekers and real estate agents to better understand their frustrations with existing platforms and offline systems. Their feedback revealed a disconnect between what users expected and what the market was delivering.",
          consumers: [
            "I found multiple listings for the same house and no idea which one was real.",
            "There's no way to know if an agent is legit or just wasting my time.",
            "Most listings don't have updated info or clear pricing.",
            "I gave up contacting people because it felt like no one was serious."
          ],
          agents: [
            "We don't get good leads, people just browse and leave.",
            "It's hard to manage listings across platforms. Nothing is in one place.",
            "We want control over how we present our properties.",
            "We often deal with unqualified leads and ghost inquiries."
          ]
        },
        solutions: {
          title: "From Pain Points to Product Direction",
          description: "With user insights in hand, we translated pain points into core experience goals. Each UX and feature decision aimed to solve a real frustration, whether it was about trust, clarity, or efficiency.",
          stat: "80% of the users are not able to find property on other platforms. Extra charges on listing properties and no visibility on investment.",
          consumerSolutions: [
            {
              pain: "I can't tell which listing is real",
              solution: "Verified property badges and agent profiles"
            },
            {
              pain: "I waste time contacting dead leads",
              solution: "Auto updated listings with expiry rules"
            },
            {
              pain: "I don't know how to trust the agent",
              solution: "Ratings, profile history, and response performance displayed"
            }
          ],
          agentSolutions: [
            {
              pain: "I have no way to build credibility",
              solution: "Profile with completed jobs, ratings, and skill tags"
            },
            {
              pain: "I get low quality or no leads",
              solution: "Inquiry form with user contact verification"
            },
            {
              pain: "I can't manage my listings properly",
              solution: "Dashboard with bulk upload, performance analytics"
            },
            {
              pain: "Many hidden charges and no leads conversion",
              solution: "No hidden fees, transparent pricing, and ROI tracking"
            }
          ]
        },
        features: [
          {
            title: "Redefining Property Search",
            description: "Simplified filters, real-time results, and verified listings designed to reduce frustration and help users find the right property faster.",
            images: ["[SEARCH_INTERFACE_IMAGE]", "[PROPERTY_LISTINGS_IMAGE]"]
          },
          {
            title: "Responsive by Design",
            description: "The platform was designed to be fully responsive, ensuring a consistent, intuitive experience across devices. Key actions like search, browse, and contact remain effortless even on smaller screens.",
            images: ["[MOBILE_SEARCH_IMAGE]", "[RESPONSIVE_FILTERS_IMAGE]"]
          },
          {
            title: "Clarity at the Point of Decision", 
            description: "The property detail screen was designed to reduce uncertainty and guide user action. We focused on clear visuals, structured information, and quick access to agent contact.",
            images: ["[PROPERTY_DETAIL_IMAGE]", "[AGENT_PROFILE_IMAGE]"]
          },
          {
            title: "Simple Signup, Strong Start",
            description: "Simple, role-based signup flow designed to reduce friction and help users get started quickly, whether they're buyers, agents, or investors.",
            images: ["[SIGNUP_FLOW_IMAGE]", "[AGENCY_SETUP_IMAGE]"]
          },
          {
            title: "Empowering Agents to Work Smarter",
            description: "A streamlined agent experience built for easy listing management, clear plans, and actionable performance insights.",
            images: ["[AGENT_DASHBOARD_IMAGE]", "[ANALYTICS_IMAGE]", "[PRICING_PLANS_IMAGE]"]
          },
          {
            title: "Listing Made Effortless",
            description: "We simplified the property upload into clear, guided steps helping agents list faster, with better accuracy and zero confusion.",
            images: ["[LISTING_STEP1_IMAGE]", "[LISTING_STEP2_IMAGE]", "[LISTING_STEP3_IMAGE]"]
          }
        ],
        testimonial: {
          quote: "Mohsin and his team managed to turn the complex requirements into a beautiful and intuitive platform, drastically lowering the threshold and flattening the learning curve for the new users. The look and feel of the Arzepak now fully matches the innovative company goals and user's needs.",
          author: "Naumana Niazi",
          title: "CEO ARZEPAK"
        }
      }
    },
    {
      id: 'ping',
      slug: 'ping',
      title: 'PING',
      subtitle: 'SERVICE DESIGN & PRODUCT STRATEGY | MOBILE & APP',
      category: 'HOME SERVICES | CONSUMER TECH | CONSUMER GOODS',
      year: '2024',
      image : ping,

    },
    {
      id: 'humaan',
      slug: 'humaan-ai',
      title: 'HUMAAN-AI',
      subtitle: 'MULTI-ROLE UX | DESIGN SYSTEM | SEAMLESS EXPERIENCE DESIGN',
      category: 'ARTIFICIAL INTELLIGENCE | ENTERPRISE | SAAS',
      year: '2024',
      image : humaan,

    },
    {
      id: 'dealcart',
      slug : 'dealcart',
      title: 'DEALCART',
      subtitle: 'UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH',
      category: 'E-COMMERCE | RETAIL | CONSUMER GOODS',
      year: '2023',
      image : dealcart,

    },
    {
      id: 'favvo',
      slug: 'favvo',
      title: 'FAVVO',
      subtitle: 'USER ENGAGEMENT & RETENTION | SOCIAL UX',
      category: 'SOCIAL MEDIA | LIFESTYLE & ENTERTAINMENT',
      year: '2023',
      image : favvo,
    },
  ];
  export default projects;