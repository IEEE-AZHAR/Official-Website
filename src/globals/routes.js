import HomePage from "modules/static-pages/home/components/page";
import AboutPage from "modules/static-pages/about/components/page";

import SingleServicePage from "modules/teamServices/components/singleServicePage";

import EventsListPage from "modules/events/components/eventsListPage";
import SingleEventPage from "modules/events/components/singleEventPage";

import BlogListPage from "modules/blog/components/blogListPage";
import SingleBlogPage from "modules/blog/components/singleBlogPage";

import ContactPage from "modules/contact/components/page";
import NotFoundPage from "shared/notFoundPage";

export default [
  { path: "/", component: HomePage, label: "Home" },
  { path: "/about-us", component: AboutPage, label: "About Us" },
  { path: "/services/:id", component: SingleServicePage },
  { path: "/events", component: EventsListPage, label: "Events" },
  { path: "/events/:id", component: SingleEventPage },
  { path: "/blog", component: BlogListPage, label: "Blog" },
  { path: "/blog/:id/:title", component: SingleBlogPage },
  { path: "/contact-us", component: ContactPage, label: "Contact Us" },
  { path: "/404", component: NotFoundPage },
];
