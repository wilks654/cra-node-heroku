export const SET_PHOTOS = 'SET_PHOTOS';
export function setPhotos(payload) {
  return {
    type : SET_PHOTOS,
    payload
  }
}

export function getPhotos() {
  
  return function() {
    return fetch('/api/photos/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }  
}
