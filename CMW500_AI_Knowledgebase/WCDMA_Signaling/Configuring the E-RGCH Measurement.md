# Configuring the E-RGCH Measurement

Module: WCDMA Signaling
Source: c7867560a6464f94.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-RGCH Tests
 > 
Configuring the E-RGCH Measurement
Configuring the E-RGCH Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, measured subframes, number of valid
// expected E-TFCI values. Set initial E-TFCI to 3 (value 47).
// Set E-TFCI values manually, specify limit.
// *****************************************************************************
CONFigure:WCDMa:SIGN:ERGCh:REPetition SINGleshot
CONFigure:WCDMa:SIGN:ERGCh:MFRames 2000
CONFigure:WCDMa:SIGN:ERGCh:ETFCi:EXPected 3
CONFigure:WCDMa:SIGN:ERGCh:ETFCi:INITial 3
CONFigure:WCDMa:SIGN:ERGCh:ETFCi:MODE MANual
CONFigure:WCDMa:SIGN:ERGCh:ETFCi:MANual 28,31,47
CONFigure:WCDMa:SIGN:ERGCh:LIMit 1,1,2
Top