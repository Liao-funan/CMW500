# Differential Phase Encoding Measurements

Module: Bluetooth Measurements
Source: 04a24a14fe6e4b2c.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Differential Phase Encoding Measurements
Differential Phase Encoding Measurements
// *************************************************************************
// Set the EUT signal to the EDR packet type with a PRBS9 pattern. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe MANual
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe EDR
CONFigure:BLUetooth:MEAS:ISIGnal:PATTern PRBS9
// *************************************************************************
// Perform single shot measurement; return all phase encoding results. 
// *************************************************************************
INITiate:BLUetooth:MEAS:MEValuation
FETCh:BLUetooth:MEAS:MEValuation:PENCoding:EDRate:CURRent:C?
Top