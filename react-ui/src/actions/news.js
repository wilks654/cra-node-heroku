export const SET_NEWS = 'SET_NEWS';
export function setNews(news) {
  return {
    type : SET_NEWS,
    news
  }
}

export function getNews() {

    //Get first news, get image and title. Use description as body.
  
    return async function (dispatch) {
      
      try {  

        //fetch xml from bbc rss feed
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml')
        
        //convert into text
        let responseText = await response.text()
        let parser = new DOMParser()

        //parse string into xml doc // I hope the last two steps weren't redundant
        let xmlDoc = parser.parseFromString(responseText, 'text/xml')
        
        //get first news article, stored as items in bbc feed
        let firstNewsItem = xmlDoc.getElementsByTagName('item')[0]

        //get first image url from xml also (items don't contain references to their own image)
        let firstImageURl = xmlDoc.getElementsByTagName('image')[0]

        //retreive string values for imageUrl, text, description
        let imageUrl = firstImageURl.getElementsByTagName('url')[0].textContent
        let title = firstNewsItem.getElementsByTagName('title')[0].textContent
        let description = firstNewsItem.getElementsByTagName('description')[0].textContent
    
        let news = {
            imageUrl,
            title,
            description
        }

        dispatch(setNews(news))

    }
    catch (e) {
        console.error(e)
    }
  }
}