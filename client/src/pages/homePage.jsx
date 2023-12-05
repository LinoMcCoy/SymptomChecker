import '../styles/home.css'
import logoMedD from '../Images/logoMDv2.png'


const homePage = () => {
  return (
    
    <div className="back" >
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&family=Karla&display=swap" rel="stylesheet"></link>
      <header className="header">
        <img className="logo" src={logoMedD} width="300px" height="100px" alt="logoMD" />
        <nav className="navigation">
            <a href="#about" className="active">About</a>
            <a href="https://sdgs.un.org/es/goals" target="_blank">Other Goals</a>
            <a href="/contacts" target="_blank">Contact</a>
            <a href="/login" target="_blank">Symptom Checker</a>
        </nav>
      </header>

    <div className="mainBanner">
        <h3>Goal N°:</h3>
        <h2 className="numberGoal">3</h2>
        <div className="secondBanner">
            <p>Ensure healthy lives and promote well-being for all at all ages.</p>
        </div>
    </div>

    <div className="objective" id="about">
        <h2>What do we do?</h2>
        <p>Here at MedicDesk, our goal is to ensure that more people have access to healthcare quickly. That's
          why our website offers a preliminary diagnosis in a simple and accessible way through a set of guided
          questions to help users identify potential health issues. All of this is done through a user-friendly
          interface that stores the patient's medical data for a more accurate diagnosis. In any case, it 
          displays a likelihood-ranked list of diseases, allowing the user to decide whether to consult a doctor 
          and which specialist to see.</p>
    </div>
    

    <div className="objective2">
        <h2>Panoramic</h2>
        <p>Great strides have been made in improving peoples health in recent years. 146 out of 200 countries 
            or areas have already met or are on track to meet the SDG target on under-5 mortality. The increasing scope of
            deseases warrants the improvement of the quality of services in healthcare delivery. Financial assistance to 
            public health infrastructure and efforts for poverty alleviation are critical for effective measures against infectious disease threats.</p>

            <p>It shouldn't be sidelined, however, that COVID - 19 left a noticable impact in the health of millions both mentally and
            physically. Inadequate access to healthcare systems has made it particularley difficult to access them,
            which denotes a health threat across countries. </p>
    </div>
    <br/>
    
    <div className="challenges">
        <h2>Challenges (According to WHO)</h2>
        <p>The <b><a href="https://www.who.int/" target="_blank">World Health Organization (WHO)</a></b> is an important factor to this matter, as their list of biggest health changes for the next decade 
            demand the involvement of more than the health sector, but the government too should be aware of the increasing tension in the persuasion
            of this objective.</p>
            <br/>
    </div>


    <div className="album py-5 bg-body-tertiary">
        <div className="container">
    
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/climate-crisis-classNamees.jpg" alt="climate crisis" width="220px" height="140px"/>
                <div className="card-body"> 
                    <p><b>1. Climate crisis</b></p>
                  <p className="card-text">The world's climate crisis has major health implications, according to WHO, with air pollution alone killing an estimated seven million people annually. In addition, 
                    more than 25% of deaths from chronic respiratory disease, heart attack, lung cancer, and stroke are attributed to the same emissions responsible for global warming, 
                    WHO said. Climate change also worsens malnutrition and promotes the spread of infectious diseases, according to WHO.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/medic attendance.jpg" alt="climate crisis" width="220px" height="140px"/>
                <div className="card-body">
                    <p><b>2. Health care delivery in areas of conflict and crisis</b></p>
                  <p className="card-text">It's been registered that, in 2019, most of the disease outbreaks that required the organization's "highest level of … response occurred in countries with protracted conflicts."  
                    WHO said it recorded a total of 978 attacks against health care workers or facilities in 11 countries last year, which resulted in 193 deaths. The conflicts also forced 
                    a record number of people to leave their homes, resulting in limited health care access for tens of millions of people, WHO said.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/health-equity-framework800.jpg" alt="climate crisis" width="220px" height="140px"/>
                <div className="card-body">
                    <p><b>3. Health care equity</b></p>
                  <p className="card-text">WHO noted that there is an 18 - year difference between the life expectency between people in low - and high income countries. Between the most prevalent syntoms are
                    cancer, diabetes, and other lethal noncommunicable diseases. As we know, health is a fundamental human right, so it should be of mayor importance that everyone recives their proper medical
                    treatment to attain their full potential progressively, being flexible to their respective environment.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/telehealth-access.jpg" alt="climate crisis" width="220px" height="140px" />
                <div className="card-body">
                    <p><b>4. Access to treatments</b></p>
                  <p className="card-text">Data statistics display that one - third of the worldwide population has a limited access to medical resources such as diagnostic tools, medicines, and vaccines. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/Clinical-trial-syringe-and-vial.png" alt="climate crisis" width="220px" height="140px" />
                <div className="card-body">
                    <p><b>5. Infectious disease prevention</b></p>
                  <p className="card-text">Diseases sucha s HIV, sexually transmitted infections, viral hepatitis and other infectious diseases will kill an estimated four million people this year, accord to WHO. 
                    Vaccine-preventable diseases also are expected to kill thousands of people over the next decade. There are several different classNamees of drugs in the antiviral family, and each is used for 
                    specific kinds of viral infections. These antiviral medications are used to to treat a narrower range of organisms. Antiviral drugs are no wavailable to treat a number of STDs sush as herpes
                    and hepatitis C. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/epidemic_preparedness.jpg" alt="climate crisis" width="220px" height="140px" />
                <div className="card-body">
                    <p><b>6. Epidemic preparedness</b></p>
                  <p className="card-text">An airborne and highly infectious virus pandemic "is inevitable," WHO said, but countries around the world continue to spend more on responding to these emergencies 
                    than preparing for them. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p><a className="more" href="https://www.advisory.com/daily-briefing/2020/01/15/who-health-challenges"target="_blank">If you want to know more about the WHO challenges, you can visit their website here</a></p>
    

    
      <footer className="footer mt-auto py-3 bg-body-tertiary">
        <div className="container">
          <span className="text-body-secondary">footer content here.</span>
        </div>
      </footer>
    </div>
  )
}

export default homePage