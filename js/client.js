const init = async () => {
  const response = await fetch('/.netlify/functions/post')
  const data = await response.json();

  const post = data.find((item) => item.caption.startsWith('#netlify'));

  document.querySelector('.container').innerHTML = `
    <figure>
      <img src="${post.url}" alt="test">
      <figcaption>${post.caption}</figcaption>
    </figure>
  `
  console.log(data);
}

init();