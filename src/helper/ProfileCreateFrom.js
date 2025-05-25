const [formData, setFormData] = useState({
  fullName: "",
  age: "",
  email: "",
  phone: "",
  isActive: "",
  gender: "",
  address: {
    city: "",
    state: "",
    zip: "",
    country: "",
    street: "",
  },
  education: [{ degree: "", stream: "", year: "", institute: "" }],
  preferences: {
    language: "",
    newsletterSubscribed: "",
    darkMode: "",
  },
  hobbies: [],
  socialProfiles: {
    linkedin: "",
    github: "",
    twitter: "",
  },
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};

const handleEducationChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => {
    const educationIndex = parseInt(e.target.dataset.index, 10);
    const updatedEducation = [...prevData.education];
    updatedEducation[educationIndex] = {
      ...updatedEducation[educationIndex],
      [name]: value,
    };
    return { ...prevData, education: updatedEducation };
  });
};

const handleAddressChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    address: { ...prevData.address, [name]: value },
  }));
};

const handleHobbyChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    hobbies: { ...prevData.hobbies, [name]: value },
  }));
};

const addEducation = () => {
  setFormData((prevData) => ({
    ...prevData,
    education: [
      ...prevData.education,
      { degree: "", stream: "", year: "", institute: "" },
    ],
  }));
};

const removeEducation = (index) => {
  setFormData((prevData) => {
    const updatedEducation = [...prevData.education];
    updatedEducation.splice(index, 1);
    return { ...prevData, education: updatedEducation };
  });
};

const handlePreferencesChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    preferences: { ...prevData.preferences, [name]: value },
  }));
};

const handleSocialProfileChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    socialProfiles: { ...prevData.socialProfiles, [name]: value },
  }));
};
