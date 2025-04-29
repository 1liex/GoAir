const cardsData = [

    {
        img: "photos/France/F-Hotels/b.jpg",
        title: "باريس",
        desc: "العاصمة وأشهر مدينة في فرنسا. معروفة ببرج إيفل، متحف اللوفر، وشانزليزيه.",
        link: "pages/France/Paris/Paris.html"
    },
    {
        img: "photos/France/F-Hotels/n.jpg",
        title: "نيس",
        desc: "مدينة ساحلية جنوب فرنسا، تطل على البحر المتوسط. جوها هادي ومناسب للاسترخاء.",
        link: "pages/France/Nice/Nice.html"
    },
    {
        img: "photos/France/F-Hotels/l.jpg",
        title: "ليون",
        desc: "مدينة تاريخية تشتهر بالمطاعم والمباني القديمة والأنهر.",
        link: "pages/France/Lony/Lony.html"
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