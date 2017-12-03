$( document ).ready(() => {
    console.log('Fet Ready to get TURNT!!!!')
    const el = dom => $(document.createElement(dom));

    $('#usersSearch').keypress((e) => {
        console.log(e.which, $(e.target).val())
        if(e.which == 13){//Enter key presxsed
            $.post("https://2150e098.ngrok.io/search", {lang: $(e.target).val()})
                .then(function(data){
                    
                    data.data.forEach(hack => {
                        const card = el('div')
                            .addClass('card')
                            .append(el('h2').text(hack.title))
                            .append(el('hr'))
                            .append(el('p').text(hack.description))
                            .attr('data-uri', hack.uri)
                            .css('background', randomColor({hue: 'dark'}));


                        hack.winner && card.append(el('span').text('WINNER'))

                        $('.projects').append(card)

                    });

                    $('.card').on('click', e => {
                        window.open($(e.currentTarget).data('uri'), '_blank')
                            .focus();
                    });

                })
        }
    });
});