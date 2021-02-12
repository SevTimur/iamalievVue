Vue.component('headercomponent', {
  props: {
    cart: Array,
    favorite: Array,
  },
  template: `
  <div>
  <header class="header">
  <div class="container">
  <div class="page-header">
  <div class="logo">
  <a href="index.html">
  <div class="logo__img logo__img_992"></div>
  </a>
  </div>
  <div class="w-100">
  <div class="page-header__contacts">
  <button class="navbar-toggler page-header__button collapsed" type="button" data-toggle="collapse" data-target="#header-burger" aria-controls="navbarSupportedContent" aria-expanded="false"
  aria-label="Toggle navigation"></button>
  <a href="index.html" class="logo__img logo__img_768"></a>
  <div class="soc-icons soc-icons_hidden-md">
  <a href="#" class="soc-icons__item" style="background-image: url(img/fb-icon.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tg.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/inst.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tw.svg);">
  </a>
  </div>
  <div class="header-tel header-tel_top">
  <div class="header-tel__number">
  <a href="tel:+01234567890">0 123 456 78 90</a>
  </div>
  <div class="header-tel__zakaz-zvonka">
  <a href="#">Мы вам позвоним?</a>
  </div>
  </div>
  <div class="menu-controls menu-controls_top">
  <a data-toggle="modal" data-target="#button-modal-login" class="menu-controls__login b-color-white">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="24px" height="24px" viewBox="0 0 612 612">
  <g>
  <g id="_x36__30_">
  <g>
  <path d="M331.685,425.378c-7.478,7.479-7.478,19.584,0,27.043c7.479,7.478,19.584,7.478,27.043,0l131.943-131.962
  c3.979-3.979,5.681-9.276,5.412-14.479c0.269-5.221-1.434-10.499-5.412-14.477L358.728,159.56
  c-7.459-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l100.272,100.272H19.125C8.568,286.875,0,295.443,0,306
  c0,10.557,8.568,19.125,19.125,19.125h412.832L331.685,425.378z M535.5,38.25H153c-42.247,0-76.5,34.253-76.5,76.5v76.5h38.25
  v-76.5c0-21.114,17.117-38.25,38.25-38.25h382.5c21.133,0,38.25,17.136,38.25,38.25v382.5c0,21.114-17.117,38.25-38.25,38.25H153
  c-21.133,0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0,42.247,34.253,76.5,76.5,76.5h382.5c42.247,0,76.5-34.253,76.5-76.5
  v-382.5C612,72.503,577.747,38.25,535.5,38.25z" fill="#FB4B54"/>
  </g>
  </g>
  </g>
  </svg>
  <span>Войти</span>
  </a>
  <a href="favorites.html" class="menu-controls__izbr b-color-white">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.6 1C14.8 1 12.9 2.5 12 3.6C11.1 2.6 9.2 1 6.4 1C2.6 1 0 4.6 0 8.6C0 11.6 1.5 17.4 11.6 22.9C11.8 23 12.1 23 12.4 22.9C22.5 17.4 24 11.6 24 8.6C24 4.5 21.4 1 17.6 1ZM12 21.3C7.1 18.6 1.6 14.1 1.6 8.6C1.6 5.5 3.4 2.6 6.4 2.6C8.6 2.6 10.5 4 11.3 5.3C11.6 5.8 12.3 5.8 12.7 5.3C12.7 5.3 14.4 2.6 17.6 2.6C20.6 2.6 22.4 5.5 22.4 8.6C22.4 14.1 16.9 18.6 12 21.3Z" fill="#FB4B54" stroke="#EBEBEB" stroke-width="0.25" stroke-miterlimit="10"/>
  </svg>
  <span>{{ favorite.length }}</span>
  </a>
  <a href="cart.html" class="menu-controls__cart b-color-white">
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" fill="#FB4B54"/><path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" fill="#FB4B54"/></g></svg>
  <span>{{cart.length}}</span>
  </a>
  </div>
  </div>
  <div class="line-header">
  </div>
  <div class="page-header__navbar">
  <nav class="navbar navbar-expand-md">
  <div class="collapse navbar-collapse justify-content-start" id="header-burger">
  <ul class="navbar-nav justify-content-between w-100">
  <li class="navbar__items">
  <a href="index.html">
  Главная
  </a>
  </li>
  <li class="navbar__items">
  <a href="about-us.html">
  О компании
  </a>
  </li>
  <li class="navbar__items">
  <a href="product.html">
  Доставка и оплата
  </a>
  </li>
  <li class="navbar__items">
  <a href="products.html">
  Дроиды
  </a>
  </li>
  <li class="navbar__items">
  <a href="favorites.html">
  Драйверы
  </a>
  </li>
  <li class="navbar__items">
  <a href="search.html">
  Ограничители
  </a>
  </li>
  <li class="navbar__items">
  <a href="cart.html">
  Контакты
  </a>
  </li>
  </ul>
  <div class="line_navbar"></div>
  <div class="soc-icons soc-icons_show-md">
  <a href="#" class="soc-icons__item" style="background-image: url(img/fb-icon.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tg.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/inst.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tw.svg);">
  </a>
  </div>
  <div class="line_navbar hidden-sm"></div>
  <div class="header-tel header-tel_show576">
  <div class="header-tel__number">
  <a href="#">0 123 456 78 90</a>
  </div>
  <div class="header-tel__zakaz-zvonka">
  <a href="#">Мы вам позвоним?</a>
  </div>
  </div>
  </div>
  </nav>
  </div>
  </div>
  </div>
  </div>
  <div class="page-menu">
  <div class="container">
  <div class="menu-header">
  <a href="#sidebar" data-toggle="collapse" class="menu-header__catalog hov-white">
  <img src="img/burger.svg" alt="">
  <span>Каталог</span>
  </a>
  <div class="menu-search">
  <form>
  <input class="menu-search__input" type="text" name="" value="" placeholder="Поиск...">
  <a href="search.html" class="menu-search__button" type="button" name="button">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.2705 14.5735L11.4479 10.6129C12.4308 9.44901 12.9693 7.98455 12.9693 6.45999C12.9693 2.89801 10.0602 0 6.48465 0C2.90907 0 0 2.89801 0 6.45999C0 10.022 2.90907 12.92 6.48465 12.92C7.82697 12.92 9.10614 12.5167 10.1998 11.751L14.0514 15.7416C14.2124 15.9082 14.4289 16 14.6609 16C14.8806 16 15.0889 15.9166 15.2471 15.7649C15.5832 15.4428 15.5939 14.9085 15.2705 14.5735ZM6.48465 1.68522C9.12757 1.68522 11.2777 3.82713 11.2777 6.45999C11.2777 9.09286 9.12757 11.2348 6.48465 11.2348C3.84173 11.2348 1.69165 9.09286 1.69165 6.45999C1.69165 3.82713 3.84173 1.68522 6.48465 1.68522Z" fill="#FB4B54"/>
  </svg>
  </a>
  </form>
  </div>
  <div class="menu-controls menu-controls_bottom">
  <a data-toggle="modal" data-target="#button-modal-login" class="menu-controls__login b-color-white">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="24px" height="24px" viewBox="0 0 612 612">
  <g>
  <g id="_x36__30_">
  <g>
  <path d="M331.685,425.378c-7.478,7.479-7.478,19.584,0,27.043c7.479,7.478,19.584,7.478,27.043,0l131.943-131.962
  c3.979-3.979,5.681-9.276,5.412-14.479c0.269-5.221-1.434-10.499-5.412-14.477L358.728,159.56
  c-7.459-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l100.272,100.272H19.125C8.568,286.875,0,295.443,0,306
  c0,10.557,8.568,19.125,19.125,19.125h412.832L331.685,425.378z M535.5,38.25H153c-42.247,0-76.5,34.253-76.5,76.5v76.5h38.25
  v-76.5c0-21.114,17.117-38.25,38.25-38.25h382.5c21.133,0,38.25,17.136,38.25,38.25v382.5c0,21.114-17.117,38.25-38.25,38.25H153
  c-21.133,0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0,42.247,34.253,76.5,76.5,76.5h382.5c42.247,0,76.5-34.253,76.5-76.5
  v-382.5C612,72.503,577.747,38.25,535.5,38.25z" fill="#FB4B54"/>
  </g>
  </g>
  </g>
  </svg>
  <span>Войти</span>
  </a>
  <a href="favorites.html" class="menu-controls__izbr b-color-white">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.6 1C14.8 1 12.9 2.5 12 3.6C11.1 2.6 9.2 1 6.4 1C2.6 1 0 4.6 0 8.6C0 11.6 1.5 17.4 11.6 22.9C11.8 23 12.1 23 12.4 22.9C22.5 17.4 24 11.6 24 8.6C24 4.5 21.4 1 17.6 1ZM12 21.3C7.1 18.6 1.6 14.1 1.6 8.6C1.6 5.5 3.4 2.6 6.4 2.6C8.6 2.6 10.5 4 11.3 5.3C11.6 5.8 12.3 5.8 12.7 5.3C12.7 5.3 14.4 2.6 17.6 2.6C20.6 2.6 22.4 5.5 22.4 8.6C22.4 14.1 16.9 18.6 12 21.3Z" fill="#FB4B54" stroke="#EBEBEB" stroke-width="0.25" stroke-miterlimit="10"/>
  </svg>
  <span>{{ favorite.length }}</span>
  </a>
  <a href="cart.html" class="menu-controls__cart b-color-white">
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" fill="#FB4B54"/><path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" fill="#FB4B54"/></g></svg>
  <span>{{cart.length}}</span>
  </a>
  </div>
  </div>
  </div>
  </div>
  </header>
  <div class="sidebar collapse" id="sidebar">
  <div class="sidebar__header">
  <div class="sidebar__logo">
  <img src="img/sidebarlogo.png" alt="">
  </div>
  <button class="sidebar__close">
  <img src="img/closesidebar.svg" alt="">
  </button>
  </div>
  <div class="line_sidebar"></div>
  <div class="sidebar__left">
  <ul class="sidebar__list">
  <li class="sidebar__item">
  <a href="products.html" data-sub="#right_spisok_1">
  <img class="sidebar__icon" src="img/rep.svg" alt="">
  <span class="sidebar__name-item">Дроиды</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="products.html" data-sub="#right_spisok_2">
  <img class="sidebar__icon" src="img/rep.svg" alt="">
  <span class="sidebar__name-item">Гипердвигатели</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="products.html" data-sub="#right_spisok_3">
  <img class="sidebar__icon" src="img/rep.svg" alt="">
  <span class="sidebar__name-item">Гоночный под</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="products.html" data-sub="#right_spisok_4">
  <img class="sidebar__icon" src="img/rep.svg" alt="">
  <span class="sidebar__name-item">Снаряжение джедаев</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="products.html" data-sub="#right_spisok_5">
  <img class="sidebar__icon" src="img/rep.svg" alt="">
  <span class="sidebar__name-item">Звездные крейсеры</span>
  </a>
  </li>
  </ul>
  </div>
  <div class="sidebar__right">
  <div class="sidebar__header sidebar__header_right">
  <div class="sidebar__logo">
  <img src="img/sidebarlogo.png" alt="">
  </div>
  <button class="sidebar__close">
  <img src="img/closesidebar.svg" alt="">
  </button>
  </div>
  <div class="line_sidebar__right"></div>
  <div class="sidebar__back">
  <img src="img/strback.svg" alt="">
  <span>Назад</span>
  </div>
  <div class="line_sidebar__right"></div>
  <ul class="sidebar__list sidebar__list_right" id="right_spisok_1">
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/R2D2-mini.png" alt="">
  <span class="">Дроиды-секретари</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/R2D2-mini.png" alt="">
  <span class="">Астродроиды</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/R2D2-mini.png" alt="">
  <span class="">Боевые дроиды</span>
  </a>
  </li>
  </ul>
  <ul class="sidebar__list sidebar__list_right" id="right_spisok_2">
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/dssw.png" alt="">
  <span class="">Гипердвигатели 1</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/dssw.png" alt="">
  <span class="">Гипердвигатели 2</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/dssw.png" alt="">
  <span class="">Гипердвигатели 3</span>
  </a>
  </li>
  </ul>
  <ul class="sidebar__list sidebar__list_right" id="right_spisok_3">
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Сокол тысячелетия</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Тысячелетний сокол</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Сокол</span>
  </a>
  </li>
  </ul>
  <ul class="sidebar__list sidebar__list_right" id="right_spisok_4">
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Сокол</span>
  </a>
  </li>
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Сокол</span>
  </a>
  </li>
  </ul>
  <ul class="sidebar__list sidebar__list_right" id="right_spisok_5">
  <li class="sidebar__item">
  <a href="product.html">
  <img class="sidebar__icon" src="img/Falcon.png" alt="">
  <span class="">Сокол</span>
  </a>
  </li>
  </ul>
  </div>
  </div>
  <div class="sidebar-overlay sidebar__close"></div>
  </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
})

Vue.component('footercomponent', {
  template: `<footer>
  <div class="page-footer">
  <div class="container">
  <div class="top-footer">
  <div class="last-view">
  <div class="row">
  <div class="col-12 col-sm-6 col-lg-3 m-b-20">
  <a href="product.html" class="product-card product-card_short">
  <div class="product-card__img">
  <img src="img/r2d2.jpg" alt="">
  </div>
  <div class="product-card__content">
  <div class="product-card__name">
  R2-D2
  </div>
  <div class="product-card__info">
  <div class="product-price">
  <div class="product-price__old">
  15000 $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new">
  4000 $
  </div>
  <div class="product-price__quantity">
  за 1 шт
  </div>
  </div>
  </div>
  </div>
  </div>
  </a>
  </div>
  <div class="col-12 col-sm-6 col-lg-3 m-b-20">
  <a href="product.html" class="product-card product-card_short">
  <div class="product-card__img">
  <img src="img/c3po.png" alt="">
  </div>
  <div class="product-card__content">
  <div class="product-card__name">
  C-3PO
  </div>
  <div class="product-card__info">
  <div class="product-price">
  <div class="product-price__old">
  15000 $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new">
  4000 $
  </div>
  <div class="product-price__quantity">
  за 1 шт
  </div>
  </div>
  </div>
  </div>
  </div>
  </a>
  </div>
  <div class="col-12 col-sm-6 col-lg-3 m-b-20">
  <a href="product.html" class="product-card product-card_short">
  <div class="product-card__img">
  <img src="img/b2.jpg" alt="">
  </div>
  <div class="product-card__content">
  <div class="product-card__name">
  B2
  </div>
  <div class="product-card__info">
  <div class="product-price">
  <div class="product-price__old">
  15000 $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new">
  4000 $
  </div>
  <div class="product-price__quantity">
  за 1 шт
  </div>
  </div>
  </div>
  </div>
  </div>
  </a>
  </div>
  <div class="col-12 col-sm-6 col-lg-3 m-b-20">
  <a href="product.html" class="product-card product-card_short">
  <div class="product-card__img">
  <img src="img/r4.jpg" alt="">
  </div>
  <div class="product-card__content">
  <div class="product-card__name">
  R4-P17
  </div>
  <div class="product-card__info">
  <div class="product-price">
  <div class="product-price__old">
  9000 $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new">
  4000 $
  </div>
  <div class="product-price__quantity">
  за 1 шт
  </div>
  </div>
  </div>
  </div>
  </div>
  </a>
  </div>
  </div>
  </div>
  <div class="footer-info">
  <div class="footer-info__menu">
  <div class="footer-info__list">
  <h4><a href="" class="title-4">Каталог</a></h4>
  <ul class="footer-navbar">
  <li><a href="#">Дроиды</a></li>
  <li><a href="#">Гипердвигатели</a></li>
  <li><a href="#">Гоночный под</a></li>
  <li><a href="#">Снаряжение джедаев</a></li>
  <li><a href="#">Звездные крейсеры</a></li>
  </ul>
  </div>
  <div class="footer-info__list">
  <h4><a href="" class="title-4">Интернет-магазин</a></h4>
  <ul class="footer-navbar">
  <li><a href="#">Каталог</a></li>
  <li><a href="#">О компании</a></li>
  <li><a href="#">Доставка и оплата</a></li>
  <li><a href="#">Драйверы</a></li>
  <li><a href="#">Контакты</a></li>
  </ul>
  </div>
  </div>
  <div class="footer-info__contacts">
  <div class="footer-info__communication">
  <h4><a href="" class="title-4">Контакты</a></h4>
  <div class="f-s-13">Наш телефон</div>
  <a class="footer-info__tel-mail" href="tel:+01234567890">0 123 456 78 90</a>
  <div class="f-s-13">Наш e-mail</div>
  <a class="footer-info__tel-mail" href="mailto:pochta@pochta.ru">pochta@pochta.ru</a>
  </div>
  <div class="footer-info__socnet">
  <h4><a href="" class="title-4">Наши соцсети</a></h4>
  <div class="soc-icons soc-icons_footer">
  <a href="#" class="soc-icons__item" style="background-image: url(img/fb-icon.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tg.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/inst.svg);">
  </a>
  <a href="#" class="soc-icons__item" style="background-image: url(img/tw.svg);">
  </a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="bottom-footer">
  <div class="container">
  <div class="bottom-footer__info">
  <div>
  <span>2020</span>
  </div>
  <div>
  <span>Sev</span>
  </div>
  </div>
  </div>
  </div>
  </footer>`,
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
})

Vue.component('advantagescomponent', {
  template: `
  <div class="advantages">
  <div class="container">
  <div class="row">
  <div class="col-md-4 col-sm-12">
  <div class="advantages__item">
  <div class="advantages__image" style="background-image: url(img/rep.png);">
  </div>
  <div class="advantages__title">
  Продаем дроидов Республике
  </div>
  <div class="advantages__text">
  Нам без разницы кому продавать дроидов. Главное, чтобы платили. На рынке галактики с 100500 ДБЯ.
  </div>
  </div>
  </div>
  <div class="col-md-4 col-sm-12">
  <div class="advantages__item">
  <div class="advantages__image" style="background-image: url(img/sep.png);">
  </div>
  <div class="advantages__title">
  Продаем дроидов Сепаратистам
  </div>
  <div class="advantages__text">
  Нам без разницы кому продавать дроидов. Главное, чтобы платили. На рынке галактики с 100500 ДБЯ.
  </div>
  </div>
  </div>
  <div class="col-md-4 col-sm-12">
  <div class="advantages__item">
  <div class="advantages__image" style="background-image: url(img/empire.png);">
  </div>
  <div class="advantages__title">
  Продаем дроидов Империи
  </div>
  <div class="advantages__text">
  Нам без разницы кому продавать дроидов. Главное, чтобы платили. На рынке галактики с 100500 ДБЯ.
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
})

