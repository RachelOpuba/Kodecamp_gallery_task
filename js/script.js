const menu =[
    {
     id: 1,
     title: "Edikainkong",
     price:3500,
     img: "./images/edikangikong.jpg",
     info: `Edikang Ikong Soup is a highly nutritious, delicious and 
            savory vegetable soup natively prepared using ‘ugwu’
            (the native name for fluted pumpkin leaves) and Malabar 
            spinach (locally called water leaf in Nigeria).`  
    },      

    {
        id: 2,
        title: "Amala and Ewedu",
        price:2500,
        img: "./images/amala.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 3,
        title: "Ofada Rice and Stew",
        price:3000,
        img: "./images/ofada.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 4,
        title: "Afang Soup",
        price:3000,
        img: "./images/afang.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 5,
        title: "Banger and Starch",
        price: 3000,
        img: "./images/banger.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
        dolor sit amet consectetur adipisicing`
    },

    {
        id: 6,
        title: "Beans and Dodo",
        price: 1500,
        img: "./images/beans.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 7,
        title: "Fisherman Soup",
        price: 5000,
        img: "./images/fisherman.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 8,
        title: "Isiewu",
        price: 4000,
        img: "./images/isiewu.png",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 9,
        title: "Nkwobi",
        price: 6000,
        img: "./images/nkwobi.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 10,
        title: "Jollof Rice",
        price:3000,
        img: "./images/jollof.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 11,
        title: "Okro Soup",
        price: 2800,
        img: "./images/okro.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    },

    {
        id: 12,
        title: "Pepper Soup",
        price:2900,
        img: "./images/pepperSoup.jpg",
        info: `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dignissimos,  Dignissimos, totam? Lorem ipsum 
                dolor sit amet consectetur adipisicing`
    }

    
];


menu.forEach(element => {
    // console.log(element)
})

let menuItems = document.querySelector('.holder');
let html = ""


menu.forEach(e => {

    html += 
    `
    <section class="p-lg-5 p-md-3 holder">
    
        <div class="row">
            <div class="col-12 col-sm-6 
            col-lg-6 mb-5 card-holder">

                <div class="card bg-dark text-white">
                    <h5 class="card-title p-3 fw-bold">Price: N${e.price}</h5>
                    <img src=${e.img} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.info}.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    `
    console.log(e)
 menuItems.innerHTML = html
})

//console.log(menu.img)