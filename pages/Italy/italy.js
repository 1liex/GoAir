const cardsData = [

    {
        img: "../../photos/Italy/I-cities/roma.jpg",
        title: "روما",
        desc: "العاصمة، تحتضن معالم شهيرة مثل الكولوسيوم، الفاتيكان، ونافورة تريفي",
        link: "../../pages/Italy/Rome/Rome .html"
    },
    {
        img: "../../photos/Italy/I-cities/fenesea.jpg",
        title: "فينيسيا",
        desc: "مدينة رومانسية مبنية على الماء، تشتهر بالقنوات والجندول وساحة سان ماركو",
        link: "../../pages/Italy/Venice/Venice .html"
    },
    {
        img: "../../photos/Italy/I-cities/flornsea.jpg",
        title: "فلورنسيا",
        desc: "مهد عصر النهضة، تشتهر بأعمال مايكل أنجلو ومعرض أوفيزي",
        link: "../../pages/Italy/Florence/Florence.html"
    }
]

const container = document.getElementById("cardCities");

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.onclick = () => (window.location.href = card.link);

  cardElement.innerHTML = `
        
        <div class="riyadh">
          <img src="${card.img}" alt="صورة مدينة الرياض" />
          <div class="text">
            <h1>${card.title}</h1>
            <p>
              ${card.desc}
            </p>
          </div>
        </div>
      
    `;

  container.appendChild(cardElement);
});