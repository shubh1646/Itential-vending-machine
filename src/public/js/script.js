
$(function () {



    $('#sodaList').on('click', 'button', function () {

        var productName = this.id
        console.log(productName)
        $.get(`/api/sodas/name/${productName}`, (soda) => {
            if (soda.quantityAvailable <= 0) {
                $('#cost').text(` Out Of Stock`)
            }
            else {

                $('#cost').text(`$ ${soda.cost}`)
                $.ajax({
                    url: `/api/sodas/buy/${productName}`,
                    type: 'PUT',
                    success: function (response) {

                        onDownload(response, response.ProductName)
                    }
                })
            }
        })
    })
    loadSodas()

})


function loadSodas() {

    $.get('/api/sodas/getAll', (sodas) => {
        for (let soda of sodas) {
            $('#sodaList').append(
                $(`
                <li><button id="${soda.productName}">${soda.productName}</button></li>
                `)
            )
        }
    })
}

function download(content, fileName, contentType) {

    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload(jsonData, sodaName) {

    download(JSON.stringify(jsonData), `${sodaName}.txt`, "text/plain");
}