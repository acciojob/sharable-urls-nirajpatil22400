    const form = document.querySelector('form');
    const button = document.querySelector('#button');
    const url = document.querySelector('#url');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent form from submitting

      const name = document.querySelector('#name').value;
      const year = document.querySelector('#year').value;

      // build the query string
      const queryString = `?name=${name}&year=${year}`;

      // update the URL text
      url.textContent = `https://localhost:8080/${queryString}`;
    });
  
