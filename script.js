console.log("script running....")
document.querySelector('.close').style.display = 'none';
// Here we hide .close class icon from stylesheet at the time of page run.
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    // it mean if inside sidebar class any class start from sidebargo, use toggle(if hide then show, if show then hide using toggle.)
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.close').style.display = 'inline'
    },300);
    // we configure close element with transition.
    }
})