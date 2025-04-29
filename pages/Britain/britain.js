const cardsData = [

    {
        img: "photos/Britain/B-Cities/ln.jpg",
        title: "لندن",
        desc: " هي عاصمة إنجلترا والمملكة المتحدة. تعتبر واحدة من أهم وأشهر مدن العالم",
        link: "pages/Britain/London/London.html"
    },
    {
        img: "photos/Britain/B-Cities/lv.jpg",
        title: "ليفربول",
        desc: "مدينة ساحلية شمال غرب إنجلترا، تطل على نهر ميرسي. مشهورة بتاريخها البحري وكرة القدم",
        link: "pages/Britain/Liverpool/Liverpool.html"
    },
    {
        img: "photos/Britain/B-Cities/mn.jpg",
        title: "مانشستر",
        desc: "مشهورة بصناعتها وثقافتها وكرة القدم. جوها حضري وحيوي، وتجمع بين التاريخ العريق والتطور العصري",
        link: "pages/Britain/Manchester/Manchester.html"
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