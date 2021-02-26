import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Art from './pages/art';
import Contact from './pages/contact';
import DefaultTransition from './transitions/defaultTransition';
import Bio from './pages/bio';

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
