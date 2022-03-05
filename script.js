const arrayAkanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const arrayAkanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
// Collecting data from input
    function getDate() {
        let dateInput = document.getElementById('dob').value;
        console.log(dateInput);
        male = document.getElementById('maleRadio'); // collecting from male radio
        female = document.getElementById('femaleRadio');
        if(dateInput == '') {
            alert('Please enter a valid date');
        } else if (male.checked == false && female.checked == false) {
            alert('Please select gender');
            
        } else {
    
                // Parsing the date
                date = new Date(dateInput);
                console.log(date);
    
