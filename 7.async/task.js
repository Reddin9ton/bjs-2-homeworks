class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }
    addClock(time, callback) {
        if (!(time && callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const isTimeExists = this.alarmCollection.some(element => element.time === time);

        if (isTimeExists) {
            console.warn('Уже присутствует звонок на это же время');
        };

        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(function(element) {
            return element.time !== time;
        });
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId) {
            return;
        };
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((call) => {
                if (call.time === this.getCurrentFormattedTime() && call.canCall === true) {
                    call.canCall = false;
                    call.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((call) => {
            call.canCall = true;
        })
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}