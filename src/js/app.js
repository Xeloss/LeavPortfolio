import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import Gallery from './pages/gallery';

barba.init({
	views: [
		Home,
		Gallery
	],
});
