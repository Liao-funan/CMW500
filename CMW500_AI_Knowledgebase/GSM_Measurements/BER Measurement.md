# BER Measurement

Module: GSM Measurements
Source: 06a87253e0f349d1.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
BER Measurement
BER Measurement
This example focuses on the BER measurement commands. It assumes that the general measurement settings have already been adjusted, see 
"Specifying General Measurement Settings"
.
// *************************************************************************
// Enable BER measurement and define a statistic count of 1000 bursts
// Select a loop C measurement (for GMSK modulation), adjust thresholds
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:RESult:BER ON
CONFigure:GSM:MEAS:MEValuation:SCOunt:BER 200
CONFigure:GSM:MEAS:MEValuation:BER:LOOP C
CONFigure:GSM:MEAS:MEValuation:BER:TSTart 5
CONFigure:GSM:MEAS:MEValuation:BER:TRUN 30
// *************************************************************************
// Start single-shot measurement, return BER results
// Query the measurement state (should be "RDY").
// *************************************************************************
INIT:GSM:MEAS:MEValuation
FETCh:GSM:MEAS:MEValuation:BER?
FETCh:GSM:MEAS:MEValuation:STATe?
Top