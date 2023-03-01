$(document).ready(function(){
    var pokecard = document.getElementById('pokedex');
    // console.log(pokecard);
    var num1 = 1;
    var num2 = 24;
    
    var getPokemon = (num1, num2) => {
        var promises = [];
        for (var i = num1; i <= num2; i++){
            var url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
            promises.push(fetch(url).then((res) => res.json()));
        }

        Promise.all(promises).then(results => {
            var pokedata = results.map((data) =>({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(", "),
                weight: data.weight,
            }));
            displayPokemon(pokedata)
        });
    };

    // INSERT GETTHISPOKEMON FUNCTION FOR STRING SEARCH
    var find = '';
    var gethisPokemon = () => {
        var promises = [];
            var url = `https://pokeapi.co/api/v2/pokemon/${find}/`;
            promises.push(fetch(url).then((res) => res.json()));
        

        Promise.all(promises).then(results => {
            var pokedata = results.map((data) =>({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(", "),
                weight: data.weight,
            }));
            displayPokemon(pokedata)
        });
    };



    var displayPokemon = (pokedata) => {
        // console.log(pokedata);
        var pokemonhtmlString = pokedata.map((poke) => `
        <div class="col-12 col-sm-6 col-md-3 col-xl-2">
            <div class="card border-warning">
                <img class="card-img-top border-bottom" src="${poke.image}" alt="Card image cap">
                <div class="card-body text-dark">
                    <h5 class="card-title">#${poke.id}. ${poke.name}</h5>
                    <p class="card-text">${poke.type} type</p>
                    <p class="card-text">weight: ${poke.weight/10} kg</p>
                </div>
            </div>
        </div>
        `
        )
        .join('');
        pokecard.innerHTML += pokemonhtmlString;
    };

    getPokemon(num1, num2);

    $('.top').click(function(event){
        event.preventDefault();
    });

    $('.close').click(function(){
        $(this).parent().hide();
    })

    let clearcards = () => $('#pokedex').children().remove();


    $('.pika').click(function(){
        if (num1 != 25) {
            clearcards();
            num1 = 25;
            num2 = 25;
            getPokemon(num1, num2);
        } else {
            getPokemon(num1, num2);
        }
    });

    $('.rando').click(function(){
        num1 = (Math.ceil(Math.random()*1010));
        num2 = num1;
        if ($('#clearcontrol').is(':checked')){
            clearcards();
            getPokemon(num1, num2);
        } else {
            getPokemon(num1, num2);
        };
    });

    $('.alert').hide();

    $('.getmon').click(function(){
        var rec = $('.search').val();
        find = rec.toLowerCase();
        if ($('#clearcontrol').is(':checked')){
            clearcards();
            gethisPokemon(find);
        } else {
            gethisPokemon(find);
        };
    });


    $('.populate').click(function(){
        num1 = parseInt($('#number').val(), 10);
        num2 = num1 + 23;
        clearcards();
        getPokemon(num1, num2);
        $('#next').parent().removeClass('disabled');
        $('#prev').parent().removeClass('disabled');
    });


    $('.clear').click(function(){
        clearcards();
        $('#prev').parent().addClass('disabled');
        $('#next').parent().addClass('disabled');
    })

    $('#prev').click(function(){
        clearcards();
        if (num1 == 25){  // adjust all numbers for final page amount
            $(this).parent().addClass('disabled');
        };
        num1 -= 24;
        num2 -= 24;
        getPokemon(num1, num2);
        // console.log(num1);
    });

    $('#next').click(function(){
        clearcards();
        num1 += 24;
        num2 += 24;
        getPokemon(num1, num2);
        $('#prev').parent().removeClass('disabled');
    });
});




