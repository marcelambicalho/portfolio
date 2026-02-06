// active sections
//function showPage(pageId) {
    //document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
   // document.getElementById(pageId).classList.add("active");
  //}

  function showPage(pageId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  
  // navigation bars 
  const navbar = document.getElementById("navbar");

  const navbar = `
        <a href="#" onclick="showPage('home')">home</a>
        <a href="#" onclick="showPage('data-projects')">data projects</a>
        <a href="#" onclick="showPage('design-projects')">design projects</a>
        <a href="#" onclick="showPage('about-me')">contact</a>        
  `;

  `; 
  
    if (pageId === "round1") {
      navbar.innerHTML = dashboardNav;
    } else {
      navbar.innerHTML = defaultNav;
    }
  }
  