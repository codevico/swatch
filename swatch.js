(function() {
    const defaults = {
        prefix: '@',
        millis: 864,
        realTime: true
    }
    function getSwatchTime(showDecimals = true) {
        const date = new Date()
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = date.getUTCSeconds()
        const millis = date.getUTCMilliseconds()
        const timeInMillis = ((hh * 60 + mm) * 60 + ss) * 1000 + millis
        const swatchTime = Math.abs(timeInMillis / 86400)
        return showDecimals ? swatchTime.toFixed(2) : Math.floor(swatchTime)
    }
    var Swatch = (obj, options) => {
        const instance = {}
        options = {...defaults, ...options}
        instance.refresh = function() {
            instance.element.innerText = (instance.options.prefix) + getSwatchTime()
        }
        instance.render = function() {
            const interval = setInterval(instance.refresh, instance.options.millis)
            instance.refresh()
            return interval
        }
        instance.start = function() {
            if (instance.refreshInterval) {
                console.info('Already started.')
            } else {
                instance.refreshInterval = instance.render()
            }
        }
        instance.stop = function() {
            if (instance.refreshInterval) {
                clearInterval(instance.refreshInterval)
                instance.refreshInterval = null
            } else {
                console.info('Already stopped.')
            }
        }
        if (typeof obj === 'string') {
            // Selector
            obj = document.querySelector(obj)
        }
        instance.element = obj
        instance.options = options
        if (instance.options.realTime) {
            instance.start()
        } else {
            instance.refresh()
        }
        return instance
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Swatch
    } else if (typeof define === 'function' && define.amd) {
        define(Swatch)
    } else if (window) {
        window.Swatch = Swatch
    }
}());