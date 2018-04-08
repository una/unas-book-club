const getBookDetails = (isbn) => {
  const urlForBookData = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

  // make API call here, and get the response back
  fetch(urlForBookData).then((response) => {
    return (response).json();
  }).then(
    (data) => {

      let cleanData = {};

      Object.keys(data).forEach(key => {
        const newKey = key.replace('ISBN:', '');
        let coverImg = 'defaultImgUrl.jpg'

        if (data[key].cover) {
          coverImg = data[key].cover.large;
        }

        // newKey should just be the ISBN
        // data[key] is pulling the old object value
        cleanData[newKey] = {
          title: data[key].title,
          pages: data[key].number_of_pages || data[key].pagination,
          subjects: data[key].subjects || [],
          cover: coverImg
        }
      }
    )
    return cleanData
    }
  )
}

export default getBookDetails;