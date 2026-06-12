# Performing a BERPER Search Measurement

Module: Bluetooth Signaling
Source: 21e1536fb3a246a4.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER Search and PER Search Rx Tests
 > 
Performing a BER/PER Search Measurement
Performing a BER/PER Search Measurement
// *****************************************************************************
// Start a single-shot BER search measurement for BR/EDR.
/// Return BR/EDR BER search measurement results.
//
// Alternatively start the search measurement on LE,
// return results  for LE 1M PHY. 
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:BLUetooth:SIGN:RXQuality:SEARch:BER
FETCh:BLUetooth:SIGN:RXQuality:SEARch:BER?
CALCulate:BLUetooth:SIGN:RXQuality:SEARch:BER?
FETCh:BLUetooth:SIGN:RXQuality:SEARch:BER:STATe?
INIT:BLUetooth:SIGN:RXQuality:SEARch:PER
FETCh:BLUetooth:SIGN:RXQuality:SEARch:PER:LENergy:LE1M?
CALCulate:BLUetooth:SIGN:RXQuality:SEARch:PER:LENergy:LE1M?
FETCh:BLUetooth:SIGN:RXQuality:SEARch:PER:STATe?
// *****************************************************************************
// Start measurement; wait for 5 ms and return BER results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
INIT:BLUetooth:SIGN:RXQuality:SEARch:BER
Pause 5000
FETCh:BLUetooth:SIGN:RXQuality:SEARch:BER?
CALCulate:BLUetooth:SIGN:RXQuality:SEARch:BER?
FETCh:BLUetooth:SIGN:RXQuality:SEARch:BER:STATe:ALL?
Top