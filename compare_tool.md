---
layout: page
title: List compare tool
permalink: /compare/
---

This page is a sandbox for a work in progress list comparison tool.

<p>You are currently comparing <select class="dataSelect" id="country-select1">
    <option>Select a Country</option>
    </select> against <select class="dataSelect" id="country-select2">
    <option>Select a Country</option>
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
        <th>Capital City</th>
        <td id="country-capital1"></td>
        <td id="country-capital2"></td>
      </tr>
      <tr>
        <th>Region</th>
        <td id="country-region1"></td>
        <td id="country-region2"></td>
      </tr>
      <tr>
        <th>Sub Region</th>
        <td id="country-sub-region1"></td>
        <td id="country-sub-region2"></td>
      </tr>
      <tr>
        <th>Population</th>
        <td id="country-population1"></td>
        <td id="country-population2"></td>
      </tr>
      <tr>
        <th>Top Level Domain</th>
        <td id="country-domain1"></td>
        <td id="country-domain2"></td>
      </tr>
    </tbody>
  </table>
<!--<script>
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
</script>-->