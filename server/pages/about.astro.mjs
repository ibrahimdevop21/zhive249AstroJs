/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_C-UG3DlI.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zhive249.com");
const $$TeamGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamGrid;
  const { members } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${members.map((member) => renderTemplate`<div class="group relative"> <div class="relative overflow-hidden rounded-2xl bg-navy-600/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"> <!-- Member Image with Gradient Overlay --> <div class="relative aspect-[4/5] overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent z-10"></div> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"> <!-- Member Info Overlay --> <div class="absolute bottom-0 left-0 right-0 z-20 p-6 transform transition-transform duration-300"> <h3 class="text-2xl font-bold text-white mb-1"> ${member.name} </h3> <p class="text-primary-500 font-medium mb-4"> ${member.role} </p> <p class="text-navy-200 line-clamp-3 text-sm"> ${member.bio} </p> </div> </div> <!-- Social Links --> <div class="absolute right-4 top-4 z-30 flex flex-col space-y-2"> ${member.social.linkedin && renderTemplate`<a${addAttribute(member.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">LinkedIn</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a>`} ${member.social.twitter && renderTemplate`<a${addAttribute(member.social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">Twitter</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path> </svg> </a>`} ${member.social.github && renderTemplate`<a${addAttribute(member.social.github, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">GitHub</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> </a>`} ${member.social.email && renderTemplate`<a${addAttribute(`mailto:${member.social.email}`, "href")} class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">Email</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path> </svg> </a>`} ${member.social.instagram && renderTemplate`<a${addAttribute(member.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">Instagram</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path> </svg> </a>`} ${member.social.behance && renderTemplate`<a${addAttribute(member.social.behance, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">Behance</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"></path> </svg> </a>`} ${member.social.dribbble && renderTemplate`<a${addAttribute(member.social.dribbble, "href")} target="_blank" rel="noopener noreferrer" class="rounded-full bg-navy-800/80 p-2 text-navy-200 backdrop-blur-sm transition-all duration-300 hover:bg-primary-500 hover:text-white"> <span class="sr-only">Dribbble</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"></path> </svg> </a>`} </div> </div> </div>`)} </div>`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/TeamGrid.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: "50+", label: "Years Combined Experience", icon: "\u{1F3C6}" },
    { value: "100+", label: "Projects Completed", icon: "\u{1F3AF}" },
    { value: "50+", label: "Happy Clients", icon: "\u{1F60A}" }
  ];
  const teamMembers = [
    {
      name: "Ibrahim",
      role: "Technical Director",
      bio: "The wizard behind the code who turned coffee into successful businesses! With a track record in export/import, wholesale, and web development, Ibrahim can build anything from international trade routes to stunning websites. When not crafting elegant code, he's probably dreaming up the next big e-commerce revolution or debugging with a smile. \u{1F680}\u2615",
      image: "/team/ibrahim.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/ibrahimdevop21",
        github: "https://github.com/ibrahimdevop21",
        email: "ibrahim.mohamed@zhive249.com"
      }
    },
    {
      name: "Yousef (Joe)",
      role: "Sales Director",
      bio: "Known to everyone as Joe, he's our master of making connections and closing deals! With his charismatic approach and deep understanding of client needs, Joe can sell ice to penguins - but he'd rather help businesses achieve their digital dreams. \u{1F91D}\u2728",
      image: "/team/joe.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/yousif-el-hosiny/",
        email: "yousif.elhosiny@zhive249.com"
      }
    },
    {
      name: "Ahmed",
      role: "Flutter Developer & Jack of All Trades",
      bio: "Meet our resident joker and problem-solving wizard! \u{1F0CF} Whether you need a slick Flutter app, market insights, or content magic, Ahmed's your go-to guy. He's like our Swiss Army knife - equipped with coding skills, creative thinking, and a dash of humor to make every challenge fun. Need help? Just look for the guy with all the answers and the contagious laugh! \u{1F4A1}\u2728",
      image: "/team/ahmed.jpeg",
      social: {
        email: "ahmed.ibrahim@zhive249.com",
        github: "https://github.com/shegzibar",
        linkedin: "https://www.linkedin.com/in/ahmed-esa-46488a172/"
      }
    },
    {
      name: "Shahd",
      role: "Public Relations Director",
      bio: "Our ray of sunshine and master of connections! With her infectious energy and quick wit, Shahd keeps our office buzzing with laughter. But watch out when the glasses come off - that's when you know she means business! \u{1F60A} When not brightening everyone's day, she's crafting the perfect PR strategies. \u2728",
      image: "/team/shahd.jpeg",
      social: {
        email: "shahd.minalla@zhive249.com",
        instagram: "https://www.instagram.com/shahdminalla"
      }
    },
    {
      name: "Waad Khalid",
      role: "Administrative Commander & Project Manager",
      bio: "Meet our deadline ninja with the sweetest smile! \u{1F31F} Waad keeps our projects running like clockwork with her perfect blend of charm and efficiency. She'll kindly remind you about your tasks... until you miss a deadline - then watch out for that same smile, because it means business! \u{1F4CA} The secret to staying on her good side? Simple: just get your work done on time! \u23F0\u2728",
      image: "/team/waad-kh.jpeg",
      social: {
        email: "waad.minalla@zhive249.com",
        linkedin: "https://www.linkedin.com/in/waad-khalid-21495a242/"
      }
    },
    {
      name: "Waad",
      role: "Finance & HR Manager",
      bio: "Need a new laptop or tool? Waad's your financial fairy godmother! \u{1F4AB} As our master of budgets and keeper of resources, she makes sure everyone has what they need to shine. Just make sure to justify that fancy new gadget - she's got a keen eye for both numbers and talent! \u{1F4BC} When she's not managing finances, she's taking care of our team as our HR extraordinaire. \u{1F31F}",
      image: "/team/waad.jpeg",
      social: {
        email: "waad.ibrahim@zhive249.com"
      }
    },
    {
      name: "Shams",
      role: "Senior Designer & UI/UX Director",
      bio: "Our creative mastermind who turns pixels into pure magic! \u2728 With an eye for detail and a passion for user-centered design, Shams crafts digital experiences that not only look stunning but feel intuitive and delightful. From wireframes to polished interfaces, she's the artist behind our visual storytelling. \u{1F3A8} When she's not pushing pixels to perfection, she's dreaming up new ways to make our users smile! \u{1F31F}",
      image: "/team/shams.jpeg",
      social: {}
    }
  ];
  const values = [
    {
      icon: "\u26A1",
      title: "Efficiency",
      description: "Delivering exceptional results through streamlined strategies and innovative solutions. We optimize processes and leverage cutting-edge technology to ensure maximum impact with minimal resources."
    },
    {
      icon: "\u{1F3DB}\uFE0F",
      title: "Strength and Stability",
      description: "Building enduring foundations and trusted partnerships, we ensure reliability and long-term success in every project we undertake. Our commitment to stability drives sustainable growth."
    },
    {
      icon: "\u{1F91D}",
      title: "Harmony and Unity",
      description: "Creating synergy among teams, brands, and audiences to deliver cohesive, impactful campaigns."
    },
    {
      icon: "\u{1F3A8}",
      title: "Modern Design Appeal",
      description: "Combining contemporary trends with timeless aesthetics to captivate and inspire."
    },
    {
      icon: "\u{1F504}",
      title: "Adaptability",
      description: "Staying ahead of industry trends, quickly adjusting to market demands, and providing tailored solutions for diverse needs."
    },
    {
      icon: "\u{1F4A1}",
      title: "Innovation",
      description: "Continuously exploring new ideas and technologies to push boundaries and redefine marketing excellence."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Zhive249", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-20" data-astro-cid-kh7btl4r> <!-- Hero Section with Animated Gradient --> <section class="relative py-32 overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-navy-800 to-navy-900 animate-gradient" data-astro-cid-kh7btl4r></div> <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="relative" data-astro-cid-kh7btl4r> <div class="mx-auto max-w-3xl text-center" data-astro-cid-kh7btl4r> <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-8" data-astro-cid-kh7btl4r>
Our Story
</h1> <p class="text-lg leading-8 text-navy-200 mb-8" data-astro-cid-kh7btl4r>
Born from a shared vision of excellence, Zhive249 brings together talented freelancers from across the Arab world. We are developers, designers, marketers, and strategists who discovered that our combined expertise creates something truly extraordinary.
</p> <p class="text-lg leading-8 text-navy-200 mb-8" data-astro-cid-kh7btl4r>
For the past year, we've been working together as a unified team, bringing over 50 years of combined real-world experience from major Arab markets including Saudi Arabia, UAE, Jordan, Sudan, and Egypt. This diverse regional expertise gives us unique insights into local markets while maintaining global standards.
</p> <p class="text-lg leading-8 text-navy-200 mb-12" data-astro-cid-kh7btl4r>
What started as individual journeys has evolved into a powerful collective. We united with a singular mission: to harness our diverse talents, cultural insights, and technical expertise to deliver outstanding digital solutions that transcend borders.
</p> <div class="flex justify-center" data-astro-cid-kh7btl4r> <a href="/contact" class="rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-300" data-astro-cid-kh7btl4r>
Contact Us
</a> </div> </div> </div> ` })} </section> <!-- Stats Section --> <section class="py-24 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-kh7btl4r> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-kh7btl4r> <div class="relative h-full" data-astro-cid-kh7btl4r> <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-25" data-astro-cid-kh7btl4r></div> <div class="relative bg-navy-800/50 backdrop-blur-sm rounded-lg p-8 h-full hover:bg-navy-700/50 transition-all duration-300 flex flex-col items-center justify-center" data-astro-cid-kh7btl4r> <dt class="text-5xl mb-4" data-astro-cid-kh7btl4r>${stat.icon}</dt> <dd class="text-4xl font-bold tracking-tight text-primary-400 mb-2" data-astro-cid-kh7btl4r>${stat.value}</dd> <dt class="text-base text-navy-200" data-astro-cid-kh7btl4r>${stat.label}</dt> </div> </div> </div>`)} </div> ` })} </section> <!-- Values Section with Hover Effects --> <section class="py-24 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto mb-16 relative" data-astro-cid-kh7btl4r> <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent" data-astro-cid-kh7btl4r>Our Values</h2> <p class="text-lg text-navy-200" data-astro-cid-kh7btl4r>
These core values drive our mission and shape how we deliver exceptional results for our clients.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative" data-astro-cid-kh7btl4r> ${values.map((value) => renderTemplate`<div class="group relative h-full" data-astro-cid-kh7btl4r> <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" data-astro-cid-kh7btl4r></div> <div class="relative h-full p-8 bg-navy-800/90 backdrop-blur-sm rounded-lg hover:bg-navy-700/90 transition-all duration-300 flex flex-col" data-astro-cid-kh7btl4r> <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" data-astro-cid-kh7btl4r>${value.icon}</div> <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors" data-astro-cid-kh7btl4r>${value.title}</h3> <p class="text-navy-200 leading-relaxed flex-grow" data-astro-cid-kh7btl4r>${value.description}</p> </div> </div>`)} </div> ` })} </section> <!-- Team Section with Enhanced Cards --> <section class="py-24 bg-navy-800 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="mx-auto max-w-2xl text-center" data-astro-cid-kh7btl4r> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl" data-astro-cid-kh7btl4r>Meet Our Team</h2> <p class="mt-4 text-lg text-navy-300" data-astro-cid-kh7btl4r>
Our diverse team of experts brings together years of experience and a passion for digital innovation.
</p> </div> ${renderComponent($$result3, "TeamGrid", $$TeamGrid, { "members": teamMembers, "data-astro-cid-kh7btl4r": true })} ` })} </section> <!-- Contact CTA Section --> <section class="py-24 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-navy-800 to-navy-900" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="relative max-w-3xl mx-auto text-center" data-astro-cid-kh7btl4r> <h2 class="text-4xl font-bold mb-6 text-white" data-astro-cid-kh7btl4r>Ready to Work Together?</h2> <p class="text-lg text-navy-200 mb-8" data-astro-cid-kh7btl4r>
Let's discuss how we can help your business grow in the digital landscape.
</p> <a href="/contact" class="inline-flex items-center px-8 py-4 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors duration-300" data-astro-cid-kh7btl4r>
Get in Touch
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-kh7btl4r> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-kh7btl4r></path> </svg> </a> </div> ` })} </section> </main> ` })} `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/about.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
