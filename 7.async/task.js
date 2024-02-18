class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }
    addClock(time, callback) {
        if (!(time && callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.forEach((time) => {
            if (time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        })
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
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes;
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
        clearInterval();
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