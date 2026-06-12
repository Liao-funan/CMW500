# Configuring the HSDPA CQI Measurement

Module: WCDMA Signaling
Source: e03654c8a6c54252.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA CQI Tests
 > 
Configuring the HSDPA CQI Measurement
Configuring the HSDPA CQI Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure number of HSDPA subframes to be measured in both stages,
// specify test case AWGN.
// *****************************************************************************
CONFigure:WCDMa:SIGN:HCQI:CQI:MSFRames 3000
CONFigure:WCDMa:SIGN:HCQI:BLER:MSFRames 2000
CONFigure:WCDMa:SIGN:HCQI:TCASe AWGN
// *****************************************************************************
// Configure limits for both test cases.
// *****************************************************************************
CONFigure:WCDMa:SIGN:HCQI:LIMit:AWGN 95
CONFigure:WCDMa:SIGN:HCQI:LIMit:AWGN:BLER 10,10,10
CONFigure:WCDMa:SIGN:HCQI:LIMit:AWGN:DTX 10,10,10
CONFigure:WCDMa:SIGN:HCQI:LIMit:FADing:BLER 60,15
CONFigure:WCDMa:SIGN:HCQI:LIMit:FADing:DTX 10,10
Top