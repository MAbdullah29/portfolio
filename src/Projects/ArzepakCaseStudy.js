import arzePak01 from '../assets/arzepak-01.png';
import arzePak02 from '../assets/arzepak-02.png';
import arzePak03 from '../assets/arzepak-03.png';
import arzePak04 from '../assets/arzepak-04.png';
const ArzepakCaseStudy = () => {
  return (
    <div className="space-y-16 px-6 py-12 max-w-7xl mx-auto text-gray-800">

      {/* Hero Section */}
      <section className="text-center">
        <img src={arzePak01} alt="Hero" className="w-full mb-6" />
        <h1 className="text-3xl font-bold mb-2">Arzepak – Bringing Transparency to Pakistan’s Rental Market</h1>
        <p className="text-sm text-gray-600">UX/UI | Product Strategy | Research | MVP Launch</p>
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-sm mb-2">Pakistan’s rental market suffers from poor user experience, lack of trust, and no centralized platform. Arzepak brings a transparent and renter-centric approach to this broken experience.</p>
        <h3 className="text-md font-semibold mt-6 mb-2">My Role</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>End-to-end UX/UI design</li>
          <li>Research, strategy, wireframes, and design system</li>
          <li>Responsive MVP build in 8 weeks</li>
        </ul>
        <div className="flex gap-4 mt-6">
          <img src={arzePak02} alt="overview1" className="w-1/3 rounded" />
          <img src={arzePak03} alt="overview2" className="w-1/3 rounded" />
          <img src={arzePak04} alt="overview3" className="w-1/3 rounded" />
        </div>
      </section>

      {/* Process */}
      <section>
        <h2 className="text-xl font-semibold mb-4">The Process</h2>
        <p className="text-sm">A design process rooted in deep user empathy, stakeholder collaboration, and iterative prototyping.</p>
      </section>

      {/* Steps */}
      {[
        { title: "USER INTERVIEWS", img: "user-interviews.png" },
        { title: "USER JOURNEY MAPPING", img: "user-journey.png" },
        { title: "LOW-FI WIREFRAMES", img: "wireframes.png" },
        { title: "HI-FI DESIGNS", imgs: [
            "design-1.png", "design-2.png", "design-3.png", "design-4.png",
            "design-5.png", "design-6.png", "design-7.png", "design-8.png"
          ]
        }
      ].map((step, i) => (
        <section key={i}>
          <h2 className="text-lg font-bold mb-2">STEP {i + 1}: {step.title}</h2>
          {step.img && <img src={step.img} alt={step.title} className="w-full" />}
          {step.imgs && (
            <div className="space-y-6">
              {step.imgs.map((img, idx) => (
                <img key={idx} src={img} alt={`${step.title} ${idx + 1}`} className="w-full" />
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Impact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">The Impact</h2>
        <p className="text-sm mb-4">We launched a working MVP in 8 weeks that helped users confidently search and schedule property visits, with improved UX flows, analytics dashboard, and verified listings.</p>
        <img src="impact.png" alt="Impact" className="w-full" />
      </section>

      {/* Footer Gallery */}
      <footer className="grid grid-cols-3 gap-4 mt-12">
        <img src="gallery-1.png" alt="Gallery 1" className="rounded" />
        <img src="gallery-2.png" alt="Gallery 2" className="rounded" />
        <img src="gallery-3.png" alt="Gallery 3" className="rounded" />
      </footer>

    </div>
  );
};

export default ArzepakCaseStudy;
