const home = {
	template: `
	<div class= 'text-center'>
	<h1>Home</h1>
	<img class= 'img-fluid' src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpnmk6_L8PLgeu7NR8iTBH6Py28ZtUxqU355fCR3pTtz_kdYQ'>
	<p>It All Starts From Here</p>
	</div>
	`
}
const about = {
	template: `
	<div class= 'text-center'>
	<h1>About</h1>
	<img class= 'img-fluid' src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9emAJRMCU5JRB01F3bHZ9Jv3fIz5WFFgSuPMW6eGwfAWgUdoj'>
	<p>Ask & You Shall Be Told</p>
	</div>
	`
}
const blog = {
	template: `
	<div class= 'text-center'>
	<h1>Blog</h1>
	<img class= 'img-fluid' src= 'http://socialmediasun.com/wp-content/uploads/2012/08/Blogspot-blog-icon.png'>
	<p>If You Want To Know Then Be Sure to Check</p>
	</div>
	`
}
const contacts = {
	template: `
	<div class= 'text-center'>
	<h1>Contacts</h1>
	<img class= 'img-fluid' src= 'https://www.dummies.com/wp-content/uploads/486973.image3.jpg'>
	<p>Hit Me Up Would Ya</p>
	</div>
	`
}
const faq = {
	template: `
	<div class= 'text-center'>
	<h1>Faq</h1>
	<img class= 'img-fluid' src= 'https://freedesignfile.com/upload/2014/01/Creative-3D-people-social-icon-vector-15.jpg'>
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

