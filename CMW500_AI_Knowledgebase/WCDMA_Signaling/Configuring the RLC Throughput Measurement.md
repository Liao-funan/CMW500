# Configuring the RLC Throughput Measurement

Module: WCDMA Signaling
Source: 498d6e49bdfd4739.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
RLC Throughput Tests
 > 
Configuring the RLC Throughput Measurement
Configuring the RLC Throughput Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, result interval, and result window size.
// *****************************************************************************
CONFigure:WCDMa:SIGN:THRoughput:REPetition SINGleshot
CONFigure:WCDMa:SIGN:THRoughput:UPDate 0.32
CONFigure:WCDMa:SIGN:THRoughput:WINDow 220
// *****************************************************************************
// Enable a connection to the DAU and configure the packet data rate.
// *****************************************************************************
CONFigure:WCDMa:SIGN:ETOE ON
CONFigure:WCDMa:SIGN:CONNection:PACKet:DRATe HSDPa, HSUPa
Top