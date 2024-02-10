class RegistrationSystem {
    constructor() {
      this.pendaftarList = [];
    }
  
    submitForm() {
      const nama = document.getElementById('nama').value;
      const umur = parseInt(document.getElementById('umur').value);
      const uangSangu = parseInt(document.getElementById('uangsangu').value);
  
      if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert('Data tidak valid. Periksa kembali kriteria.');
        return;
      }
  
      const pendaftar = { nama, umur, uangSangu };
      this.pendaftarList.push(pendaftar);
  
      // Clear form fields
      document.getElementById('registrationForm').reset();
  
      // Update list and resume
      this.updateListAndResume();
    }
  
    updateListAndResume() {
      const table = document.getElementById('pendaftarTable');
      const resume = document.getElementById('resume');
  
      // Clear existing content
      table.innerHTML = '';
      resume.innerHTML = '';
  
      // Update table
      this.pendaftarList.forEach((pendaftar, index) => {
        const row = table.insertRow(index);
        row.insertCell(0).innerHTML = pendaftar.nama;
        row.insertCell(1).innerHTML = pendaftar.umur;
        row.insertCell(2).innerHTML = pendaftar.uangSangu;
      });
  
      // Update resume
      const avgUmur = this.calculateAverage('umur');
      const avgUangSangu = this.calculateAverage('uangSangu');
  
      resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${avgUangSangu} dengan rata-rata umur ${avgUmur}`;
    }
  
    calculateAverage(property) {
      const total = this.pendaftarList.reduce((sum, pendaftar) => sum + pendaftar[property], 0);
      return this.pendaftarList.length > 0 ? (total / this.pendaftarList.length).toFixed(2) : 0;
    }
  }
  
  const registrationSystem = new RegistrationSystem();
  
  function openTab(tabName) {
    const tabs = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
  
    if (tabName === 'ListPendaftar') {
      registrationSystem.updateListAndResume();
    }
  }
  
  function submitForm() {
    registrationSystem.submitForm();
  }
  
  // Initial tab display
  openTab('Registrasi');
  