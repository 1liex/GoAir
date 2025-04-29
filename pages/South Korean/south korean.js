const cardsData = [

    {
        img: "../../photos/South Korean/So-cities/sol.jpg",
        title: "سيؤول",
        desc: " مدينة لا تنام، تجمع بين الماضي والمستقبل",
        link: "../../pages/South Korean/Seoul/Seoul.html"
    },
    {
        img: "../../photos/South Korean/So-cities/busan.jpg",
        title: "بوسان",
        desc: "لؤلؤة البحر والشواطئ",
        link: "../../pages/South Korean/Busan/Busan.html"
    },
    {
        img: "../../photos/South Korean/So-cities/gogo.jpg",
        title: "جيجو",
        desc: "جزيرة السلام",
        link: "../../pages/South Korean/Jeju/Jeju.html"
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