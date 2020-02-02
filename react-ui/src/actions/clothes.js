export const SET_CLOTHES_SUMMARY = 'SET_CLOTHES_SUMMARY';
export function setClothesSummary(clothes) {
  return {
    type : SET_CLOTHES_SUMMARY,
    clothes
  }
}

export function getClothes() {

    //Get first news, get image and title. Use description as body.
  
    return async function (dispatch) {
      
      try {  

        //fetch xml from bbc rss feed
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil')
        
        //convert into text
        let responseJson = await response.json()
        
        dispatch(setClothesSummary(organiseClothes(responseJson.payload)))
        //dispatch(setNews(news))

    }
    catch (e) {
        console.error(e)
    }
  }
}

let organiseClothes = (clothesArray) => {
  //{id: "0102", date: "2019-10-20", clothe: "jumper"}

  let clothes = {}

  clothesArray.forEach(day => {
    
    if (clothes[day.clothe] === undefined) {
      clothes[day.clothe] = {d : 1}
    }

    else {
      clothes[day.clothe].d++
    }

  });

  return clothes;

}