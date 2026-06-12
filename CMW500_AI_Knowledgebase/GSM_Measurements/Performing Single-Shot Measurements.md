# Performing Single-Shot Measurements

Module: GSM Measurements
Source: eb0110b6391949c2.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *************************************************************************
// Power vs. time and modulation configuration: change reference power mode
// for 8PSK-modulated bursts, select a wider IF filter, decode guard and 
// tail bits. 
// Start a single-shot power vs. time measurement and return the average 
// burst power trace. Query the measurement status (should be "RDY" and 
// "RDY ,ADJ,ACT").
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:RPMode CURRent
CONFigure:GSM:MEAS:MEValuation:FILTer:PVTime G10M
CONFigure:GSM:MEAS:MEValuation:MODulation:DECode GTBits
READ:GSM:MEAS:MEValuation:TRACe:PVTime:AVERage?
// *************************************************************************
// Read the average error vector magnitude trace obtained in the
// last measurement without re-starting the measurement
// Query additional measurement results
// *************************************************************************
READ:GSM:MEAS:MEValuation:TRACe:EVMagnitude:AVERage?
FETCh:GSM:MEAS:MEValuation:MVTHroughput?
FETCh:GSM:MEAS:MEValuation:PVTime:BTYPe?
FETCh:GSM:MEAS:MEValuation:PVTime:RSTiming?
FETCh:GSM:MEAS:MEValuation:PVTime:TSC?
Top