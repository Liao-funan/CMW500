# Performing a BERPER Measurement

Module: Bluetooth Signaling
Source: 83ec7dc688214098.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER and PER Rx Tests
 > 
Performing a BER/PER Measurement
Performing a BER/PER Measurement
// *****************************************************************************
// Start a single-shot BER measurement for BR/EDR.
/// Return BR/EDR BER measurement results.
//
// Alternatively start the measurement on LE,
// return results for  LE 1M PHY. 
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:BLUetooth:SIGN:RXQuality:BER
FETCh:BLUetooth:SIGN:RXQuality:BER?
CALCulate:BLUetooth:SIGN:RXQuality:BER?
FETCh:BLUetooth:SIGN:RXQuality:BER:STATe?
INIT:BLUetooth:SIGN:RXQuality:PER
FETCh:BLUetooth:SIGN:RXQuality:PER:LENergy?
CALCulate:BLUetooth:SIGN:RXQuality:PER:LENergy:LE1M?
FETCh:BLUetooth:SIGN:RXQuality:PER:STATe?
// *****************************************************************************
// Start continuous measurement; wait for 5 ms and return BER results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RXQuality:REPetition CONT; *OPC?
INIT:BLUetooth:SIGN:RXQuality:BER
Pause 5000
FETCh:BLUetooth:SIGN:RXQuality:BER?
CALCulate:BLUetooth:SIGN:RXQuality:BER?
FETCh:BLUetooth:SIGN:RXQuality:BER:STATe:ALL?
Top