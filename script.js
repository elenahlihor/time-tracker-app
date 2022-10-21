const dailyButton = document.querySelector("#daily");
const weeklyButton = document.querySelector("#weekly");
const monthlyButton = document.querySelector("#monthly");

const dailyCards = document.querySelectorAll(".daily");
const weeklyCards = document.querySelectorAll(".weekly");
const monthlyCards = document.querySelectorAll(".monthly");
const allCards = document.querySelectorAll(".card_details")


dailyButton.addEventListener("click", ()=>{
    //remove show class from all cards
    allCards.forEach(card =>  {
        card.classList.remove("show");
    })
    dailyCards.forEach(dailyCard =>{
        dailyCard.classList.add("show");
    })
    //add show class to all daily cards
});

weeklyButton.addEventListener("click", ()=>{
    //remove show class from all cards
    allCards.forEach(card =>  {
        card.classList.remove("show");
    })
    weeklyCards.forEach(weeklyCard =>{
        weeklyCard.classList.add("show");
    })
    //add show class to all daily cards
});

monthlyButton.addEventListener("click", ()=>{
    //remove show class from all cards
    allCards.forEach(card =>  {
        card.classList.remove("show");
    })
    monthlyCards.forEach(monthlyCard =>{
        monthlyCard.classList.add("show");
    })
    //add show class to all daily cards
});