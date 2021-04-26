window.addEventListener('DOMContentLoaded', (event) => {
    const table = document.querySelector('#cennik');
    console.log(table);
    httpGetAsync('menu.txt', (txt) => {
        rows = txt.trim().split('\r\n');
        var first = true;
        rows.forEach(row => {
            cells = row.split('\t');
            var tr = document.createElement('tr');
            tr.innerHTML = '<tr>'
            cells.forEach(cell => {
                if(first) {
                    tr.innerHTML += '<th>' + cell + '</th>';
                    first = false;
                } else {
                    tr.innerHTML += '<td>' + cell + '</td>';
                }
            })
            tr.innerHTML += '</tr>'
            table.appendChild(tr);
        });
    });
});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}