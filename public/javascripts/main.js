document.getElementsByClassName("head") [0].innerHTML="Welcome "+localStorage.getItem("username")
const quotes=[
    "It is health that is real wealth and not pieces of gold and silver","“WHEN DIET IS WRONG, MEDICINE IS OF NO USE. WHEN DIET IS CORRECT, MEDICINE IS OF NO NEED.","The groundwork of all happiness is health.","It took more than a day to put it on. It will take more than a day to take it off.",
    "If you keep good food in your fridge, you will eat good food.","It takes five minutes to consume 500 calories. It takes two hours to burn them off.",
    "One must eat to live, not live to eat.","Exercising should be about rewarding the body with endorphins and strength. Not about punishing your body for what you’ve eaten.",
    "Don’t dig your grave with your own knife and fork.","Your goals, minus your doubts, equal your reality.",
    "An optimist is a person who starts a new diet on Thanksgiving Day.","You don’t drown by falling in water. You drown by staying there.",


    
]
const authors=["-Mahatma gandhi","-Anonymous","-Leigh Hunt","Anonymous","– Errick McAdams","Anonymous",
            "-Jean-Bapsite Poquelin", "-Anonymous","– Anonymous","-Ralph Marston",
            "– Irv Kupcinet", "-Anonymous"]

!function newFact() {
    const randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomquote];
    document.getElementById('authorDisplay').innerHTML= authors[randomquote];

  }();
