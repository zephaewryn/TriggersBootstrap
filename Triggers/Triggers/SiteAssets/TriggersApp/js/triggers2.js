
$(document).ready(function () {
    
    $(".MyProgramIssuesTable").on('click', 'tr', function (e) {
        clearCube();
        var likelihood = $(this).find('td:eq(5)').text();
        var consequence = $(this).find('td:eq(6)').text();
        var $cube = $('.cube');
        var cell = likelihood + consequence;
        var square = $cube.find('#' + cell);
        square.text('X');

    });

});


function clearCube()
{
    $('.cube').find('td').each(function () {
        if ($(this).text() === 'X')
          $(this).text('');
    });    

}
