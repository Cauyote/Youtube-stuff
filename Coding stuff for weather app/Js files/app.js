window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        long = position,coords.longitude;
        lat = position.coords.latitude;

        const api ='https://api.darksky.net/forecast/fb1e0f5ca6400acae3cc5b740dbc43a5/37.8267,-122.4233'
    })
}else{
    h1.textContent = "Hey chief, it ain't working."
}
})