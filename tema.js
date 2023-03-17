let chk = document.getElementById('chk');
let titulo = document.getElementById("h");
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let homeh1 = document.getElementById("home-h1");
let wave = document.getElementById("wave");
let skill = document.getElementById("skill");
let wave2 = document.getElementById("wave2");
let h1proj = document.getElementById("h1proj");
let wave3 = document.getElementById("wave3");
let edu = document.getElementById("edu");
let h2 = document.getElementById("h2");
let h1edu = document.getElementById("h1edu");
let h2edu = document.getElementById("h2edu");


chk.addEventListener('change', function() {
  if(this.checked){
    titulo.classList.replace("h1", "h1-dark");
  }else{
    titulo.classList.replace("h1-dark", "h1");
  }
});

chk.addEventListener('change', function() {
    if(this.checked){
      h2.classList.replace("h2", "h2-dark");
    }else{
      h2.classList.replace("h2-dark", "h2");
    }
  });

chk.addEventListener('change', function() {
    if(this.checked){
      body.classList.replace("light", "dark");
    }else{
      body.classList.replace("dark", "light");
    }
});

  chk.addEventListener('change', function() {
    if(this.checked){
      nav.classList.replace("nav-light", "nav-dark");
    }else{
      nav.classList.replace("nav-dark", "nav-light");
    }
});

  chk.addEventListener('change', function() {
    if(this.checked){
      homeh1.classList.replace("home-light", "home-dark");
    }else{
      homeh1.classList.replace("home-dark", "home-light");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      wave.classList.replace("waves", "waves-dark");
    }else{
      wave.classList.replace("waves-dark", "waves");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      skill.classList.replace("skill-light", "skill-dark");
    }else{
      skill.classList.replace("skill-dark", "skill-light");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      wave2.classList.replace("waves2", "waves2-dark");
    }else{
      wave2.classList.replace("waves2-dark", "waves2");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      h1proj.classList.replace("h1", "h1-dark");
    }else{
      h1proj.classList.replace("h1-dark", "h1");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      wave3.classList.replace("waves", "waves-dark");
    }else{
      wave3.classList.replace("waves-dark", "waves");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      edu.classList.replace("skill-light", "skill-dark");
    }else{
      edu.classList.replace("skill-dark", "skill-light");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      h1edu.classList.replace("h1-edu", "h1-edu-dark");
    }else{
      h1edu.classList.replace("h1-edu-dark", "h1-edu");
    }
});

chk.addEventListener('change', function() {
    if(this.checked){
      h2edu.classList.replace("h2", "h2-dark");
    }else{
      h2edu.classList.replace("h2-dark", "h2");
    }
});