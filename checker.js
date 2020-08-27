const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    
    return ( isBpOk(bpm) && isSpo2Ok(spo2) && isRespRateOk(respRate) );
}
let Bp_limits = [70, 150];
let spo2_limits = [30 , 100];
let respRate_limits = [30 , 95]
function isBpOk(bpm)
{
    return isVital_LimitsOk(bpm, Bp_limits[0], Bp_limits[1]);
}
function isSpo2Ok(spo2)
{
    return isVital_LimitsOk(spo2, spo2_limits[0], spo2_limits[1])
}
function isRespRateOk(respRate)
{
    return isVital_LimitsOk(respRate, respRate_limits[0], respRate_limits[1])
}
function isVital_LimitsOk(val , low, high){
   return (val >= low && val <= high)
}

expect(vitalsAreOk(60, 80, 50)).to.be.false; //bp value less than lowerlimit
expect(vitalsAreOk(160, 95, 70)).to.be.false; //bp value more than upperlimit
expect(vitalsAreOk(80, 95, 60)).to.be.true;
expect(vitalsAreOk(100, 20, 70)).to.be.false; //spo2 value less than lower limit
expect(vitalsAreOk(80, 120, 70)).to.be.false; // spo2 value more than upperlimit
expect(vitalsAreOk(115, 95, 25)).to.be.false; //Resprate value less than lowerlimit
expect(vitalsAreOk(85, 95, 98)).to.be.false;// Resprate value more than upperlimit
expect(vitalsAreOk(123, 95, 70)).to.be.true;
expect(vitalsAreOk(180, 120, 116)).to.be.false; // all vitals are above upper limit
expect(vitalsAreOk(60, 25, 29)).to.be.false;  //all vitals are below lower limit
//console.log(vitalsAreOk(60, 80, 50));

console.log('checker is done');
