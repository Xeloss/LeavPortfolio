import '../scss/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Art from './pages/art';
import Contact from './pages/contact';
import DefaultTransition from './transitions/defaultTransition';
import Bio from './pages/bio';
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper/core';

barba.init({
	views: [
		Home,
        Gallery,
        Art,
        Contact,
        Bio
    ],
    transitions: [DefaultTransition]
});

barba.hooks.after(() => {
    try
    {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    }
    catch{
        console.info("Analytics is not loaded");
    }
  });

SwiperCore.use([
    Navigation,
    Pagination,
    Zoom
]);
