# Inquire or Manually Specify EUT

Module: Bluetooth Signaling
Source: 8d47241131964d7f.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Inquire or Manually Specify EUT
Inquire or Manually Specify EUT
// *****************************************************************************
// Either configure and perform an inquiry to find the EUT, 
// or manually specify the EUT by its BD address
// *****************************************************************************
Inquire BD address
// ***************************************************************************** 
// Configure inquiry.
// ***************************************************************************** 
CONFigure:BLUetooth:SIGN:CONNection:INQuiry:ILENgth 20; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:INQuiry:NOResponses 10; *OPC?
// ***************************************************************************** 
// Run inquiry.
// ***************************************************************************** 
CALL:BLUetooth:SIGN:CONNection:ACTion INQuire
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "SBY"
CONFigure:BLUetooth:SIGN:CONNection:INQuiry:PTARgets:CATalog?
Manually specify BD address
CONFigure:BLUetooth:SIGN:CONNection:BDADdress:EUT #H123456789012; *OPC?
Top