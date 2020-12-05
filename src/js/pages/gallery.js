class Gallery {
	namespace = 'gallery';

	beforeEnter = data => {
		console.log(data);
		console.log("Esta es la galeria");
	};
}

export default new Gallery();