Vue.component('previewcomponent', {
  template: `
  <div class="preview">
  <div class="container">
  <div class="preview__row">
  <div class="preview__item preview__item_size_big">
  <div class="single-slider">
  <div class="single-slider__item" style="background-image: url(img/krauler.jpg);">
  </div>
  <div class="single-slider__item" style="background-image: url(img/lavka.jpg);">
  </div>
  </div>
  </div>
  <div class="preview__item promo-image">
  <div class="promo-image__img dark-gradient">
  </div>
  </div>
  </div>
  </div>
  </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
})


Vue.component('productcompoment', {
  props: {
    product: Object,
    index: Number,
  },
  template: `
  <a  class="product-card">
  <object>
  <a class="izbr-button"
  @click="favoriteAdd(index)">
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M14.5818 1C12.2909 1 10.7363 2.22727 9.99994 3.12727C9.26358 2.30909 7.70904 1 5.41813 1C2.30904 1 0.181763 3.94546 0.181763 7.21818C0.181763 9.67273 1.40904 14.4182 9.67267 18.9182C9.83631 19 10.0818 19 10.3272 18.9182C18.5909 14.4182 19.8181 9.67273 19.8181 7.21818C19.8181 3.86364 17.6909 1 14.5818 1ZM9.99994 17.6091C5.99085 15.4 1.49085 11.7182 1.49085 7.21818C1.49085 4.68182 2.96358 2.30909 5.41813 2.30909C7.21813 2.30909 8.77267 3.45455 9.42722 4.51818C9.67267 4.92727 10.2454 4.92727 10.5727 4.51818C10.5727 4.51818 11.9636 2.30909 14.5818 2.30909C17.0363 2.30909 18.509 4.68182 18.509 7.21818C18.509 11.7182 14.009 15.4 9.99994 17.6091Z" fill="#FB4B54" stroke="white" stroke-width="0.25" stroke-miterlimit="10"/>
  </g>
  <rect x="19.8182" y="13.6235" width="4.20779" height="9.81818" rx="2" transform="rotate(90 19.8182 13.6235)" fill="white"/>
  <rect x="12.8051" y="10.8182" width="4.20779" height="9.81818" rx="2" fill="white"/>
  <rect x="18.4156" y="15.0259" width="1.4026" height="7.01299" rx="0.701299" transform="rotate(90 18.4156 15.0259)" fill="#FB4B54"/>
  <rect x="14.2078" y="12.2206" width="1.4026" height="7.01299" rx="0.701299" fill="#FB4B54"/>
  <defs>
  <clipPath id="clip0">
  <rect width="19.6364" height="19.6364" fill="white" transform="translate(0.181763 0.181824)"/>
  </clipPath>
  </defs>
  </svg>
  </a>
  </object>
  <object>
  <a data-toggle="modal" data-target="#button_tovar" class="product-card__search d-flex">
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.3617 12.7518L10.017 9.28631C10.8769 8.26788 11.3481 6.98648 11.3481 5.65249C11.3481 2.53576 8.8027 0 5.67407 0C2.54544 0 0 2.53576 0 5.65249C0 8.76923 2.54544 11.305 5.67407 11.305C6.8486 11.305 7.96787 10.9521 8.92482 10.2821L12.295 13.7739C12.4358 13.9196 12.6253 14 12.8283 14C13.0205 14 13.2028 13.927 13.3412 13.7943C13.6353 13.5124 13.6447 13.045 13.3617 12.7518ZM5.67407 1.47456C7.98662 1.47456 9.86795 3.34873 9.86795 5.65249C9.86795 7.95625 7.98662 9.83043 5.67407 9.83043C3.36152 9.83043 1.48019 7.95625 1.48019 5.65249C1.48019 3.34873 3.36152 1.47456 5.67407 1.47456Z" fill="#FB4B54"/>
  </svg>
  </a>
  </object>
  <div class="product-card__img">
  <img :src="product.productImage" alt="">
  </div>
  <div class="product-card__content">
  <div class="product-card__name">
  {{ product.productName }}
  </div>
  <div class="product-card__info">
  <div class="product-price">
  <div class="product-price__old">
  {{ product.productOldPrice }} $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new">
  {{ product.productPrice }} $
  </div>
  <div class="product-price__quantity">
  {{ product.productQuantity }}
  </div>
  </div>
  </div>
  <object>
  <a data-toggle="modal" data-target="#button-tovar-v-korzine" class="in-cart"
  @click="modalInCart(index);productInCart(index)"
  >
  В корзину
  </a>
  </object>
  </div>
  </div>
  </a>
  `,
  data() {
    return {

    }
  },
  methods: {
    productInCart: function(index) {
      this.$emit('product-in-cart', index);
    },
    modalInCart:  function(index) {
      this.$emit('modal-in-cart', index)
    },
    favoriteAdd: function (index) {
      this.$emit('favorite-add', index)
    }
  },
  computed: {

  }
})

Vue.component('productkor', {
  props: ['modalprod'],
  template: `
  <div class="product-in-cart modal fade" id="button-tovar-v-korzine" tabindex="-1" role="dialog" aria-labelledby="tovar-v-korzine" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title" id="tovar-v-korzine">Товар добавлен в корзину</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  </div>
  <div class="modal-body">
  <div class="row">
  <div class="col-6">
  <div class="product-in-cart__img d-flex">
  <img :src="modalprod.productImage" alt="">
  </div>
  </div>
  <div class="col-6">
  <div class="product-in-cart__name">{{ modalprod.productName }}</div>
  <div class="product-price product-price_modal">
  <div class="product-price__old product-price__old_modal">
  {{ modalprod.productOldPrice }} $
  </div>
  <div class="product-price__actual">
  <div class="product-price__new product-price__new_modal">
  {{ modalprod.productPrice }} $
  </div>
  <div class="product-price__quantity">
  {{ modalprod.productQuantity }}
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="d-flex w-100 justify-content-between m-t-15">
  <button class="product-in-cart__button product-in-cart__button_left hov-white">
  <a href="cart.html"
  @click="asdasdasd(modalprod)"
  >Перейти в корзину</a>
  </button>
  <button class="product-in-cart__button product-in-cart__button_right hov-white" data-dismiss="modal">
  Продолжить покупки
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  `,
  data() {
    return {
    }
  },
  methods: {
    asdasdasd:  function() {

    },
  },
  computed: {

  }
})

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    favorite: [],
    modalprod: {},
    products: [
      {
        productId: 1,
        productIzbr: 0,
        productCart: 0,
        productName: "C-3PO",
        productImage: "./img/c3po.png",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
      {
        productId: 2,
        productIzbr: 0,
        productCart: 0,
        productName: "R2-D2",
        productImage: "./img/r2d2.jpg",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
      {
        productId: 3,
        productIzbr: 0,
        productCart: 0,
        productName: "R4-P17",
        productImage: "./img/r4.jpg",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
      {
        productId: 4,
        productIzbr: 0,
        productCart: 0,
        productName: "C1-10P",
        productImage: "./img/chopper.jpg",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
      {
        productId: 5,
        productIzbr: 0,
        productCart: 0,
        productName: "B1",
        productImage: "./img/b1.jpg",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
      {
        productId: 6,
        productIzbr: 0,
        productCart: 0,
        productName: "B2",
        productImage: "./img/b2.jpg",
        productLink: "/product.html",
        productOldPrice: "15000",
        productPrice: "4000",
        productQuantity: "за 1 шт"
      },
    ],
  },
  methods: {
    favoriteadd(index) {
      this.favorite.push(this.products[index].productId);
    },
    productincart(index) {
      this.cart.push(this.products[index].productId);
    },
    modalincart(index) {
      this.modalprod = this.products[index];
    }
  }
})







function mainslider() {
  $('.single-slider').slick({
    arrows: true,
    dots:true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
};

function mouseenterrr() {
  $(".navbar__items a").hover(function(){
    $(this).css({"color":"#FB4B54","text-decoration":"none"});
  },
  function(){
    $(this).css("color", "#000000");
  });
};
function svghover() {
  $(".menu-controls__login").hover(function(){
    $(".menu-controls__login svg path").css("fill", "#0A2463");
  },
  function(){
    $(".menu-controls__login svg path").css("fill", "#FB4B54");
  });
  // Лупа меняет цвет
  $(".menu-search__button").hover(function(){
    $(".menu-search__button svg path").css("fill", "#0A2463");
  },
  function(){
    $(".menu-search__button svg path").css("fill", "#FB4B54");
  });

  $(".menu-controls__izbr").hover(function(){
    $(".menu-controls__izbr svg path").css("fill", "#0A2463");
  },
  function(){
    $(".menu-controls__izbr svg path").css("fill", "#FB4B54");
  });
  $(".menu-controls__cart").hover(function(){
    $(".menu-controls__cart svg path").css("fill", "#0A2463");
  },
  function(){
    $(".menu-controls__cart svg path").css("fill", "#FB4B54");
  });
};

function tovarislider() {
  $('.multiple-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 605,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  $('.slider-controls .slider-controls__prev').click(function() {
    $('.multiple-slider').slick('slickPrev');
  });
  $('.slider-controls .slider-controls__next').click(function() {
    $('.multiple-slider').slick('slickNext');
  });

};

function tovarinamesmvse() {
  $('.see-all__content').hover(function(){
    $(this).css({"background-color":"#EBEBEB","border-radius":"50px","color":"black"});
  },
  function(){
    $(this).css("background-color", "white");
  });
  $('.see-all__content a').hover(function(){
    $(this).css({"color":"black"});
  },
  function(){
    $(this).css();
  });
};

function sidebaroverlay() {
  $('.menu-header__catalog').on('click', function () {
    $('.sidebar-overlay').addClass('active');
    $('html').css('overflow', 'hidden');
    $('body').css('overflow', 'hidden');
  });
};

function sidebaroverlayoff() {
  $('.sidebar__close').on('click', function () {
    $('.sidebar').removeClass('show');
    $('.sidebar-overlay').removeClass('active');
    $('html').css('overflow', 'visible');
    $('body').css('overflow', 'visible');
  });
  $('.sidebar__back').on('click', function () {
    $('.sidebar__right').removeClass('active');
  });
};

function secondsidebar() {
  if ($(window).width() > 1199) {
    $('.sidebar__left .sidebar__item a').on('mouseenter', function () {
      $('.sidebar__right').addClass('active');
      $('.sidebar__list_right').hide();
      $($(this).data('sub')).show();
    })
    $('.sidebar__right').on('mouseleave', function () {
      $('.sidebar__right').removeClass('active');
    })
  } else if ($(window).width() > 575 && $(window).width() < 1200) {
    $('.sidebar__left .sidebar__item a').on('click', function () {
      $('.sidebar__right').addClass('active');
      $('.sidebar__list_right').hide();
      $($(this).data('sub')).show();
      return false;
    })
    $('.sidebar__right').on('mouseleave', function () {
      $('.sidebar__right').removeClass('active');
    })
  } else if ($(window).width() < 576) {
    $('.sidebar__left .sidebar__item a').on('click', function () {
      $('.sidebar__right').addClass('active');
      $('.sidebar__list_right').hide();
      $($(this).data('sub')).show();
      return false;
    })
    $('.sidebar__right').on('mouseleave', function () {
      $('.sidebar__right').removeClass('active');
    })
  }
}

function tovarslider() {
  $('.product-slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  $('.product-slider-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider-big',
    arrows: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
}

function modalslider() {
  function initmodalslider() {
    $('.modal-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    });
  }
  $('.prod-preview').on('shown.bs.modal', initmodalslider);
}


$(document).ready(function() {
  mainslider();
  mouseenterrr();
  svghover();
  tovarislider();
  tovarinamesmvse();
  sidebaroverlay();
  sidebaroverlayoff();
  secondsidebar();
  tovarslider();
  modalslider();
});



window.onload = function () {

  // Сортировка по цене
  function sortPriceDesc() {
    var items = document.querySelectorAll('.product-catalog .product-card');
    var parent = document.querySelector('.product-catalog');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.product-price__new').textContent.replace('$', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a < b) return 1;
      if (a > b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  function sortPriceAsc() {
    var items = document.querySelectorAll('.product-catalog .product-card');
    var parent = document.querySelector('.product-catalog');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.product-price__new').textContent.replace('$', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a > b) return 1;
      if (a < b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  document.querySelector('.js-filter-price').addEventListener('click', function (e) {
    e.preventDefault();
    if (!this.classList.contains('filter__item_desc')) {
      sortPriceDesc();
      this.classList.add('filter__item_desc');
      this.classList.remove('filter__item_asc');
    } else {
      sortPriceAsc();
      this.classList.remove('filter__item_desc');
      this.classList.add('filter__item_asc');
    }
  });

  // Сортировка по имени
  function sortNameDesc() {
    var items = document.querySelectorAll('.product-catalog .product-card');
    var parent = document.querySelector('.product-catalog');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.getAttribute('id'));
      var itemValue = item.querySelector('.product-card__name').textContent.trim();
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = a.value;
      b = b.value;
      if (a < b) return 1;
      if (a > b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  function sortNameAsc() {
    var items = document.querySelectorAll('.product-catalog .product-card');
    var parent = document.querySelector('.product-catalog');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.getAttribute('id'));
      var itemValue = item.querySelector('.product-card__name').textContent.trim();
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }
    function compareNumeric(a, b) {
      a = a.value;
      b = b.value;
      if (a > b) return 1;
      if (a < b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  document.querySelector('.js-filter-age').addEventListener('click', function (e) {
    e.preventDefault();
    if (!this.classList.contains('filter__item_desc')) {
      sortNameAsc();
      this.classList.add('filter__item_desc');
      this.classList.remove('filter__item_asc');
    } else {
      sortNameDesc();
      this.classList.remove('filter__item_desc');
      this.classList.add('filter__item_asc');
    }
  });
}
