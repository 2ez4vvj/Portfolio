let tl = gsap.timeline();
tl.from(".header",{
    x:-200,
    opacity: 0,
    duration: 0.7
});
tl.from(".fname",{
    opacity: 0,
    duration:0.5,
    x:-50,
});
tl.from(".mname",{
    opacity: 0,
    duration: 0.5,
    x:50
})
tl.from(".lname",{
    opacity: 0,
    duration: 0.5,
    x: -50
})
gsap.from("#projHead",{
    x: -50, 
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        scroller: "body",
        trigger: "#projHead",
        marker: true,
        start: "top 100%"
    }
})
gsap.from("#sms",{
    opacity: 0,
    duration: 0.5,
    x:-50,
    delay: 0.5
})
gsap.from("#currcon",{
    opacity: 0,
    duration: 0.5,
    x:50,
    delay: 0.5
})
gsap.from("#amazon-clone",{
    opacity: 0,
    duration: 0.5,
    x:-50,
    delay: 0.5
})
