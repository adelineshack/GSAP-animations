gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: 'none',
    duration: 4
});
const timeLine = gsap.timeline();

timeLine.to(".quad", {
    x: 1500,
    rotation: 360,
    // duration: 8
})

ScrollTrigger.create({
    animation: timeLine,
    trigger: ".red",
    // toggleActions: "restart pause none none",
    pin: true,
    scrub: 0.5
});
