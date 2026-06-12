# Configuring the E-HICH Measurement

Module: WCDMA Signaling
Source: bdf6580f976f430e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-HICH Tests
 > 
Configuring the E-HICH Measurement
Configuring the E-HICH Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, measured subframes, and limit.
// Select HARQ feedback pattern.
// *****************************************************************************
CONFigure:WCDMa:SIGN:EHICh:REPetition SINGleshot
CONFigure:WCDMa:SIGN:EHICh:MFRames 2000
CONFigure:WCDMa:SIGN:EHICh:LIMit 1.1
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EHICh:MODE ACK
Top