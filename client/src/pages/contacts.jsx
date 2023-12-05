import React from 'react'
import logoMedD from '../Images/logoMDv2.png'
import '../styles/home.css'


const contacts = () => {
  return (
    <div className='back'>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&family=Karla&display=swap" rel="stylesheet"></link>
      <header className="header"></header>
       <header className="header">
       <img className="logo" src={logoMedD} width="300px" height="100px" alt="logoMD" />
        <nav className="navigation">
            <a href="#about" className="active">About</a>
            <a href="https://sdgs.un.org/es/goals" target="_blank">Other Goals</a>
            <a href="/contacts" target="_blank">Contact</a>
            <a href="/login" target="_blank">Symptom Checker</a>
        </nav>
    </header>
    <br/>
    <br/>
    <br/>
    <div className="contactCard">
      <h2>Contacts</h2>
      <p>Here are some specialists that might be able to help depending on what you are looking for.
        They are well known and recognized by their achievements in the medical world.
        Here you can access their phone numbers and emails to schedule appointments with said specialists.</p>
  </div>
  <br/>

    <div className="album py-5 bg-body-tertiary">
        <div className="container">
    
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/dr-emily.png" alt="Dr-Watson" width="150px" height="200px"/>
                <div className="card-body">
                    <p><b>Dr. Emily Watson</b></p>
                    <p><b>General Practitioner</b></p>
                  <p className="card-text">
                    Contact: Phone - 123-456-7890 | Email - emily.watson@example.com
                    Dr. Emily Watson is a dedicated general practitioner with a passion for providing personalized care to her patients. With years of experience, she believes in a holistic approach to healthcare, focusing on both physical and mental well-being.
                  
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
        
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/Dr-benjamin.png" alt="Dr-Parker"  width="150px" height="200px"/>
                <div className="card-body">
                    <p><b>Dr. Benjamin Parker</b></p>
                    <p><b>Cardiologist</b></p>
                  <p className="card-text">Contact: Phone - 987-654-3210 | Email - ben.parker@example.com
                    Dr. Benjamin Parker is a highly skilled cardiologist specializing in heart health. He is committed to utilizing advanced technologies and treatments to ensure the best possible outcomes for his patients. Dr. Parker is known for his compassionate and patient-centered approach to cardiology.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/Dr-turner.jpg" alt="Dr-Turner"  width="150px" height="200px"/>
                <div className="card-body">
                    <p><b>Dr. Michael Turner</b></p>
                    <p><b>Orthopedic Surgeon</b></p>
                  <p className="card-text">Contact: Phone - 111-222-3333 | Email - michael.turner@example.com
                    Dr. Michael Turner is an experienced orthopedic surgeon specializing in musculoskeletal conditions. His dedication to restoring mobility and relieving pain has made him a trusted expert in the field. Dr. Turner is known for his meticulous surgical skills and comprehensive post-operative care. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/Dr-martinez.jpg" alt="Dr-Martinez"  width="150px" height="200px"/>
                <div className="card-body">
                    <p><b>Dr. Olivia Martinez</b></p>
                    <p><b>Pediatrician </b></p>
                  <p className="card-text">Contact: Phone - 555-123-4567 | Email - olivia.martinez@example.com
                    Dr. Olivia Martinez is a caring pediatrician devoted to the well-being of children and adolescents. Her warm demeanor and expertise create a comforting environment for young patients and their families. Dr. Martinez focuses on preventive care, emphasizing the importance of a healthy lifestyle from an early age. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="../Images/sarah-collins.jpg" alt="Dr-Collins"  width="150px" height="200px"/>
                <div className="card-body">
                    <p><b>Dr. Sarah Collins</b></p>
                    <p><b>Psychiatrist</b></p>
                  <p className="card-text">Contact: Phone - 444-555-6666 | Email - sarah.collins@example.com
                    Dr. Sarah Collins is a compassionate psychiatrist committed to improving the mental health and well-being of her patients. She offers a range of therapies and treatments for various mental health disorders. Dr. Collins believes in fostering a supportive and non-judgmental environment to help individuals lead fulfilling lives. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

            <footer className="footer mt-auto py-3 bg-body-tertiary">
                <div className="container">
                  <span className="text-body-secondary">Place sticky footer content here.</span>
                </div>
              </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>

    </div>
  )
}

export default contacts