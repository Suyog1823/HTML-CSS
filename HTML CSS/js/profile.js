var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "6rem";
    document.getElementById("contents").style.marginLeft = "4rem";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "2rem";
    document.getElementById("contents").style.marginLeft = "4rem";
    this.mini = true;
  }
}
