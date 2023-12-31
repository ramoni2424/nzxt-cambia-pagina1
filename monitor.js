fetch('http://localhost:8085/data.json')
.then(response => response.json())
.then(data => {
    let cpuTemp = data.Children[0].Children[0].Children[1].Value;
    let gpuTemp = data.Children[0].Children[0].Children[3].Value;
    let cpuLoad = data.Children[0].Children[0].Children[0].Value;
    let gpuLoad = data.Children[0].Children[0].Children[2].Value;

    document.getElementById('cpuTemp').innerText = `Temperatura CPU: ${cpuTemp}`;
    document.getElementById('gpuTemp').innerText = `Temperatura GPU: ${gpuTemp}`;
    document.getElementById('cpuLoad').innerText = `Uso CPU: ${cpuLoad}`;
    document.getElementById('gpuLoad').innerText = `Uso GPU: ${gpuLoad}`;
})
.catch(error => console.error('Error:', error));