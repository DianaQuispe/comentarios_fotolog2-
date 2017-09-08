/*aquí va tu código*/
const app = {
    item: {
        name: undefined,
        comment: undefined
    },
    init: function () {
        app.item.name = $('#name');
        app.item.comment = $('#clave');

        app.setup();
        app.showComents();
    },

    setup: function () {
        $('#btnGuardar').click(app.addComment);
        $('#btnLimpiar').click(app.clearComments);

    },

    addComment: function () {
        $('#data').addClass('color');
        localStorage.setItem(app.item.name.val(), app.item.comment.val());
        app.showComents();
        $('#name').innerHTML == "";
        $('#clave').innerHTML == "";



    },
    showComents: function () {
        for (var clave in localStorage) {
            var coment = localStorage[clave];
            $('#data').append(`<h3> ${clave} </h3>\
                            <p>  ${coment}</p>`);

        }
        $('#name').innerHTML == "";
        $('#clave').innerHTML == "";

    },
    clearComments: function () {
        $('#data').empty();
        localStorage.clear();

    }
};
$(document).ready(app.init);
