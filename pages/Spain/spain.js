const cardsData = [
  {
    img: "photos/Spain/S-Cities/Barcelona.jpg",
    title: "برشلونة",
    desc: "برشلونة  مدينة على الساحل الشرقي لإسبانيا بين مصبي نهر الربرقاط ونهر بسوس.",
    link: "#",
  },
  {
    img: "photos/Spain/S-Cities/Madrid.jpg",
    title: "مدريد",
    desc: "مدريد هي عاصمة مملكة إسبانيا وأكبر مدنها يبلغ عدد السكان 3.2 مليون نسمة",
    link: "#",
  },
  {
    img: "photos/Spain/S-Cities/Granada.jpg",
    title: "غرناطة",
    desc: "تقع غرناطة على سفح جبال سييرا نيفادا، في التقاء ثلاثة أنهار: دارّو (Darro)، بيرّو (Beiro) والشنيل (Genil)،",
    link: "#",
  },
];

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
