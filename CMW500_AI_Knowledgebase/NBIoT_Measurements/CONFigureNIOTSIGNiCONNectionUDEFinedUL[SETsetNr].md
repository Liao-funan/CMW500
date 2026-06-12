# CONFigureNIOTSIGNiCONNectionUDEFinedUL[SETsetNr]

Module: NBIoT Measurements
Source: b01529a376644267.htm

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
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:UL[:SET<setNr>]
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:UL[:SET<setNr>] 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <ResourceUnits>, <Repetitions>
Configures the uplink user-defined scheduling for NPUSCH format 1.
Suffix: 
<setNr>
1
For future use
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
Range: 
0  to  11
*RST:
0
<MCSindex>
MI0 |
 
 MI1 |
 
 MI2 |
 
 MI3 |
 
 MI4 |
 
 MI5 |
 
 MI6 |
 
 MI7 |
 
 MI8 |
 
 MI9 |
 
 MI10 |
 
 MI11 |
 
 MI12
MCS index value
*RST:
MI5
<ResourceUnits>
NRU01 |
 
 NRU02 |
 
 NRU03 |
 
 NRU04 |
 
 NRU05 |
 
 NRU06 |
 
 NRU08 |
 
 NRU10
Number of resource units
*RST:
NRU01
<Repetitions>
NR1 |
 
 NR2 |
 
 NR4
Number of NPUSCH repetitions
*RST:
NR1
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Resource Allocation"
Top