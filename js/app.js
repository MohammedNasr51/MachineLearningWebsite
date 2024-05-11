const form =document.querySelector("#laptopForm");
form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData)

    console.log(data);

    fetch("https://ahmedemad.pythonanywhere.com/predict", {
        method: "POST",
        headers:{
            "content-Type": "application/json",
        },
        body: JSON.stringify([data]),
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.querySelector("#Price").textContent= " "+Math.round(data["Prediction"][0])+" $"
        })
        .catch(error => {
            console.error('There was an error with the fetch operation:', error);
        });
});
