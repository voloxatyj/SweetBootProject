document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});

const t1 = new TimelineMax({ onUpdate: updatePercentage });
const t12 = new TimelineMax();
const controller = new ScrollMagic.Controller();

t1.from("#about", 0.5, { y: -200, opacity: 0 });
t1.from("#box", 1, { x: 200, opacity: 0 });
t1.from("#text", 1, { x: -200, opacity: 0 });
t1.from("#btn", 1, { x: -200, opacity: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".about")
  .setTween(t1)
  .addTo(controller);

function updatePercentage() {
  t1.progress();
  console.log(t1.progress());
}
