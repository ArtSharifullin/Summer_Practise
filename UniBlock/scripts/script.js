var headerText = `
    <button class="scroll-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" d="m17.657 16.243l1.414-1.414l-7.07-7.072l-7.072 7.072l1.414 1.414L12 10.586z"/></svg>
    </button>
    <div class="upper_head row align-items-center mb-md-2 pb-md-1">
        <a href="main.html" class="col-4 col-sm-3 col-lg-2 order-1"><img class="img-fluid main_logo" src="src/images/ry8q7novwnq8gljjakvuwfjysot57z9k.png">
        <img class="img-fluid short_logo" src="src/images/short_logo.png"></a>

        <div class="contacts col-6 col-sm-4 col-lg-3 ms-auto order-md-3 order-2">
            <a href="tel:89934007575" class="contact text-end">+7 (993) 400-75-75</a>
            <a href="tel:88432530047" class="contact text-end">8 843 253 00 47</a>
            <a href="tel:88432530047" class="contact text-end">support@uniblock.pro</a>
        </div>

        <nav class="menu order-lg-2 col-12 col-lg-5 mt-3 mt-md-0 mb-md-3 ms-lg-3 align-self-lg-end order-3"></a>
          <a href="main.html" class="header-link me-3" id="nav-main">Главная</a>
          <a href="about_us.html" class="header-link me-3" id="nav-about">О Компании</a>
          <a href="how_it_work.html" class="header-link" id="nav-how">Как это работает</a>
        </nav>
    </div>
    <div class="lower_head row row-cols-1 row-cols-md-4 row-cols-lg-6 align-items-md-start">
  <a href="buisness_path.html" class="header-link mb-1 my-md-2 col-12 col-md-3 col-lg-2 text-center text-md-start" id="nav-path">Деловой путь НМА</a>
  <a href="uni_block_chain.html" class="header-link mb-1 my-md-2 col-12 col-md-2 col-lg-2 text-center text-md-start" id="nav-uni">UniBlockChain</a>
  <a href="digital_rank.html" class="header-link mb-1 my-md-2 col-12 col-md-2 col-lg-2 text-center text-md-start" id="nav-rank">Digital Rank</a>
  <a href="digital_safe.html" class="header-link mb-1 my-md-2 col-12 col-md-2 col-lg-2 text-center text-md-start" id="nav-safe">Digital Safe</a>
  <a href="digital_sukuk.html" class="header-link mb-1 my-md-2 col-12 col-md-3 col-lg-2 text-center text-md-start" id="nav-suk">Цифровой сукук</a>
  <a href="services.html" class="header-link mb-1 my-md-2 col-12 col-md-3 col-lg-2 text-center text-md-start" id="nav-serv">Сервисы в разработке</a>
  <a href="stablecoin.html" class="header-link mb-1 my-md-2 col-12 col-md-3 col-lg-2 text-center text-md-start" id="nav-stbc">Корпоративный Стейблкоин</a>
  <a href="imip.html" class="header-link mb-1 my-md-2 col-12 col-md-6 col-lg-3 text-center text-md-start" id="nav-imip">Исламская Многофункциональная Инвестиционная Платформа (ИМИП)</a>
  <a href="brics.html" class="header-link mb-1 my-md-2 col-12 col-md-5 col-lg-3 text-center text-md-start" id="nav-brics">Международная Инвестиционная Платформа БРИКС</a>
  <a href="aaoifi.html" class="header-link mb-1 my-md-2 col-12 col-md-3 col-lg-2 text-center text-md-start" id="nav-aaoifi">Стандарты РФ По Принципам AAOIFI</a>
  <a href="showcase.html" class="header-link mb-1 my-md-2 col-12 col-md-4 col-lg-2 text-center text-md-start" id="nav-case">Мультимодальная Витрина <br> ЦФА/УЦП/гибрид</a>
</div>`;


function setHeader() {
  var header =  document.createElement("div");
  header.className = "header container mt-3"
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();



function updateActiveLink() {
  const headerLinks = document.querySelectorAll('.header-link');
  const currentUrl = window.location.href;

  headerLinks.forEach(link => {
    if (currentUrl.includes(link.getAttribute('href'))) {
      link.style.color = 'blue'; // устанавливаем синий цвет для текущей ссылки
    } else {
      link.style.color = 'black'; // устанавливаем черный цвет для остальных ссылок
    }
  });
}

window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', updateActiveLink);
window.addEventListener('popstate', updateActiveLink);

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


var footerText = 
`<div class="container">
  <div class="info row py-3">
    <p class="UNBCorp col-6 col-sm-5 text-start align-self-end">© 2023 All Right Reserved. UniBlock Corporation.</p>
    <p class="UNBInfo col-6 col-sm-5 text-end ms-auto">+7 993 400 75 75 <br>
      8 843 253 00 47<br>
      support@uniblock.pro<br>
      Республика Татарстан, Иннополис</p>
  </div>
</div>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.className = "footer navbar-fixed-bottom"
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();


