export default [
  {
    layout: 'NoSidebar',
    title: 'About Title',
    route: '/about',
    icon: 'test-icon',
    roles: 'ADMIN,UNKNWON',
    name: 'About.vue'
  },
  {
    layout: 'Full',
    title: 'Home Title',
    route: '/',
    icon: 'test-icon',
    roles: 'ADMIN,UNKNWON',
    name: 'Home.vue'
  },
  {
    layout: 'Simple',
    title: 'Login Title',
    route: '/login',
    icon: 'test-icon',
    roles: '?',
    name: 'Login.vue'
  },
  {
    layout: 'NoSidebar',
    title: 'Profile Title',
    route: '/profile',
    icon: 'test-icon',
    roles: '?',
    name: 'Profile.vue'
  },
  {
    layout: 'Blank',
    title: 'Register Title',
    route: '/register',
    icon: 'test-icon',
    roles: '?',
    name: 'Register.vue'
  },
  {
    layout: 'Full',
    title: 'Contacts',
    route: '/contacts/add',
    name: 'contacts/Add.vue'
  },
  {
    layout: 'Full',
    title: 'Contacts',
    route: '/contacts/list',
    name: 'contacts/List.vue'
  }
]
