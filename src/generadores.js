export default function fibonacci_simple() {
    let a = 0;
    let b = 1;
    return {
        next: function(reset) {
            if (reset) {
                a = 0;
                b = 1;
            }
            let f = a;
            a = b;
            b = f + a;
            let resp = {
                value: f,
                done: false
            }
            return resp;
        }
    }
}



