import React, { useState } from "react";

function Homepage(props) {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-title">What is coronavirus? </div>

          <div className="header-text">
            <div className="img"></div>
            Coronaviruses are a family of viruses that can cause respiratory
            illness in humans. They are called “corona” because of crown-like
            spikes on the surface of the virus. Severe acute respiratory
            syndrome (SARS), Middle East respiratory syndrome (MERS) and the
            common cold are examples of coronaviruses that cause illness in
            humans. The new strain of coronavirus — SARS-CoV-2 — was first
            reported in Wuhan, China in December 2019. It has since spread to
            every country around the world.COVID-19 most often causes
            respiratory symptoms that can feel much like a cold, a flu, or
            pneumonia. COVID-19 may attack more than your lungs and respiratory
            system. Other parts of your body may also be affected by the
            disease.Like many other respiratory viruses, coronaviruses spread
            quickly through droplets that you project out of your mouth or nose
            when you breathe, cough, sneeze, or speak. The word corona means
            crown and refers to the appearance that coronaviruses get from the
            spike proteins sticking out of them. These spike proteins are
            important to the biology of this deadly virus which cannot be easily
            prevented.
            <h3 className="head2">How do you get COVID-19?</h3>
            SARS-CoV-2, the virus that causes COVID-19, enters your body through
            your mouth, nose or eyes (directly from the airborne droplets or
            from the transfer of the virus from your hands to your face) . It
            then travels to the back of your nasal passages and mucous membrane
            in the back of your throat. It attaches to cells there, begins to
            multiply and moves into lung tissue . From there, the virus can
            spread to other body tissues.
            <h3 className="head3">Where do coronaviruses come from?</h3>
            Coronaviruses are often found in bats, cats and camels. The viruses
            live in but dont infect the animals. Sometimes these viruses then
            spread to different animal species. The viruses may change (mutate)
            as they transfer to other species. Eventually, the virus can jump
            from animal species and begin to infect humans. In the case of
            SARS-CoV-19, the first people infected are thought to have
            contracted the virus at a food market that sold meat, fish and live
            animals.
          </div>
        </div>
      </div>

      <div className="home-body">
        <iframe className="home-body-tv"
          margin-top="100"
          width="1000"
          height="580"
          src="https://www.youtube.com/embed/HjO8IU7Hb6A"
          title="What is COVID-19"
          frameborder="0"
          allowfullscreen="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <Details />
    </>
  );
}

const data2 = [
  {
    nav: "Symptoms",
    title: "SYMPTOMS AND CAUSES",
    content: (
      <>
        <p>
          COVID-19 symptoms vary from person to person. In fact, some infected
          people don't develop any symptoms (asymptomatic). In general, people
          with COVID-19 report some of the following symptoms:{" "}
          <ul>
            <li>Fever or chills.</li>
            <li>Cough.</li>
            <li>Shortness of breath or difficulty breathing.</li>
            <li>Tiredness. </li>
            <li>Muscle or body aches.</li>
            <li>Headaches.</li>
            <li>New loss of taste or smell.</li>
            <li>Sore throat.</li>
            <li>Congestion or runny nose.</li>
            <li>Nausea or vomiting.</li>
            <li>Diarrhea.</li>
          </ul>
          Additional symptoms are possible. Symptoms may appear two to 14 days
          after exposure to the virus. Children have similar, but usually
          milder, symptoms than adults. Older adults and people who have severe
          underlying medical conditions are at higher risk of more serious
          complication from COVID-19.
        </p>
      </>
    ),
  },
  {
    nav: "Diagnosis",
    title: "DIAGNOSIS AND TESTS",
    content: (
      <>
        <h4>How is coronavirus diagnosed?</h4>
        <p>
          COVID-19 is diagnosed with a laboratory test. Your healthcare provider
          may collect a sample of your saliva or swab your nose or throat to
          send for testing.
        </p>
        <h4> When should I be tested for the coronavirus (COVID-19)?</h4>
        <p>
          Call your healthcare provider if you: Feel sick with fever, cough or
          have difficulty breathing. Have been in close contact with a person
          known or suspected to have COVID-19. Your healthcare provider will ask
          you questions about your symptoms and tell you if you need to be
          tested for COVID-19.
        </p>
      </>
    ),
  },
  {
    nav: "Treatment",
    title: "MANAGEMENT AND TREATMENT",
    content: (
      <>
        <h4>What treatments do people receive if they have COVID-19?</h4>
        <p>
          Treatments for COVID-19 vary depending on the severity of your
          symptoms. If you’re not in the hospital or don’t need supplemental
          oxygen, no specific antiviral or immunotherapy is recommended.
          Depending on the severity of your COVID symptoms, you may need:
          Supplemental oxygen (given through tubing inserted into your
          nostrils). Some people may benefit from an infusion of monoclonal
          antibodies. Antiviral medications may reduce the risk of
          hospitalization and death in certain patients with COVID-19.
          Mechanical ventilation (oxygen through a tube inserted down your
          trachea). You are given medications to keep you comfortable and sleepy
          as long as you’re receiving oxygen through a ventilator. Extra
          corporeal membrane oxygenation (ECMO). You continue to receive
          treatment while a machine pumps your blood outside your body. It takes
          over the function of your body’s lungs and heart.
        </p>
        <h4>Can vaccinated people still get COVID-19?</h4>
        <p>
          Yes, it’s possible to get COVID-19 even if you’ve been vaccinated. No
          vaccines are 100% effective. In fact, breakthrough cases (when someone
          tests positive more than two weeks after they're fully vaccinated) are
          expected, especially as the SARS-CoV-2 virus mutates. The vaccines
          significantly reduce — but don’t eliminate — your risk of infection.
          The risk of a severe illness or death from a breakthrough infection is
          very low.
        </p>
      </>
    ),
  },
  {
    nav: "Prevention",
    title: "PREVENTION",
    content: (
      <>
        <h4>How can I keep from getting COVID-19?</h4>
        <p>
          The best defense to prevent getting COVID-19 is to get vaccinated. You
          should also follow the same steps you would take to prevent getting
          other viruses, such as the common cold or the flu. Wash your hands for
          at least 20 seconds — especially before eating and preparing food,
          after using the bathroom, after wiping your nose, and after coming in
          contact with someone who has a cold. Wear a multilayered cloth
          facemask that fits snugly on your face and covers your mouth, nose and
          chin as recommended by the CDC. Avoid touching your eyes, nose and
          mouth to prevent the spread of viruses from your hands. Cover your
          mouth and nose with a tissue when sneezing and coughing or sneeze and
          cough into your sleeve. Throw the tissue in the trash. Wash your hands
          afterward. Never cough or sneeze into your hands! Avoid close contact
          (within 6 feet) with those who have coughs, colds or are sick. Stay
          home if you’re sick. If you’re prone to sickness or have a weakened
          immune system, stay away from large crowds of people. Follow the
          directions of your healthcare authorities, especially during
          outbreaks.
        </p>
      </>
    ),
  },
];

function Details(params) {
  const [content, setContent] = useState(data2[0]);

  function handleTabChange(tab) {
    setContent(data2[data2.findIndex((data) => data.nav == tab)]);
  }

  return (
    <div className="home-details">
      <div className="sub-nav">
        {data2.map((cont) => (
          <div
            key={cont.nav}
            className="item"
            onClick={() => handleTabChange(cont.nav)}
          >
            {cont.nav}
          </div>
        ))}
      </div>
      <div className="home-details-content">
        <div className="home-details-title">{content.title}</div>
        <div className="home-details-info">{content.content}</div>
      </div>
    </div>
  );
}

export default Homepage;
