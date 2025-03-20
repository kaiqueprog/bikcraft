// Menu mobile
const menuMobile = document.querySelector('.mobile')
const menu = document.querySelector('.header-menu');

menuMobile.addEventListener('click', () => {
	menuMobile.classList.toggle('active');
	menu.classList.toggle('active');
});

// Mostrar onde eu estou
const links = document.querySelectorAll('.header-menu li a');

links.forEach((link) => {
	if (location.href.includes(link.href)) { // window
		link.classList.add('active'); 
	}
});

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach((p) => {
	const elemento = document.getElementById(p);
	if (elemento) elemento.checked = true;
});

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas a');

perguntas.forEach((pergunta) => {
	pergunta.addEventListener('click', (e) => {
		// console.log(e.currentTarget);Alvo clicado
		const controls = pergunta.getAttribute('area-controls');
		const resposta = document.getElementById(controls);

		resposta.classList.toggle('active');
		const ativo = resposta.classList.contains('active');

		resposta.getAttribute('area-expanded', ativo);
	});
});

// Galeria de bicicleta
const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem');

galeria.forEach((img) => {
	img.addEventListener('click', (e) => {
		const imagem = e.currentTarget;
		const media = matchMedia("(min-width: 1000px)").matches;
		if (media) {
			galeriaContainer.prepend(imagem) //ele pega o elemento e coloca ele em primeiro lugar no document
		}
	});
});

// Animação
if (window.SimpleAnime) {
	new SimpleAnime();
}