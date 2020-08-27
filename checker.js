const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    if(bpm < 70 || bpm > 150) {
        return false;
    } else if(spo2 < 90) {
        return false;
    } else if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
