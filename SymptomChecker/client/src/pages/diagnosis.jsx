import React, { useState } from 'react';
import axios from 'axios';

const diagnosis = () => {
 const [symptoms, setSymptoms] = useState('');
 const [diagnosis, setDiagnosis] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://apimedic.com/diagnosis', {
        params: {
          symptoms: symptoms.split(',').map(symptom => symptom.trim()),
          apikey: 'YOUR_API_KEY'
        }
      });
      setDiagnosis(response.data.diagnosis);
    } catch (error) {
      console.error('Error fetching diagnosis:', error);
    }
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1 className='title'>Diagnosis</h1>
        <label htmlFor="symptoms">Enter your symptoms (comma-separated):</label>
        <input
          type="text"
          id="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button type="submit">Check Symptoms</button>
      </form>
      {diagnosis && <p>Diagnosis: {diagnosis}</p>}
    </div>
 );
};

export default diagnosis