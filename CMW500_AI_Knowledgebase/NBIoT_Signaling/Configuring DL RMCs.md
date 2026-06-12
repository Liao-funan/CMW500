# Configuring DL RMCs

Module: NBIoT Signaling
Source: b0ddf4d39c7c4b51.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring DL RMCs
Configuring DL RMCs
// *****************************************************************************
// Select the scheduling type.
// Configure a DL RMC with full subcarrier allocation.
// Query the resulting MCS index and transport block size.
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:STYPe DLRMc
CONFigure:NIOT:SIGN:CONNection:RMC:DL SC12, 0, MI6, NSF01, NR1
CONFigure:NIOT:SIGN:CONNection:RMC:DL:MCSindex?
Top