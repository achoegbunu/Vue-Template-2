const home = {
	template: `
	<div class= 'text-center'>
	<h1>Home</h1>
	<img class= 'img-fluid' src= 'img/home.jpeg'>
	<p>Something really cool</p>
	</div>
	`
}
const about = {
	template: `
	<div class= 'text-center'>
	<h1>About</h1>
	<img class= 'img-fluid' src= 'img/about.jpeg'>
	<p>Something really cooler than home</p>
	</div>
	`
}
const blog = {
	template: `
	<div class= 'text-center'>
	<h1>Blog</h1>
	<img class= 'img-fluid' src= 'img/blog.jpeg'>
	<p>If You Want To Know Then Be Sure to Check</p>
	</div>
	`
}
const contacts = {
	template: `
	<div class= 'text-center'>
	<h1>Contacts</h1>
	<img class= 'img-fluid' src= 'img/contacts.jpeg'>
	<p>Hit Me Up Would Ya</p>
	</div>
	`
}
const faq = {
	template: `
	<div class= 'text-center'>
	<h1>Faq</h1>
	<img class= 'img-fluid' src= 'img/faq.jpeg'>
	<p>Ask Away Folks</p>
	</div>
	`
}


const router = new VueRouter({
	routes: [
	{
		path: '/home',
		component: home
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/blog',
		component: blog
	},
	{
		path: '/contacts',
		component: contacts
	},
	{
		path: '/faq',
		component: faq
	}
	]
})
var routeTest = new Vue({
	router,
	el: '#app'
}).$mount('#app')

