const cardsData = [
  {
    title: "السعودية",
    desc: "المملكة العربية السعودية هي دولة تقع في شبه الجزيرة العربية وتعد من اكبر دول الشرق الأوسط من حيث المساحة ورؤية 2030 التي تهدف  إلى تطوير قطاعات السياحة والترفيه و التقنية",
    img: "photos/Ksa/IMG-20250418-WA0018.jpg",
    link: "/pages/Ksa-page/ksa.html",
  },
  {
    title: "اسبانيا",
    desc: "وجهة أوروبية ساحرة تجمع بين التاريخ، الفن، والطبيعة. تمتاز بتنوّع ثقافي غني بتأثيرات رومانية وإسلامية ومسيحية. وتُعد من أبرز الدول الأوروبية التي ما زالت تحتفظ بالكثير من العمارة الإسلامية",
    img: "photos/Spain/shutterstock_786312625-scaled.jpg",
    link: "pages/Spain/spain.html",
  },
  {
    title: "فرنسا",
    desc: "فرنسا تُعد واحدة من أجمل الدول في أوروبا، وتُعرف بثقافتها الغنية وتاريخها العريق ومعالمها السياحية الساحرة.",
    img: "photos/France/Screenshot_-_Google.jpg",
    link: "pages/France/france.html",
  },
  {
    title: "بريطانيا",
    desc: "بريطانيا معروفة بجوها المتقلب، لكن بشكل الجو غالباً غائم أو ممطر، حتى بالصيف، فمظلة خفيفة دايم تنفع ",
    img: "photos/Britain/Screenshot_-_Google.jpg",
    link: "pages/Britain/britain.html",
  },
  {
    title: "إيطاليا",
    desc: "وجهة أوروبية مميزة تمتاز بالفن، التاريخ، والمأكولات الفريدة. تعكس حضارة رومانية عريقة وتزخر بالمعالم المعمارية والكنوز الفنية من عصور متعددة. ",
    img: "photos/Italy/Screenshot_-_Google.jpg",
    link: "pages/Italy/italy.html",
  },
  {
    title: "كوريا الجنوبية",
    desc: "لوحة فنية تنبض بالحياة  هي بلد يجمع بين حضارة متقدمة وتقاليد ضاربة في العمق، بين ناطحات السحاب والقصور القديمة، وبين صخب المدينة وهدوء الطبيعة. ",
    img: "photos/South Korean/Screenshot_-_Google.jpg",
    link: "pages/South Korean/south korean.html",
  },
];

const container = document.getElementById("cardContainer");

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.onclick = () => (window.location.href = card.link);

  cardElement.innerHTML = `
      <div class="card-body">
        <img src="${card.img}" alt="${card.title}">
        <h1>${card.title}</h1>
        <p>${card.desc}</p>
      </div>
    `;

  container.appendChild(cardElement);
});
