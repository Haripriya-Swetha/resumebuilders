
function addQualification() {
   let qualificationsContainer = document.getElementById('educational_qualifications');
   let count = qualificationsContainer.childElementCount;
   let newQualificationField = document.createElement('div');
    newQualificationField.className = 'form-group';
    newQualificationField.innerHTML = `
      <label for="qualification_${count}">Qualification:</label>
      <input type="text" class="form-control" id="qualification_${count}" required>
    `;
    qualificationsContainer.appendChild(newQualificationField); 
  }
  function removeQualification()
    {
    qualificationsContainer.removeChild(newQualificationField);
    }

  function addExperience() {
   let experienceContainer = document.getElementById('work_experience');
   let count = experienceContainer.childElementCount;
   let newExperienceField = document.createElement('div');
    newExperienceField.className = 'form-group';
    newExperienceField.innerHTML = `
      <label for="experience_${count}">Experience:</label>
      <input type="text" class="form-control" id="experience_${count}" required>
    `;
    experienceContainer.appendChild(newExperienceField);
  }

 
  function addSkill() {
   let skillsContainer = document.getElementById('skills');
   let count = skillsContainer.childElementCount;
   let newSkillField = document.createElement('div');
    newSkillField.className = 'form-group';
    newSkillField.innerHTML = `
      <label for="skill_${count}">Skill:</label>
      <input type="text" class="form-control" id="skill_${count}" required>
    `;
    skillsContainer.appendChild(newSkillField);
  }


  function addTechSkill() {
   let techSkillsContainer = document.getElementById('technical_skills');
   let count = techSkillsContainer.childElementCount;
   let newTechSkillField = document.createElement('div');
    newTechSkillField.className = 'form-group';
    newTechSkillField.innerHTML = `
      <label for="tech_skill_${count}">Technical Skill:</label>
      <input type="text" class="form-control" id="tech_skill_${count}" required>
    `;
    techSkillsContainer.appendChild(newTechSkillField);
  }

 
  function addCertification() {
   let certificationsContainer = document.getElementById('certifications');
   let count = certificationsContainer.childElementCount;
   let newCertificationField = document.createElement('div');
    newCertificationField.className = 'form-group';
    newCertificationField.innerHTML = `
      <label for="certification_${count}">Certification:</label>
      <input type="file" class="form-control" id="certification_${count}" required>
    `;
    certificationsContainer.appendChild(newCertificationField);
  }
           
  document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

   let resumeData = {
      name: document.getElementById('name_input').value,
      phoneNumber: document.getElementById('phone_input').value,
      githubLink: document.getElementById('github_input').value,
      linkedinLink: document.getElementById('linkedin_input').value,
      gmail: document.getElementById('gmail_input').value,
      educationalQualifications: getValues('qualification_'),
      workExperience: getValues('experience_'),
      skills: getValues('skill_'),
      certifications: getValues('certification_')
    };

    
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert("Saved successfully!");
    window.location.href = 'print.html';
    
  });


  function getValues(prefix) {
   let fields = Array.from(document.querySelectorAll(`[id^="${prefix}"]`));
    return fields.map(field => field.value);
  }