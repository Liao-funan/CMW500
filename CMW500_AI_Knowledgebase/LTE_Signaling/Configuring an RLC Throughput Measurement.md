# Configuring an RLC Throughput Measurement

Module: LTE Signaling
Source: 06daea93a0df43b2.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
RLC Throughput Tests
 > 
Configuring an RLC Throughput Measurement
Configuring an RLC Throughput Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure repetition mode, update interval and window size.
// *****************************************************************************
CONFigure:LTE:SIGN:THRoughput:REPetition SINGleshot
CONFigure:LTE:SIGN:THRoughput:UPDate 200
CONFigure:LTE:SIGN:THRoughput:WINDow 20000
// *****************************************************************************
// Select the data application mode
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:CTYPe DAPPlication
Top