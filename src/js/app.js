import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import Gallery from './pages/gallery';
import DefaultTransition from './transitions/defaultTransition';

barba.init({
	views: [
		Home,
		Gallery
    ],
    transitions: [DefaultTransition]
});
