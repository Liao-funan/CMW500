# Performing a Cell Change Order

Module: GSM Signaling
Source: 1ae85d7023694e22.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing a Cell Change Order
Performing a Cell Change Order
// ***************************************************************************** 
// Set up a PS connection. 
// ***************************************************************************** 
CALL:GSM:SIGN:PSWitched:ACTion CONNect
WHILE FETCh:GSM:SIGN:PSWitched:STATe? <> TBF
PREPare:GSM:SIGN:HANDover:MMODe CCORder
PREPare:WCDMa:SIGN:HANDover:DESTination 'LTE Sig1'
CALL:GSM:SIGN:PSWitched:ACTion HANDover
Top