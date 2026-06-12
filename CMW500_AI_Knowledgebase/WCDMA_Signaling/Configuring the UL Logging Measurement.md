# Configuring the UL Logging Measurement

Module: WCDMA Signaling
Source: a7910653c4d445a6.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
UL Logging Tests
 > 
Configuring the UL Logging Measurement
Configuring the UL Logging Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, measured subframes, and first system frame number.
// *****************************************************************************
CONFigure:WCDMa:SIGN:ULLogging:REPetition SINGleshot
CONFigure:WCDMa:SIGN:ULLogging:MSFRames 2000
CONFigure:WCDMa:SIGN:ULLogging:SSFN 5
CONFigure:WCDMa:SIGN:ULLogging:SCCYcle ON
Top