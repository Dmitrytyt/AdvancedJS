const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
    }, error => {
        reject(error);
    })
}).then((result) => {
    const root = document.getElementById('root');
    root.innerHTML = `
    <div>
        <h1>Geolocation</h1>
        <p>Latitude: ${result.latitude}</p>
        <p>Longitude: ${result.longitude}</p>
    </div>`;
}).catch(e => {
    console.error(`${e.constructor.name}: `, e.message);
});
