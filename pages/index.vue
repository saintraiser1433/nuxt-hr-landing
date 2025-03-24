<template>
    <Header/>
   
        <main class="container mx-auto w-full py-5 mt-24">
            <Hero></Hero>



            <!-- for joblist -->
            <div
                class="container flex flex-col mx-auto justify-center items-center max-w-sm lg:max-w-4xl mt-24 mb-8 gap-2">

                <h2 class="text-balance text-center text-2xl lg:text-3xl font-bold">
                    ✨ SEAIT JOB OPPORTUNITIES

                </h2>
                <span class="text-sm text-center  text-gray-400">Unlock opportunities, build your future, and grow with
                    SEAIT.</span>
            </div>
            <div class="container mx-auto w-full items-center justify-center px-8">
                <TracingBeam>
                    <BentoGrid class="mx-auto">

                        <BentoGridItem v-for="(item, index) in cardItem" :key="index">
                            <template #header>
                                <div class="flex size-full space-x-4">
                                    <NuxtImg class="flex size-full flex-1 rounded-md" src="/images/hero.jpg"></NuxtImg>
                                </div>
                            </template>

                            <template #title>
                                <div>
                                    <strong class="text-sm"> Availability : 1</strong>
                                </div>

                                <strong>{{ item.title }}</strong>
                            </template>
                            <template #description>
                                <RainbowButton>Apply now!</RainbowButton>

                            </template>
                        </BentoGridItem>
                    </BentoGrid>
                </TracingBeam>
            </div>


            <div class="flex w-full max-w-7xl flex-col items-center justify-center p-4">
                <div class="flex flex-col gap-4 py-12 text-center">
                    <div class="text-3xl font-semibold sm:text-4xl">What Our Community Says About Us</div>
                    <div class="text-lg font-light sm:text-xl">
                        Real stories, real impact – see what makes <strong>SEAIT</strong> special
                    </div>
                </div>
                <div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <!-- First Marquee -->
                    <Marquee pause-on-hover class="[--duration:20s]">
                        <ReviewCard v-for="review in firstRow" :key="review.username" :img="review.img"
                            :name="review.name" :username="review.username" :body="review.body" />
                    </Marquee>

                    <!-- Second Marquee (reverse) -->
                    <Marquee reverse pause-on-hover class="[--duration:20s]">
                        <ReviewCard v-for="review in secondRow" :key="review.username" :img="review.img"
                            :name="review.name" :username="review.username" :body="review.body" />
                    </Marquee>

                    <!-- Left Gradient -->
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background">
                    </div>

                    <!-- Right Gradient -->
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background">
                    </div>
                </div>
            </div>

        </main>




        <footer class="dark:bg-background bg-background mt-10 w-full shadow-lg border-t  px-3">
            <div class="container mx-auto flex justify-center items-center">
                <div class="flex flex-col justify-center items-center">
                    <div class="flex py-4 gap-5 ">
                        <a href="www.facebook.com" target="_blank"><svg-icon class="cursor-pointer" name="icon/facebook"
                                width="32" height="32"></svg-icon></a>
                        <a href="www.twitter.com" target="_blank"><svg-icon href="twitter.com" class="cursor-pointer"
                                name="icon/twitter" width="32" height="32"></svg-icon></a>
                        <a href="www.gmail.com" target="_blank"><svg-icon href="google.com" class="cursor-pointer"
                                name="icon/mail" width="32" height="32"></svg-icon></a>
                    </div>

                    <p class="text-xs text-center">Copyright © 2020-2025. South East Asian Institute of Technology Inc.
                        All
                        Rights
                        Reserved.
                    </p>
                    <p class="text-xs">Developed by: Jannnyy Tech Solutions</p>
                </div>

            </div>

        </footer>

</template>

<script setup lang="ts">
// definePageMeta({
//     colorMode:'dark'
// })

const reviews = [
  {
    "name": "Mr. Santos",
    "username": "@santos_teach",
    "body": "SEAIT provides an amazing environment for both students and teachers. Masarap magturo dito! 🎓",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Ms. Rivera",
    "username": "@rivera_educator",
    "body": "Napakasuporta ng admin sa mga guro. It really makes teaching fulfilling! 📚",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Dr. Mendoza",
    "username": "@mendoza_acad",
    "body": "Working at SEAIT has been a career-changing experience. Ang ganda ng culture dito! 🏫",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Prof. Garcia",
    "username": "@garcia_mentor",
    "body": "Ang saya magturo sa SEAIT! The students are very eager to learn, and the faculty is like a family. 👨‍🏫",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Sir Dela Cruz",
    "username": "@delacruz_faculty",
    "body": "Dito sa SEAIT, hindi lang guro kundi isang inspirasyon ka rin sa mga estudyante! 🌟",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Ma'am Flores",
    "username": "@flores_teach",
    "body": "I've been teaching here for years, and SEAIT never fails to support its educators. Sulit ang effort! 💡",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  },
  {
    "name": "Engr. Villanueva",
    "username": "@villanueva_tech",
    "body": "SEAIT is one of the best places to teach engineering. Updated ang facilities at maayos ang sistema! 🛠️",
    "img": "https://inspira-ui.com/images/x-logo.svg"
  }
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));


const cardItem = [
    {
        title: "IT Instructor",
        description: "Explore the birth of groundbreaking ideas and inventions.",
    },
    {
        title: "Project Technical Assistant ",
        description: "Dive into the transformative power of technology.",
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and experience design.",
    },
    {
        title: "The Power of Communication",
        description: "Understand the impact of effective communication in our lives.",
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment. ",
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
];

const connectItems = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

const dummyContent = [
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: [
            "Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo pariatur.",
            "Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.",
            "Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia adipisicing aliquip proident officia sunt.",
        ],
        badge: "Vue",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: [
            "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
            "In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.",
        ],
        badge: "Nuxt",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: [
            "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
        ],
        badge: "Inspira UI",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


</script>