export function nodeClicked() {
  const nodes = document.querySelectorAll(".boardSqs");
  nodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      nodeClickedOn(e.target);
    });
  });
  function nodeClickedOn(target) {
    console.log(target.id);
  }
}
