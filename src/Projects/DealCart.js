import React from 'react';

const DealCartPortfolio = () => {
  const roles = [
    'UX Strategy',
    'Sprint Planning & Facilitation',
    'User Research',
    'Rewards Experience Design',
    'Mobile App UX/UI',
    'Developer Handoff'
  ];

  const coreGaps = [
    {
      title: 'Scattered rewards journey',
      description: 'The experience was fragmented. Coins, games, referrals, and bonuses were spread across the app without a clear, unified system.'
    },
    {
      title: 'No behavioral momentum',
      description: 'The screen didn\'t guide users toward key actions like sharing, playing, saving more, or reordering. It simply existed, without nudges or motivation.'
    },
    {
      title: 'Information overload & confusion',
      description: 'Users were confused between Total Kamayi, balance, and usage breakdown, leading to low trust in the system.'
    },
    {
      title: 'Emotional disconnect',
      description: '80% of users didn\'t feel good about rewards. The design lacked a sense of progress, achievement, or delight, critical for retention and re-engagement.'
    },
    {
      title: 'Low visibility of key moments',
      description: 'Only 4% accessed their profile — where fuel savings and other motivators were displayed.'
    },
    {
      title: 'Unscalable design system',
      description: 'The existing design couldn\'t support future reward types, tiers, promos, or quests without breaking the experience.'
    }
  ];

  const keyOutcomes = [
    'Increase return visits through visible progress, reminders, and rewards that feel earned',
    'Drive repeat orders by linking coins and promos to real shopping actions',
    'Make savings feel satisfying with better visibility, emotional feedback, and history',
    'Encourage social sharing through referral-based incentives and group triggers',
    'Create a scalable system that supports games, quests, vouchers, and new reward types'
  ];

  const researchMethods = [
    'Sprint-driven expert interviews',
    'In-app behavior analysis',
    'Team-generated HMWs (How Might We questions)',
    'User sentiment breakdowns'
  ];

  const userFindings = [
    {
      category: 'Users were confused and disconnected',
      stats: [
        '80% of users said the rewards screen didn\'t feel good or exciting',
        '75% couldn\'t track how or where their DC Coins were earned or spent',
        '60% were unclear about their Total Kamayi vs usable balance'
      ],
      quote: '"I\'d rather use WhatsApp because at least I can talk to someone directly."'
    },
    {
      category: 'They wanted clarity and control',
      points: [
        'Users wanted a clear breakdown of earnings, redemptions, and expiry',
        'Many expected reward history and transaction logs in one place',
        'Limits and rules about coin usage weren\'t visible — only discovered after trying to redeem'
      ]
    },
    {
      category: 'Emotion and motivation were missing',
      points: [
        'The existing experience lacked any sense of progress, reward feedback, or delight',
        'Only 4% of users visited their profile to see savings, missing out on emotional reinforcement'
      ]
    },
    {
      category: 'When rewards worked, they worked well',
      points: [
        'Users who played a game and used their coins were 6% more likely to retain',
        'Winners of Spin the Wheel were 40% more likely to place an order',
        'Cricket game winners had a 31% higher conversion rate than non-players'
      ]
    }
  ];

  const problemStats = [
    { number: '80%', label: 'Users didn\'t feel good about rewards' },
    { number: '4%', label: 'Only accessed their profile' },
    { number: '75%', label: 'Couldn\'t track DC Coins' },
    { number: '60%', label: 'Unclear about Total Kamayi vs balance' }
  ];

  const successMetrics = [
    { number: '6%', label: 'Higher retention for game players who used coins' },
    { number: '40%', label: 'More likely to order after Spin the Wheel wins' },
    { number: '31%', label: 'Higher conversion for cricket game winners' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-2xl font-semibold mb-4 opacity-90">Arz MA.</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              DealCart – Rethinking Rewards for Pakistan's Price-Conscious Shoppers
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              DealCart is a mobile-first, social commerce platform that enables group buying for grocery essentials in Pakistan. 
              While the platform gained traction quickly, the rewards system lacked clarity and structure — leaving both engagement and retention untapped.
            </p>
            
            <div className="mb-8">
              <div className="text-sm font-medium mb-4 opacity-80">ROLES:</div>
              <div className="flex flex-wrap justify-center gap-3">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white -mt-10 relative z-10 rounded-t-3xl">
        {/* Problems Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Gaps We Couldn't Ignore
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Despite DealCart's strong product-market fit, the rewards experience was disconnected, 
                underwhelming, and failed to influence user behavior at scale.
              </p>
              <div className="text-lg font-medium text-gray-800 mb-12">
                The core gaps:
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {coreGaps.map((gap, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {gap.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {gap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {problemStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                These insights pointed to one clear need: <span className="font-semibold">not just a visual redesign, but a strategic rebuild of the rewards ecosystem</span>, 
                one that's structured, habit-forming, and growth-aligned.
              </p>
            </div>
          </div>
        </section>

        {/* Current State Images */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Current Rewards Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                [IMAGE: Rewards Dashboard - Current State]
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                [IMAGE: Coins History Screen - Current State]
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                [IMAGE: Reward Baazar - Current State]
              </div>
            </div>
          </div>
        </section>

        {/* Design Goals */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designing with Intention
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We weren't just improving how rewards looked — we were rethinking their purpose in the product journey. 
                The goal was to make rewards part of a habit, not a one-time feature. That meant building a system that nudges behavior, celebrates savings, and keeps users coming back.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
                We focused on three key outcomes:
              </h3>
              <div className="space-y-4">
                {keyOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Learned from Real People
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To redesign the rewards experience meaningfully, we needed to understand how users perceived it — 
                what excited them, what confused them, and what made them come back.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
                We gathered insights through:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {researchMethods.map((method, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-base font-medium text-gray-900">{method}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Findings */}
            <div className="space-y-12">
              {userFindings.map((finding, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                    {finding.category}
                  </h3>
                  
                  {finding.stats && (
                    <div className="space-y-3 mb-6">
                      {finding.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{stat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {finding.points && (
                    <div className="space-y-3">
                      {finding.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {finding.quote && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                      <p className="text-blue-800 italic font-medium">{finding.quote}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional User Insights */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  They wanted clarity and control
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Users wanted a clear breakdown of earnings, redemptions, and expiry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Many expected reward history and transaction logs in one place</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Limits and rules about coin usage weren't visible — only discovered after trying to redeem</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Emotion and motivation were missing
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">The existing experience lacked any sense of progress, reward feedback, or delight</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Only 4% of users visited their profile to see savings, missing out on emotional reinforcement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Turning Research into Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Once we understood the recurring pain points, we translated those into clear UX priorities. 
                Each feature was grounded in either trust-building, friction-reduction, or value-clarity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[300px] flex items-center justify-center">
              [IMAGE: User Pain Point to UX Response Mapping Table]
            </div>
          </div>
        </section>

        {/* User Flows & Wireframes */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                User Flows & Wireframes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on our insights, we mapped out user journeys for the rewards system. 
                Our goal was to reduce friction, set clearer expectations, and simplify the entire interaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                [IMAGE: User Flow Diagrams]
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                [IMAGE: Wireframe Sketches]
              </div>
            </div>
          </div>
        </section>

        {/* Final UI Design */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Final UI & Visual System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The UI was built with components tied to a flexible, scalable design system. 
                Accessibility and tap targets were considered throughout, with mobile as the primary use case.
              </p>
            </div>

            {/* Redesigned Screens */}
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
                  Rewards Dashboard - Redesigned
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[500px] flex items-center justify-center">
                    [IMAGE: New Rewards Dashboard with Tier System]
                  </div>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[500px] flex items-center justify-center">
                    [IMAGE: Coins History with Clear Breakdown]
                  </div>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[500px] flex items-center justify-center">
                    [IMAGE: Reward Baazar with Better Organization]
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
                  Gamification & Engagement
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                    [IMAGE: Games Section - Cricket, Surfers, Tiki Monkeys]
                  </div>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                    [IMAGE: Spin & Win Feature]
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
                  Challenges & Social Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                    [IMAGE: Quests & Challenges Interface]
                  </div>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[400px] flex items-center justify-center">
                    [IMAGE: Referrals & Social Sharing]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-teal-600 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Impact & Reflection
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                The biggest success of the redesigned rewards system wasn't just launching a working platform — 
                it was creating a more confident and structured experience that drives meaningful user behavior and retention.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl font-bold mb-4">{metric.number}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                The platform quickly built trust through clear reward mechanics, progress tracking, and engaging gamification elements.
              </p>
            </div>
          </div>
        </section>

        {/* Next Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Next Case Studies
            </h2>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-xl p-8 text-center text-gray-600 italic min-h-[200px] flex items-center justify-center">
              [IMAGE: Links to Other Case Studies]
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Have a bold idea?</h3>
            <p className="text-xl mb-8 opacity-90">Let's bring it to life.</p>
            <div className="space-y-4">
              <p className="text-lg font-medium">Start the conversation</p>
              <p className="text-2xl text-blue-400 font-medium">hello@mohsinamin.com</p>
              <div className="flex justify-center space-x-8 mt-8 text-gray-400">
                <span className="font-bold">MA.</span>
                <span>Instagram</span>
                <span>Behance</span>
                <span>Dribbble</span>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DealCartPortfolio;