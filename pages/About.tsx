import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-red-600 font-oswald uppercase tracking-[0.2em] mb-4">About</h2>
        <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter mb-8">
          Meet Our Founder
        </h1>
        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
          <p>
            Nia Harper has always had a passion for social and economic justice. She has used this passion to direct her
            career choices. As an economic developer, she has 15 years of policy, workforce and strategic business
            development experience combined, Nia has worked in leadership roles that call on her knowledge in
            entrepreneurship, project management and strategic partnerships in both the private and public sectors,
            including the federal government, prominent law firms, university systems, and large non-profit
            organizations all aimed at improving underserved communities in wealth creation and maintenance.
          </p>
          <p>
            Ms. Harper is also an entrepreneur whose consulting services focus on solutions for community financial
            self-sufficiency and the successful scaling of Black family owned businesses (New Paradigm Workforce
            Solutions, LLC) and Black woman-owned small businesses for job creation; she understands the positive impact
            that the creation of viable wealth building options can have on empowering a community.
          </p>
          <p>
            The culmination of her experience, talents, education, and her passion led Nia to join FUSE Corps and
            support Invest Atlanta in creating programs and policies that influence wealth creation in Black and Brown
            households, businesses, and communities in the Southwest Atlanta area where she resides. Recently, Nia
            served as a Sustainability Ambassador for the City of Atlanta; where she learned and provided recommendations
            for long term strategic initiatives with inclusive and eco-friendly solutions to citywide challenges.
          </p>
          <p>
            Nia is a founding member of Sage Futures Community Development Corporation that has a mission to lead
            development using sustainability to rebuild, innovate, and reskill for a balanced lifestyle in Black
            communities. Nia is also a proud member of the illustrious Zeta Phi Beta Sorority, Incorporated. As a mother
            of three magnificent daughters, it is important to note that of all the titles held, Nia wears the title of
            Mother most proudly and is constantly motivated to make the world a better place for the generations that
            follow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

