const expect = require('chai').expect;

let Bp_limits = [70, 150];
let spo2_limits = [30 , 100];
let respRate_limits = [30 , 95];
let msgalert = "";

class Alert
{
    constructor()
     {
        if(this.constructor == Alert)
        {
            throw new Error(" Object of Abstract Class cannot be created");
        }
     }
        sendAlert(msgalert)
        {
            throw new Error("Abstract Method has no implementation");
        }

}
class AlertbySound extends Alert{
    sendAlert(msgalert)
    {
        console.log(`Alerting via Sound : ${msgalert}`);
    }

}
class AlertbySMS extends Alert{
    sendAlert(msgalert)
    {
        console.log(`Alerting via SMS : ${msgalert}`);
    }

}

function vitalsAreOk(bpm, spo2, respRate)
{
    
    if(isBpOk(bpm) && isSpo2Ok(spo2) && isRespRateOk(respRate))
    {
        console.log("All vitals are in limit");
        return true;
    }
    return false;

}

function isBpOk(bpm)
{
    if( isVital_LimitsOk(bpm, Bp_limits[0], Bp_limits[1]) ){
    return true;
    }
    //raise an alert
    alertobj.sendAlert("Abnormal Bp levels" );
    return false;
}
function isSpo2Ok(spo2)
{
    if( isVital_LimitsOk(spo2, spo2_limits[0], spo2_limits[1]) ){
        return true;
    }

    //raise an alert
    alertobj.sendAlert("Abnormal Spo2 levels" );
    return false;
}
function isRespRateOk(respRate)
{
    if( isVital_LimitsOk(respRate, respRate_limits[0], respRate_limits[1]) ){
        return true;
    }
    //raise an alert
    alertobj.sendAlert("Abnormal RespirationRate" );
    return false;
}

function isVital_LimitsOk(val , low, high){
    if (val < low){
        console.log('There is a low limit Breach in  ' + isVital_LimitsOk.caller.name ); 
        return false;
    }

    if (val > high)
    {
        console.log('There is a High limit Breach in  ' + isVital_LimitsOk.caller.name);
        return false;
    }
    
    return true;

};

//These are cases to test vital limit function
/*expect(isVital_LimitsOk(66, 75, 100)).to.be.false;
expect(isVital_LimitsOk(123, 55, 95)).to.be.false;
expect(isVital_LimitsOk(80, 70, 120)).to.be.true;*/

let alertobj =  new AlertbySound();
expect(vitalsAreOk(60, 80, 50)).to.be.false; //bp value less than lowerlimit
expect(vitalsAreOk(160, 95, 70)).to.be.false; //bp value more than upperlimit

expect(vitalsAreOk(100, 20, 70)).to.be.false; //spo2 value less than lower limit
expect(vitalsAreOk(80, 120, 70)).to.be.false; // spo2 value more than upperlimit

expect(vitalsAreOk(115, 95, 25)).to.be.false; //Resprate value less than lowerlimit
expect(vitalsAreOk(85, 95, 98)).to.be.false;// Resprate value more than upperlimit

alertobj =  new AlertbySMS();
expect(vitalsAreOk(180, 120, 116)).to.be.false; // all vitals are above upper limit
expect(vitalsAreOk(60, 25, 29)).to.be.false;  //all vitals are below lower limit

expect(vitalsAreOk(80, 70, 70)).to.be.true; 
//console.log(vitalsAreOk(60, 80, 50));

console.log('checker is done');
