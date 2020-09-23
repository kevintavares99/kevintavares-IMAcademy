window.addEventListener('scroll', function(){
			var header = document.querySelector('header');
			header.classList.toogle('sticky', window.scrollY > 0);
		});