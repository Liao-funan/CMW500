# IQ Constellation Diagram

Module: GSM Measurements
Source: 21f8b4d7b1aa40c7.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
I/Q Constellation Diagram
I/Q Constellation Diagram
This example focuses on the I/Q constellation diagram commands. It assumes that the general measurement settings have already been adjusted, see 
"Specifying General Measurement Settings"
.
// *************************************************************************
// Switch on I/Q constellation diagram and define statistics cycle,
// rotation and filter settings
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:RESult:IQ ON
CONFigure:GSM:MEAS:MEValuation:SCOunt:MODulation 1
CONFigure:GSM:MEAS:MEValuation:FILTer:IQ ISIRemoved
CONFigure:GSM:MEAS:MEValuation:ROTation:IQ P38R
// *************************************************************************
// Start single-shot measurement. Return IQ constellation results.
// Query the measurement state (should be "RDY").
// *************************************************************************
INIT:GSM:MEAS:MEValuation
FETCh:GSM:MEAS:MEValuation:TRACe:IQ?
FETCh:GSM:MEAS:MEValuation:STATe?
Top