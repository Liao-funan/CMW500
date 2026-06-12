# Configuring the HSDPA ACK Measurement

Module: WCDMA Signaling
Source: b3c58e3844724c13.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA ACK Tests
 > 
Configuring the HSDPA ACK Measurement
Configuring the HSDPA ACK Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode and number of HSDPA subframes to be measured.
// *****************************************************************************
CONFigure:WCDMa:SIGN:HACK:REPetition SINGleshot
CONFigure:WCDMa:SIGN:HACK:MSFRames 3000
CONFigure:WCDMa:SIGN:HACK:HARQ ALL
Top