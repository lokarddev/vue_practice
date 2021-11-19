export default {
    data() {
        return {
            timeout: "",
        }},
    debound(func, wait=1000) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(func, wait)
    },
}

