const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.email.value = formData.email;
    form.message.value = formData.message;
  }

  form.addEventListener('input', event => {
    if (event.target.name) {
      formData[event.target.name] = event.target.value;
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
    } else {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      formData.email = '';
      formData.message = '';
      form.email.value = '';
      form.message.value = '';
    }
  });
});
