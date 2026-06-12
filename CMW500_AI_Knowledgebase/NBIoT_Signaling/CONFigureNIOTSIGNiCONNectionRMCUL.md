# CONFigureNIOTSIGNiCONNectionRMCUL

Module: NBIoT Signaling
Source: 7c904c40c7084abe.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
UL RMC Settings
 > 
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL
CONFigure:NIOT:SIGN<i>:CONNection:RMC:UL 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <ResourceUnits>, <Repetitions>
Configures an uplink reference measurement channel (UL RMC) for NPUSCH format 1.
Only certain value combinations are accepted, see 
"Scheduling Type UL RMC"
.
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
0  to  47
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
Example: 
See 
"Configuring UL RMCs"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Subcarriers, Start Subcarrier"
Top