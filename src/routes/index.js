import { createRouter, createWebHistory } from 'vue-router'
import Home1 from "@/Pages/Home.vue"
import About from "@/Pages/About.vue"
import Services from "@/Pages/Services.vue"
import Why from "@/Pages/Why.vue"
import Team from "@/Pages/Team/Team.vue"
import TeamMember from "@/Pages/Team/TeamMember"
import courses from "@/Pages/courses/Course.vue"
import CoursePage from "@/Pages/courses/CoursePage.vue"
import Login from "@/Pages/Login"

const routes = [
  { path: '/', component: Home1 },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/why', component: Why },
  { 
    path: '/team', 
    component: Team,
    children: [
      { path: ':id', component: TeamMember }  // Nested route
    ]
  },
  { path: '/courses', component: courses },
  { path: '/courses/:id', component: CoursePage },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router