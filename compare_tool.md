---
layout: page
title: List compare tool
permalink: /compare/
---

This page is a sandbox for a work in progress list comparison tool.
<script src="js/comparetool_script.js"></script>

<p>You are currently comparing <select class="dataSelect" id="country-select1">
<option>Select a list</option>
</select> against <select class="dataSelect" id="country-select2">
<option>Select a list</option>
</select></p>

<table class="country-table">
<thead class="country-table-head">
    <tr>
    <th></th>
    <th id="country-header1"></th>
    <th id="country-header2"></th>
    </tr>
</thead>
<tbody class="country-table-body">
    <tr>
    <th>Item 1</th>
    <td id="country-capital1"></td>
    <td id="country-capital2"></td>
    </tr>
    <tr>
    <th>Item 2</th>
    <td id="country-region1"></td>
    <td id="country-region2"></td>
    </tr>
    <tr>
    <th>Item 3</th>
    <td id="country-sub-region1"></td>
    <td id="country-sub-region2"></td>
    </tr>
    <tr>
    <th>Item 4</th>
    <td id="country-population1"></td>
    <td id="country-population2"></td>
    </tr>
    <tr>
    <th>Item 5</th>
    <td id="country-domain1"></td>
    <td id="country-domain2"></td>
    </tr>
    <script>
        $('.dataSelect').change(function() {
        const selection = $(this).val()
        let dataColumn = $(this).attr('id')
        let columnNum = dataColumn.substr(dataColumn.length - 1)
        countriesData.done((data) => {
            const country = data.find((country) => country.alpha2Code === selection)
            $(`#country-header${columnNum}`).html(`${country.nativeName}</br>${country.name}</br ><img class="country-flag" src="${country.flag}">`)
            $(`#country-capital${columnNum}`).html(country.capital)
            $(`#country-region${columnNum}`).html(country.region)
            $(`#country-sub-region${columnNum}`).html(country.subregion)
            $(`#country-population${columnNum}`).html(country.population)
            $(`#country-domain${columnNum}`).html(country.topLevelDomain)
        })
        })
    </script>
</tbody>
</table>