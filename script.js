
function formatDateToYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function fetchData(){
    const response = await fetch('https://www.saasro.com/wp-json/wp/v2/posts');
    const data = await response.json();
    console.log(data);
    const formattedDate1 = formatDateToYYYYMMDD(data[0].date);
    document.querySelector(".first").innerHTML = `
        <h2>${data[0].title.rendered}</h2>
        <p>${data[0].excerpt.rendered}</p>
        <p>Saasaro / ${formattedDate1}</p>
    `;

    const formattedDate2 = formatDateToYYYYMMDD(data[1].date);
    document.querySelector(".second").innerHTML = `
        <h2>${data[1].title.rendered}</h2>
        <p>${data[1].excerpt.rendered}</p>
        <p>Saasaro / ${formattedDate2}</p>
    `;

    const formattedDate3 = formatDateToYYYYMMDD(data[2].date);
    document.querySelector(".third").innerHTML = `
        <h2>${data[2].title.rendered}</h2>
        <p>${data[2].excerpt.rendered}</p>
        <p>Saasaro / ${formattedDate3}</p>
    `;

    const formattedDate4 = formatDateToYYYYMMDD(data[3].date);
    document.querySelector(".fourth").innerHTML = `
        <h2>${data[3].title.rendered}</h2>
        <p>${data[3].excerpt.rendered}</p>
        <p>Saasaro / ${formattedDate4}</p>
    `;
    
}




document.addEventListener('DOMContentLoaded', fetchData);

// fetchData();