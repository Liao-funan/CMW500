# Configuring the CMR Performance  Measurement

Module: GSM Signaling
Source: de2277a6f0b84ccd.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
CMR Performance Tests
 > 
Configuring the CMR Performance  Measurement
Configuring the CMR Performance Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure measurement timeout and target power.
// *****************************************************************************
CONFigure:GSM:SIGN:CPERformance:TOUT 5
CONFigure:GSM:SIGN:CPERformance:TLEVel -90
Top