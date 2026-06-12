# Continuous, BR and LE Measurements

Module: Bluetooth Measurements
Source: a3c028dc949c4074.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Continuous, BR and LE Measurements
Continuous, BR and LE Measurements
// *************************************************************************
// Start continuous measurement; wait for 5 ms and return average result
// in last measurement cycle.
// Query measurement state and substates (should be "RUN,ADJ,ACT"). 
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:REPetition CONTinuous
INIT:BLUetooth:MEAS:MEValuation
Pause 5000
FETCh:BLUetooth:MEAS:MEValuation:MODulation:EDRate:AVERage? 
FETCh:BLUetooth:MEAS:MEValuation:STATe:ALL? 
 
// *************************************************************************
//  Change EUT configuration and send Basic Rate (DH5) packets. 
// Adjust input signal settings to the new EUT configuration.
// Stop the previous EDR measurement (READ...) and perform a single-shot 
// measurement for BR packets. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe BR
CONFigure:BLUetooth:MEAS:ISIGnal:PTYPe:BRATe DH5
CONFigure:BLUetooth:MEAS:ISIGnal:PLENgth:BRATe?
 
READ:BLUetooth:MEAS:MEValuation:MODulation:BRATe:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:BRATe:MAXimum?
// *************************************************************************
// Change EUT configuration for LE test packets. 
// Adjust sync word, set pattern and packet length.
// Perform a single-shot measurement for LE test packets. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LE1M
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:SYNWord  #H71764129
CONFigure:BLUetooth:MEAS:ISIGnal:PATTern:LENergy:LE1M P11
CONFigure:BLUetooth:MEAS:ISIGnal:PLENgth:LENergy:LE1M 37
 
READ:BLUetooth:MEAS:MEValuation:PvTime:LENergy:LE1M:CURRent?
READ:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE1M:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE1M:MAXimum?
Top