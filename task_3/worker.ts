self.onmessage = function (event: MessageEvent) {
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
        total += i;
    }
    self.postMessage(total);
}