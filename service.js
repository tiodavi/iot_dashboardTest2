function initSystem() {
    var system = {
        'status': '正常',
        'version': '1.0.0',
        'system_status_logs': [],
        // 溫度與濕度, 每天測量一次
        'sensor': Array.from({ length: 30 }, (_, i) => ({
            "temparature": Math.floor(Math.random() * 15) + 15, // Random temperature between 15 and 30
            "humidity": Math.floor(Math.random() * 51) + 30, // Random humidity between 30 and 80
            "time": `2021-01-${String(i + 1).padStart(2, '0')} 00:00:00`
        })),
        // 黃燈溫度閥值
        'yellow_light': 25,
        // 黃燈濕度閥值
        'yellow_humidity': 50,
        // 紅燈溫度閥值
        'red_light': 30,
        // 紅燈濕度閥值
        'red_humidity': 60,
    };


    sessionStorage.setItem('system', JSON.stringify(system));
}


function getSystem() {
    return JSON.parse(sessionStorage.getItem('system'));
}


function updateSystem(system) {
    sessionStorage.setItem('system', JSON.stringify(system));
}


// 檢查localStorage是否有system資料，如果沒有則初始化
if (!sessionStorage.getItem('system')) {
    initSystem();
}
