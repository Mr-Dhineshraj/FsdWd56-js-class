


// const header=document.createElement('div');

// const heading =document.createElement('h1');
// heading.innerText='Demo Paragraph';

// const para=document.createElement('p');
// para.innerText='The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM,look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.'

// header.appendChild(heading);
// header.appendChild(para);

// document.body.appendChild(header);


/************************************************* */

const menu=["coffee",'tea','sanwich','cake','cookie'];

const head=document.createElement('div');
const h1=document.createElement('h1');
const coffee =document.createElement("div")
const paragraph=document.createElement('p')



//const tea =document.createElement("span");

h1.textContent='Coffee Shop';
h1.setAttribute('class','header')
coffee.innerText="This coffee is really made a feeling good";
coffee.innerHTML=`<h1>this is the tea</h1>;`
paragraph.textContent='A coffeehouse, coffee shop, or café is an establishment that primarily serves various types of coffee, espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages'

const ul=document.createElement('ul');
for (i=0;i<menu.length;i++){
    const item=document.createElement('li');
    item.textContent=menu[i];
    ul.appendChild(item);

};

head.append(h1,ul,coffee,paragraph);


document.body.appendChild(head);


const get=document.querySelector('.name');
get.innerText="This is the way of first test";

get.setAttribute('class','heat');