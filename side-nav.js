let nodes = document.querySelectorAll(".nav-icon");
let focus = document.querySelector("#focus");
let movement_fix_flag = false;

let capitalize = (word) =>  word[0].toUpperCase() + word.slice(1).toLowerCase();

let set_focus = () => {

    let active_node;
    for (let node of nodes){
        if (node.classList.contains('active'))
            active_node = node;
    }
    document.querySelector('title').innerText = `Portfolio | ${capitalize(active_node.href.split('#')[1])}`;

    let { width } = active_node.getBoundingClientRect();
    let t = active_node.getBoundingClientRect().top;
    let l = active_node.getBoundingClientRect().left;

    rem_value_for_px = width / 3.5;

    focus.style.setProperty("left", `${l - rem_value_for_px / 2}px`);
    focus.style.setProperty("top", `${t + rem_value_for_px / 4}px`);
}

for (let node of nodes) {
  node.addEventListener("click", (e) => {
    movement_fix_flag = true;
    node.classList.add("active");
    for (not_node of nodes) {
      if (not_node != node) not_node.classList.remove("active");
    }

    set_focus();
    setTimeout(() => movement_fix_flag = false, 900);
  });
}

window.addEventListener('resize', set_focus);

set_focus();

let content = document.querySelector('.content');

let logo = document.querySelector('.logo img');

content.addEventListener('scroll', () => {
  logo.style.transform = "rotate("+(content.scrollTop/3)+"deg)";
});

const sections = document.querySelectorAll('.content section');

const options = {
  threshold: 0.5
}

const sectionIDs = ['home', 'profile', 'skills', 'projects', 'contact'];

let observer = new IntersectionObserver((sections) => {
  sections.forEach((section) => {
    if (section.isIntersecting && !movement_fix_flag){

      let index = sectionIDs.indexOf(section.target.id);
        nodes.forEach((node) => {
          if (node != nodes[index])
            node.classList.remove("active");
        });
        nodes[index].classList.add("active");
        location.href = nodes[index].href;
        set_focus();
    }
  })
}, options);

sections.forEach((section) => observer.observe(section));