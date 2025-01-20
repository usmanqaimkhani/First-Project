document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false, // Keeps autoplay running even if the user interacts
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebar = document.getElementById("sidebar_menu");
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.querySelector(".toggle-sidebar");

  // Function to toggle sidebar and overlay
  function toggleSidebar() {
    if (sidebar && content && overlay) {
      sidebar.classList.toggle("active");
      content.classList.toggle("blur");
      overlay.classList.toggle("active");
    }
  }

  // Function to close sidebar and overlay
  function closeSidebar() {
    if (sidebar && content && overlay) {
      sidebar.classList.remove("active");
      content.classList.remove("blur");
      overlay.classList.remove("active");
    }
  }

  // Sidebar toggle event listener
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", toggleSidebar);
  }

  // Close sidebar on close button click
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  // Close sidebar when clicking on the overlay
  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }
});

// Athelet Slider

(function ($) {
  "use strict";

  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>",
        "<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>",
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  };
  carousel();
})(jQuery);

// End

// Athelet Json Data

// JSON data
const athletes = [
  {
    id: "LindseyVonn",
    name: "Lindsey Vonn",
    nationality: "USA",
    discipline: "Ski Racer",
    bio: "Lindsey Vonn is one of the greatest alpine ski racers in history, with a bronze medal in the 2010 Winter Olympics in Vancouver in the Women's Downhill event.",
    image:
      "https://th.bing.com/th/id/OSK.HEROmgqjcnzAD4Wyvu4LucToP2KhSnWQc8xq9LUWuVaFLJY?rs=1&pid=ImgDetMain",
  },
  {
    id: "RafaelNadal",
    name: "Rafael Nadal",
    nationality: "Spain",
    discipline: "Tennis",
    bio: "Rafael Nadal, a legendary tennis player, earned a gold medal in Men's Singles at the 2008 Beijing Olympics and another gold in Men's Doubles at the 2016 Rio Olympics with Marc López.",
    image:
      "https://assets.vogue.com/photos/66a76b4b2137522c408320cf/master/w_2560%2Cc_limit/2164115249",
  },

  {
    id: "SimoneBiles",
    name: "Simone Biles",
    nationality: "USA",
    discipline: "Artistic Gymnastics",
    bio: "Simone Biles is an American artistic gymnast widely regarded as one of the greatest gymnasts of all time. She has won a record-breaking 32 Olympic and World Championship medals, including 7 Olympic gold medals. Known for her incredible skill and difficulty level, Biles has revolutionized the sport with her innovative routines.",
    image:"https://cdn.britannica.com/82/244782-050-2D2A6EC1/Gold-medalist-Simone-Biles-celebrates-medal-at-2016-Olympic-Games.jpg",
  },
  {
    id: "LeBronJames",
    name: "LeBron James",
    nationality: "USA",
    discipline: "Basketball",
    bio: "LeBron James is an American professional basketball player considered one of the greatest of all time. He has won four NBA championships, four NBA MVP awards, and two Olympic gold medals. James is known for his athleticism, scoring ability, and playmaking skills.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
  {
    id: "CocoGauff",
    name: "Coco Gauff",
    nationality: "USA",
    discipline: "Tennis",
    bio: "Coco Gauff is an American professional tennis player who rose to fame as a teenager. She has won a Grand Slam title in doubles and reached the quarterfinals of all four Grand Slam singles tournaments. Gauff is known for her powerful serve and aggressive playing style.",
    image:"https://images.wsj.net/im-973090?width=1280&size=1"
  },
  {
    id: "ArmandDuplantis",
    name: "Armand Duplantis",
    nationality: "Sweden",
    discipline: "Athletics (Pole Vault)",
    bio: "Armand Duplantis is a Swedish pole vaulter who holds the world record in the event. He has won Olympic gold, world championship gold, and numerous other major titles. Duplantis is known for his exceptional technique and explosive power.",
    image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRtTf7RmmsnBU4YHH2zOK9eVB8Q456wrqZ-HvIrErINye5GUr8ZpiM95IrJCtWGm2-5UyHlTntoqg0K5aMHDhNkFal00rqsjptvB3yS34nE6c4L_u8GnmW7HpppZsULzIInsxhmZjaP"
  },
  {
    id: "CarolineMarks",
    name: "Caroline Marks",
    nationality: "USA",
    discipline: "Surfing",
    bio: "Caroline Marks is an American professional surfer who has been a dominant force in women's surfing since her teenage years. She has won multiple World Surf League Championship Tour events and is known for her powerful surfing style and competitive drive.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_3-polDJfUJeNjQaZOl42Y4QmGyf9L7P_A&s"
  },
  {
    id: "NoahLyles",
    name: "Noah Lyles",
    nationality: "USA",
    discipline: "Athletics (Sprints)",
    bio: "Noah Lyles is an American sprinter who specializes in the 100m and 200m. He has won multiple world championship gold medals and is known for his explosive speed and smooth running style.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbzUdJ9d_GdKbOhLN46ep0E3YyNfuCObqOQ&s"
  },
  {
    id: "MikaelaShiffrin",
    name: "Mikaela Shiffrin",
    nationality: "USA",
    discipline: "Alpine Skiing",
    bio: "Mikaela Shiffrin is an American alpine ski racer who has won numerous World Cup races and Olympic medals. She is considered one of the greatest female skiers of all time and is known for her technical skill and versatility across various disciplines.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREALjNMhYEwfAG46qsIjJ-3JHiXNb82a-Jw_Q2OVGk6A41Ik_iLHQPDkKverheYrV63gDKsS3mDln82_70k7H7rQ"
  },
  {
    id: "NeerajChopra",
    name: "Neeraj Chopra",
    nationality: "India",
    discipline: "Athletics (Javelin Throw)",
    bio: "Neeraj Chopra is an Indian javelin thrower who became the first Indian to win an Olympic gold medal in track and field. He has also won a world championship silver medal and is known for his powerful throwing technique.",
    image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHwq6oUkkAg1EqogIQ_B3U5e0oiotjM3uJx-M_KvwHrgj7TdQFdP-6YAxLFUNEaTaBFC4t3NhjNFUjzhipvsSFgz78lEwdt8raja3Ze_Tts2KVAmuwLPjzsuXBtFIBQoJT8avnLuytVg"
  },
  {
    id: "GuAilingEileen",
    name: "Gu Ailing Eileen",
    nationality: "China",
    discipline: "Freestyle Skiing",
    bio: "Gu Ailing Eileen is a Chinese-American freestyle skier who competes in slopestyle and halfpipe. She won three medals at the 2022 Winter Olympics, including two golds. Gu is known for her incredible aerial skills and charisma.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgpezLdLVonF5rrTHrBS8KjFCGF_9Xe-VBQmwVtVV5ExKBLAtBgARsIKC5m-UxPMKHxivc_pIc_YdVzFAWR_b1Q"
  },
  {
    id: "SydneyMcLaughlinLevrone",
    name: "Sydney McLaughlin-Levrone",
    nationality: "USA",
    discipline: "Athletics (Hurdles)",
    bio: "Sydney McLaughlin-Levrone is an American hurdler who holds the world record in the 400-meter hurdles. She has won Olympic gold and world championship gold and is known for her incredible speed and dominance in the event.",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeqRUscWnOrEDsEthJ1uZfJYMSHsBd87_Xeaxj_QmoXthwYwr3D7Ipq3c7owIID36VxCopoGwfJr25YBtSYqjexQ"
  },
  {
    id: "StephenCurry",
    name: "Stephen Curry",
    nationality: "USA",
    discipline: "Basketball",
    bio: "Stephen Curry is an American professional basketball player considered one of the greatest three-point shooters of all time. He has won four NBA championships and two NBA MVP awards. Curry is known for his incredible shooting accuracy and ball-handling skills.",
    image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR1Rz64EYhz0_1sghNRPUQJwNjSqYjn0KzoX8UE1axwAsqBt6A_oHAwGFXI4FWELnATBghQAoLylnAli8U"
  },
  {
    id: "YulimarRojas",
    name: "Yulimar Rojas",
    nationality: "Venezuela",
    discipline: "Athletics (Triple Jump)",
    bio: "Yulimar Rojas is a Venezuelan triple jumper who holds the world record in the event. She has won two Olympic gold medals and multiple world championship titles. Rojas is known for her explosive power and incredible jumping technique.",
    image:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSZF-IxZS9yq_P3BZIrCf9CeKKoTB_R06ySbiMuq9wXN7lQsEPObz_oUyQNiThBI2HDzFVrFSxqx8FUFzI"
  },
  {
    id: "NovakDjokovic",
    name: "Novak Djokovic",
    nationality: "Serbia",
    discipline: "Tennis",
    bio: "Novak Djokovic is a Serbian professional tennis player widely considered one of the greatest of all time. He has won 23 Grand Slam singles titles, an all-time record for men. Djokovic is known for his incredible athleticism, defensive skills, and mental toughness.",
    image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSiO4mJhonxHVncYGEQqavZn-JA2ZlnQtCmgA2YGVe4KI2Xhe43QzjwkC-W-Gy5dDMfikV2GJAh2T2MzsE"
  },
  {
    id: "SummerMcIntosh",
    name: "Summer McIntosh",
    nationality: "Canada",
    discipline: "Swimming",
    bio: "Summer McIntosh is a Canadian swimmer who has already achieved significant success at a young age. She has won multiple world championship medals and is known for her versatility across various swimming strokes.",
    image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRSBxB_rwhCpBuH-gAJUikEDoksSESBRi9AwXPDWTLNZwCsA2Z-Ok37qr2ktaxoSxGA_rU0fMKEE-kNbD8"
  },
  {
    id: "LeonMarchand",
    name: "Leon Marchand",
    nationality: "France",
    discipline: "Swimming",
    bio: "Leon Marchand is a French swimmer who has emerged as a rising star in the sport. He has won multiple world championship medals and is known for his impressive performances in individual medley events.",
    image:"https://npr.brightspotcdn.com/dims4/default/af92eb5/2147483647/strip/true/crop/5951x3347+0+558/resize/1200x675!/quality/90/?url=https%3A%2F%2Fnpr.brightspotcdn.com%2Fdims3%2Fdefault%2Fstrip%2Ffalse%2Fcrop%2F5951x4463%20372%200%2Fresize%2F5951x4463%21%2F%3Furl%3Dhttp%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc1%2Ff5%2F2d36e41341cab68fb459321a442c%2Fap24210692517056.jpg"
  },
  {
    id: "RayssaLeal",
    name: "Rayssa Leal",
    nationality: "Brazil",
    discipline: "Skateboarding",
    bio: "Rayssa Leal is a Brazilian skateboarder who gained international attention at a young age. She has won multiple skateboarding competitions and is known for her technical skills and creative style.",
    image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSU4l8BG3CJgEA02jHTVZDIIjtFkKxeDgly_AZYaDciPk0oLKGGDLIlVLrpsTioE5j_T-wx2MtRp8ykUhI"
  },
  {
    id: "VictorWembanyama",
    name: "Victor Wembanyama",
    nationality: "France",
    discipline: "Basketball",
    bio: "Victor Wembanyama is a French professional basketball player considered one of the most highly anticipated prospects in recent years. He is known for his exceptional height, athleticism, and basketball IQ.",
    image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcShVN8sqL5zeerWY7N4h1MrndiwqApEl7LQ3Vj_sU2PfpTvV7fzibWGgStMv3_VKusecE0LqTkPWcm7LFo"
  },
  {
    id: "KatieLedecky",
    name: "Katie Ledecky",
    nationality: "USA",
    discipline: "Swimming",
    bio: "Katie Ledecky is an American swimmer who has dominated middle-distance and long-distance freestyle events. She has won multiple Olympic and world championship gold medals and is considered one of the greatest female swimmers of all time.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlApTutUk3lUIjAvbE07YRkN4B5P6Xnbi_KO21yO8VsBTIpkyNR96HqS0xSVQnQPul8KoD9WtiDQmd54q9JBoDg"
  },
  {
    id: "YutoHorigome",
    name: "Yuto Horigome",
    nationality: "Japan",
    discipline: "Skateboarding",
    bio: "Yuto Horigome is a Japanese skateboarder who specializes in street skateboarding. He won the first-ever Olympic gold medal in men's street skateboarding at the Tokyo 2020 Olympics. Horigome is known for his technical skills and innovative trick combinations.",
    image:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTyeKNpgGOOphK8hHrXMBumCk2xM3Qp11PFzO1QN0zALC3z_dowUsh1_nSv3c2iPQxbDuu3RzNu_lC_5sc"
  },
  {
    id: "EliudKipchoge",
    name: "Eliud Kipchoge",
    nationality: "Kenya",
    discipline: "Athletics (Marathon)",
    bio: "Eliud Kipchoge is a Kenyan long-distance runner who has broken the world record in the marathon multiple times. He is the first person to run a marathon in under two hours (although this was not a ratified world record). Kipchoge is known for his incredible endurance and efficient running style.",
    image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrV-FJ1OalKt9uPZ_BuaRgVksHgnFYWXUIH1lsBoCDE8fZnonz-cjNt8w7RRcZlBCnRX-o7IwZhbJImFIJ40beAg"
  },
  {
    id: "TadejPogacar",
    name: "Tadej Pogačar",
    nationality: "Slovenia",
    discipline: "Cycling",
    bio: "Tadej Pogačar is a Slovenian cyclist who has won the Tour de France twice. He is known for his climbing ability, time trial prowess, and aggressive racing style. Pogačar is considered one of the most exciting young talents in professional cycling.",
    image:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSwsqcIKmtjYGnlRW-DnjpPqCFnP1m35ML2EyP6_NWTgAXqkO06jXw8BP-acrgYJjeTnAc7I0F4ew5pnuM"
  },
  {
    id: "IliaMalinin",
    name: "Ilia Malinin",
    nationality: "USA",
    discipline: "Figure Skating",
    bio: "Ilia Malinin is an American figure skater who has made history by becoming the first man to land a quadruple Axel in competition. He is known for his incredible jumping ability and innovative skating style.",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUz9nIW43ssC1DCtrc-_5epibWaioKLv9HyyvIEX-P1NJdTjroUcSCnIjWTNth7ascDDKGzu7KgErBR8qnbyVqKQ"
  },
  {
    id: "UsainBolt",
    name: "Usain Bolt",
    nationality: "Jamaica",
    discipline: "Athletics (Sprints)",
    bio: "Usain Bolt is a Jamaican sprinter widely considered the fastest man of all time. He holds the world records in the 100m and 200m and has won eight Olympic gold medals. Bolt is known for his explosive speed and charismatic personality.",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg"
  },
  {
    id: "JulienAlfred",
    name: "Julien Alfred",
    nationality: "Saint Lucia",
    discipline: "Athletics (Sprints)",
    bio: "Julien Alfred is a Saint Lucian sprinter who has emerged as a rising star in the sport. She has won multiple NCAA titles and is known for her impressive speed and potential.",
    image:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRMwNNOIcb0lxc_9T06BYr3hT7cJ7XTxwDgBvbH5NIdr_bn_w1SwuxS-eXEK4xF32Ou7P1RYlzyGjbVO2o"
  },
];

// Render cards
const cardsContainer = document.getElementById("cards-container");

athletes.forEach((athlete) => {
  const card = document.createElement("div");
  card.className = "card";
  card.onclick = () => openModal(athlete);

  card.innerHTML = `
      <div class="card-cover" style="background-image: url('${athlete.image}')"></div>
      <div class="card-info">
          <p class="name">${athlete.name}</p>
      </div>
  `;
  cardsContainer.appendChild(card);
});

// Open modal
function openModal(athlete) {
  const modal = document.getElementById("athlete-modal");
  const athleteDetails = document.getElementById("athlete-details");

  athleteDetails.innerHTML = `
      <h2>${athlete.name}</h2>
      <p><strong>Nationality:</strong> ${athlete.nationality}</p>
      <p><strong>Discipline:</strong> ${athlete.discipline}</p>
      <p>${athlete.bio}</p>
  `;
  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  const modal = document.getElementById("athlete-modal");
  modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("athlete-modal");
  if (event.target === modal) {
    closeModal();
  }
};

// Add event listener to close modal on escape key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

