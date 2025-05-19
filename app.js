  let rollno = 1;

  function submitForm() {
     firstName = document.getElementById('firstName').value;
     lastName = document.getElementById('lastName').value;
     fatherName = document.getElementById('fatherName').value;
     phone = document.getElementById('phone').value;
     nic = document.getElementById('nic').value;

    if (firstName && lastName && fatherName && phone && nic) {
      resultBox = document.createElement('div');
      resultBox.classList.add('result-box');
      
      resultBox.innerHTML = `
        <h3>Roll Number: ${rollno}</h3>
        <div class="result-item"><strong>First Name:</strong> ${firstName}</div>
        <div class="result-item"><strong>Last Name:</strong> ${lastName}</div>
        <div class="result-item"><strong>Father's Name:</strong> ${fatherName}</div>
        <div class="result-item"><strong>Phone Number:</strong> ${phone}</div>
        <div class="result-item"><strong>NIC Number:</strong> ${nic}</div>
      `;

      document.getElementById('resultContainer').appendChild(resultBox);

      rollno++;

      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('fatherName').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('nic').value = '';
    } else {
      alert('Please fill all the fields.');
    }
  }