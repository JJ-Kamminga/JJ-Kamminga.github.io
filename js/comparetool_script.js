let countriesData = $.get('https://restcountries.eu/rest/v2/all', (data) => {
  data.forEach((country) => {
    $('select').append(`<option value="${country.alpha2Code}">${country.name}</option>`)
  })
  return data
})

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