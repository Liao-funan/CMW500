# CONFigureNIOTSIGNiCONNectionRMCULMCSindex

Module: NBIoT Signaling
Source: 3f90824efa61435f.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
UL RMC Settings
 > 
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL:MCSindex?
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL:MCSindex? 
Queries the configured MCS index and the resulting modulation scheme and transport block size for the scheduling type UL RMC for NPUSCH format 1, see 
"Scheduling Type UL RMC"
.
Return values: 
<MCSindex>
MI0 |
 
 MI3 |
 
 MI5
MCS index value
<Modulation>
QPSK
Modulation scheme
<TransBlockSize>
Transport block size
Example: 
See 
"Configuring UL RMCs"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"MCS Index"
Top