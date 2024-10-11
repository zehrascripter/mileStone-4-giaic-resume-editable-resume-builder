// Interface for resume data
interface ResumeData {
    personalInfo: string;
    workExperience: string;
    education: string;
    skills: string;
  }
  
  // Initialize resume data
  let resumeData: ResumeData = {
    personalInfo: '',
    workExperience: '',
    education: '',
    skills: ''
  };
  
  // Function to handle edits in the resume
  function handleEdit(event: Event) {
    const target = event.target as HTMLElement;
  
    // Update resumeData based on the edited content
    switch (target.id) {
      case 'personal-info':
        resumeData.personalInfo = target.innerHTML;
        break;
      case 'work-experience':
        resumeData.workExperience = target.innerHTML;
        break;
      case 'education':
        resumeData.education = target.innerHTML;
        break;
      case 'skills':
        resumeData.skills = target.innerHTML;
        break;
    }
  
    console.log('Updated Resume Data:', resumeData);
  }
  
  // Add event listeners for all editable sections
  document.getElementById('personal-info')?.addEventListener('input', handleEdit);
  document.getElementById('work-experience')?.addEventListener('input', handleEdit);
  document.getElementById('education')?.addEventListener('input', handleEdit);
  document.getElementById('skills')?.addEventListener('input', handleEdit);
  