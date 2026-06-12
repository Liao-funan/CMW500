# Performing a Confidence BLER Measurement

Module: LTE Signaling
Source: 052c8361869043db.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
BLER Tests
 > 
Performing a Confidence BLER Measurement
Performing a Confidence BLER Measurement
// *****************************************************************************
// Start a confidence BLER measurement and return the pass/fail results
// for PCC and SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:EBLer:SCONdition CLEV
INIT:LTE:SIGN:EBLer
FETCh:LTE:SIGN:EBLer:PCC:CONFidence?
FETCh:LTE:SIGN:EBLer:SCC:CONFidence?
FETCh:LTE:SIGN:EBLer:ALL:CONFidence?
Top