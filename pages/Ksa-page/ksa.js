const cardsData = [

    {
        img: "photos/Ksa/K-Cities/riyadh.jpg",
        title: "الرياض",
        desc: "الرِّيَاض هي عاصمة المملكة العربية السعودية، وأكبر مدنها وثالث أكبر عاصمة عربية من حيث عدد السكان",
        link: "#"
    },
    {
        img: "photos/Ksa/K-Cities/jeddah.jpg",
        title: "جدة",
        desc: "مدينة جِدَّة (جُدَّة) هي مركز محافظة جدة إحدى محافظات منطقة مكة المكرمة، وتقع في غرب المملكة العربية السعودية على ساحل البحر الأحمر.",
        link: "#"
    },
    {
        img: "photos/Ksa/K-Cities/makkah.jpg",
        title: "مكة",
        desc: "مكَّة المُكرَّمَة هي المدينة الأقدس عند المسلمين، بها المسجد الحرام، والكعبة التي تعد قبلة المسلمين في صلاتهم",
        link: "#"
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