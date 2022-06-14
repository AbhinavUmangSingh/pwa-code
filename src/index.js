if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js").then(registeration => {
        console.log("Service Worker Registered!")
        console.log(registeration)
    }).catch(error => {
        console.log("Servoce Worker Registration Failed!")
        console.log(error)
    })
} else {
    failed = document.createElement("p")
    failed.textContent = "Sorry, but your browser does not support PWA's! Very sorry for the inconvenience."
    document.body.appendChild(failed)
}
