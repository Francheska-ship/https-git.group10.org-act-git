// Sample data for albums and images
const albums = [
    {
      title: "PTC SportFest Parade & Opening Ceremony",
      cover: "sportfestalbum.jpeg",
      images: ["sport1.jpeg", "sport2.jpeg", "sport3.jpeg"]
    },
    {
      title: "PTC Dance Troupe at National Championships",
      cover: "dancetroupe.jpeg",
      images: ["dance1.jpg", "dance2.jpeg", "dance3.jpg", "dance4.jpg"]
    },
    {
      title: "Stenolympics – Office Administration Skills Contest",
      cover: "stenobg.jpg",
      images: ["PIC1.jpeg", "PIC2.jpeg", "PIC3.jpeg", "PIC4.jpeg"]
    },
    {
      title: "Student Organizations & Cultural Clubs",
      cover: "organizational.jpg",
      images: ["cultural1.jpeg", "cultural2.jpeg", "cultural3.jpeg", "cultural4.jpeg", "cultural5.jpeg"]
    },
    {
      title: "Smart Fest / Foundation Week",
      cover: "smartfest1.jpeg",
      images: ["smartfest1.jpeg", "smartfest2.jpeg", "smartfest3.jpeg", "smartfest4.jpeg", "smartfest5.jpeg"]
    }

  ];
  
  // Select elements
  const galleryContainer = document.getElementById("gallery-container");
  const albumView = document.getElementById("album-view");
  const backBtn = document.getElementById("back-btn");
  
  // Display albums on page load
  function loadAlbums() {
    galleryContainer.innerHTML = "";
    albums.forEach((album, index) => {
      const albumDiv = document.createElement("div");
      albumDiv.classList.add("album");
      albumDiv.innerHTML = `
        <img src="${album.cover}" alt="${album.title}">
        <p>${album.title}</p>
      `;
      albumDiv.addEventListener("click", () => openAlbum(index));
      galleryContainer.appendChild(albumDiv);
    });
  }
  
  // Open a specific album
  function openAlbum(index) {
    const album = albums[index];
    galleryContainer.style.display = "none";
    albumView.innerHTML = `<h2>${album.title}</h2>`;
    
    album.images.forEach(img => {
      const imgElem = document.createElement("img");
      imgElem.src = img;
      imgElem.classList.add("album-image");
      albumView.appendChild(imgElem);
    });
  
    backBtn.style.display = "block";
  }
  
  // Back to album list
  backBtn.addEventListener("click", () => {
    albumView.innerHTML = "";
    backBtn.style.display = "none";
    galleryContainer.style.display = "flex";
  });
  
  // Initialize
  loadAlbums();