function countyAPI(countyToValidate){
  fetch(
    'https://cors-anywhere.herokuapp.com/https://api.census.gov/data/timeseries/poverty/saipe?get=NAME&for=county:*&in=state:41,53&time=2018&key=828d15da3d6b751cc242cc822adf5eba189827e5', {
  crossDomain: true,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
}
  ).then(result => {
    // console.log(result);
    return result.json();
  }).then(data => {
    // console.log(data);
    const countiesORWA = [];
    data.forEach(el => countiesORWA.push(el[0]
      .toLowerCase()
      .split('')
      .reverse()
      .slice(7)
      .reverse()
      .join('')));
    countiesORWA.shift();
    // console.log(countiesORWA);
    console.log(countiesORWA.includes(countyToValidate.toLowerCase()));
  })
  .catch(err =>{
    console.log(err);
  })
}

(countyAPI('Clackamas'));
(countyAPI('benton'));
(countyAPI('jefferson'));
(countyAPI('washington'));
(countyAPI('wahkiakum'));
countyAPI('Larry');
