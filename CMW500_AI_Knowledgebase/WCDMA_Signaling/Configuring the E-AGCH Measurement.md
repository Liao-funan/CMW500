# Configuring the E-AGCH Measurement

Module: WCDMA Signaling
Source: 3ac49c8203e844d8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-AGCH Tests
 > 
Configuring the E-AGCH Measurement
Configuring the E-AGCH Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, measured subframes, type missed 
// detections. Set E-TFCI values manually, specify limit.
// *****************************************************************************
CONFigure:WCDMa:SIGN:EAGCh:REPetition SINGleshot
CONFigure:WCDMa:SIGN:EAGCh:MFRames 2000
CONFigure:WCDMa:SIGN:EAGCh:MTYPe MISSed
CONFigure:WCDMa:SIGN:EAGCh:ETFCi:MODE MANual
CONFigure:WCDMa:SIGN:EAGCh:ETFCi:MANual 28,31,47,53,67,79,83,97
CONFigure:WCDMa:SIGN:EAGCh:LIMit 2
Top