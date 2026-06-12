# CONFigureNIOTSIGNiCONNectionRMCDL

Module: NBIoT Signaling
Source: c1c4c8b2398c4e9d.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
DL RMC Settings
 > 
CONFigure:NIOT:SIGN<i>:CONNection:RMC:DL
CONFigure:NIOT:SIGN<i>:CONNection:RMC:DL 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <Subframes>, <Repetitions>
Configures a downlink reference measurement channel (DL RMC). Only certain value combinations are accepted, see 
"Scheduling Type DL RMC"
.
Parameters:
<Subcarriers>
SC12
Number of subcarriers
*RST:
SC12
<StartSubcarrier>
Start subcarrier
Range: 
0  to  0
*RST:
0
<MCSindex>
MI6
MCS index value
*RST:
MI6
<Subframes>
NSF01
Number of subframes
*RST:
NSF01
<Repetitions>
NR1
Number of NPDSCH repetitions
*RST:
NR1
Example: 
See 
"Configuring DL RMCs"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Subcarriers, Start Subcarrier"
Top