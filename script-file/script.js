const perCall = 20;
const callHistoryData = [];
// get innerText
function getText(id) {
    const name = document.getElementById(id).innerText;
    return name;
};

// getNum
function getNum(id) {
    const num = Number(document.getElementById(id).innerText);
    return num;
}
// heart count 
const allHeart = document.getElementsByClassName("fa-heart");
for (const heart of allHeart) {
    heart.addEventListener("click", function () {
        let heartCount = document.getElementById("heart-count")
        let heartCountNum = Number(heartCount.innerText);
        heartCountNum++
        heartCount.innerText = heartCountNum;
    });
};

// button call 
// national service 
document.getElementById("national-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling National Emergency Number 999...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "National Emergency Number",
            number : "999",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// police service 
document.getElementById("police-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Police Helpline Number 999...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Police Helpline Number",
            number : "999",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// Fire Service
document.getElementById("fire-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Fire Service Number 999...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Fire Service Number",
            number : "999",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// Ambulance Service
document.getElementById("ambulance-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Ambulance Service 1994-999999...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Ambulance Service",
            number : "1994-999999",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// Women & Child service 
document.getElementById("women-and-child-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Women & Child Helpline 109...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Women & Child Helpline",
            number : "109",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// Anti-Corruption service
document.getElementById("anti-corruption-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Anti-Corruption Helpline 106...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Anti-Corruption Helpline",
            number : "106",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// electricity service
document.getElementById("electricity-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Electricity Helpline 16216...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Electricity Helpline",
            number : "16216",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// brac service
document.getElementById("brac-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Brac Helpline 16445...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Brac Helpline",
            number : "16445",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});
// railway service
document.getElementById("railway-service-btn").addEventListener("click", function () {
    const coinSet = document.getElementById("coins");
        const coins = getNum("coins");
        const perCall = 20;
        const totalCoin = coins - perCall;
        if (totalCoin < 0) {
            alert("❌ Sorry you have not enough coins. Minimum 20 coins for a call");
            return;
        };
        alert("📞 calling Bangladesh Railway Helpline 163...");
        coinSet.innerText = totalCoin
        const nationalData = {
            name : "Bangladesh Railway Helpline",
            number : "163",
            time : new Date().toLocaleTimeString()
        };
        callHistoryData.push(nationalData);
        historyItems();
});

// call history
function historyItems() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    for (const data of callHistoryData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="list-items flex justify-between items-center md:bg-gray-300 p-4 rounded-lg my-4">
      <div class="service-details">
        <h2 class="service-name font-semibold text-sm">${data.name}</h2>
        <p class="service-num text-lg">${data.number}</p>
      </div>
      <p class="time">${data.time}</p>
    </div>
    `;
    historyList.appendChild(div)
 };    
};

