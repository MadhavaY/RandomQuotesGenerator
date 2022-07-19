

const quotes = [
    {
        quote  : '"When pain, misery, or anger happen, it is time to look within you, not around you."',
        writer: "-Sadghuru"
    },

    {
        quote  : '"Be focused. Be determined. Be hopeful. Be empowered."',
        writer: "-Michelle Obama"
    },


    {
        quote  : '"I can accept failure. Everyone fails at something. But I can’t accept not trying."',
        writer: "-Michael Jordan"
    },

    {
        quote  : '"The man who does not read has no advantage over the man who cannot read."',
        writer: "-Mark Twain"
    },

    {
        quote  : '"What is grief, if not love persevering."',
        writer: "-Vision"
    },

    {
        quote  : '"The hardest choices requier the strongest wills."',
        writer: "-Thanos"
    },

    {
        quote  : `"Intentions don't matter. Actions do."`,
        writer: "-Naval Ravikant"
    },

    {
        quote  : '"Self-belief and hard work will always bring you seccess."',
        writer: "-Virat Kohli"
    },

    {
        quote  : '"Meditation is the only freedom from stress, tension and anxiety."',
        writer: "-Sadhguru"
    },

    {
        quote  : '"Part of a journey is the end."',
        writer: "-Tony Stark"
    },

    {
        quote  : `"People's life don't end when they die, it ends when they lose faith."`,
        writer: "-Itachi Uchiha"
    },

    {
        quote  : `"If you don't like you destiny, don't accept it."`,
        writer: "-Naruto Uzumaki"
    }
]



// const background = [
//     {
//         bg: document.body.style.backgroundImage = "url(/pic3.jpg)"
//     },

//     {
//         bg:  document.body.style.backgroundImage = "url(/pic.jpg)" 
//     },
    

//     {
//         bg:  document.body.style.backgroundImage = "url(/wallhaven-pkp1vp_1920x1080.png)" 
//     },
    

//     {
//         bg:  document.body.style.backgroundImage = "url(/above-ho-chi-minh-city-vietnam-_-kien-do-_-wallpaper-1920x1080-wallpaper.jpg)" 
//     },

// ]





$("#btn").click(function(){
    let randomquote = Math.floor(Math.random() * quotes.length);
    // let randombg = Math.floor(Math.random() * background.length);

    document.getElementById("quote").innerHTML = quotes[randomquote].quote;
    document.getElementById("writer").innerHTML = quotes[randomquote].writer;
    // document.body.style.backgroundImage = background[randombg].bg;

    

});



