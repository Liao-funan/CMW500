# CONFigureNIOTSIGNiCONNectionRMCUL

Module: NBIoT Measurements
Source: 7c904c40c7084abe.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement
 > 
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <ResourceUnits>, <Repetitions>
Configures an uplink reference measurement channel (UL RMC) for NPUSCH format 1.
Parameters:
<Subcarriers>
SC1 |
 
 SC3 |
 
 SC6 |
 
 SC12
Number of subcarriers
*RST:
SC1
<StartSubcarrier>
Start subcarrier
Range: 
0  to  11
*RST:
0
<MCSindex>
MI0 |
 
 MI3 |
 
 MI5
MCS index value
*RST:
MI0
<ResourceUnits>
NRU01 |
 
 NRU02
Number of resource units
*RST:
NRU02
<Repetitions>
NR1
Number of NPUSCH repetitions
*RST:
NR1
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Resource Allocation"
Top