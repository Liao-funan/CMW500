# Configuring the RLC Throughput Measurement

Module: GSM Signaling
Source: b0e94a28ba454577.htm

## 原始指令文档说明
GSM Signaling
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
// Configure measurement timeout, repetition mode and result window size.
// *****************************************************************************
CONFigure:GSM:SIGN:THRoughput:TOUT 5
CONFigure:GSM:SIGN:THRoughput:REPetition SINGleshot
CONFigure:GSM:SIGN:THRoughput:WINDow 220
// *****************************************************************************
// For the connection to DAU enable packet switched services.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:PSDomain ON
Top