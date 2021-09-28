let nodes = document.querySelectorAll(".nav-icon");
let focus = document.querySelector("#focus");

let set_focus = () => {

    let active_node;
    for (let node of nodes){
        if (node.classList.contains('active'))
            active_node = node;
    }

    let { width } = active_node.getBoundingClientRect();
    let t = active_node.getBoundingClientRect().top;
    let l = active_node.getBoundingClientRect().left;

    rem_value_for_px = width / 3.5;

    focus.style.setProperty("left", `${l - rem_value_for_px / 2}px`);
    focus.style.setProperty("top", `${t + rem_value_for_px / 4}px`);
}

for (let node of nodes) {
  node.addEventListener("click", () => {
    node.classList.add("active");

    for (not_node of nodes) {
      if (not_node != node) not_node.classList.remove("active");
    }

    let t = node.getBoundingClientRect().top;
    let l = node.getBoundingClientRect().left;

    focus.style.setProperty("left", `${l - rem_value_for_px / 2}px`);
    focus.style.setProperty("top", `${t + rem_value_for_px / 4}px`);
  });
}

window.addEventListener('resize', set_focus);

set_focus();

let content = document.querySelector('.content');

let logo = document.querySelector('.logo img');

content.addEventListener('scroll', () => {

  logo.style.transform = "rotate("+(content.scrollTop/3)+"deg)";
});