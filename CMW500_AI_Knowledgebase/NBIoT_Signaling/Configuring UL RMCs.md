# Configuring UL RMCs

Module: NBIoT Signaling
Source: 2b06b13c41cf46a2.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring UL RMCs
Configuring UL RMCs
// *****************************************************************************
// Select the scheduling type.
// Configure a UL RMC with full subcarrier allocation.
// Query the resulting MCS index and transport block size.
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:STYPe ULRMc
CONFigure:NIOT:SIGN:CONNection:RMC:UL SC12, 0, MI5, NRU01, NR1
CONFigure:NIOT:SIGN:CONNection:RMC:UL:MCSindex?
Top