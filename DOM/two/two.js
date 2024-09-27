let parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[5].innerHTML);
for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].style.color="orange"
    console.log(parent.children[i].innerHTML);
    
}
// parent.children[0].style.color="orange"
let weakdays = document.querySelectorAll('.day')
console.log(weakdays);
