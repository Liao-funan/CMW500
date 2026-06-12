# CONFigureNIOTSIGNiCONNectionUDEFinedUL[SETsetNr]

Module: NBIoT Signaling
Source: b01529a376644267.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Scheduling Settings
 > 
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:UL[:SET<setNr>]
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:UL[:SET<setNr>] 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <ResourceUnits>, <Repetitions>
Configures the uplink user-defined scheduling for NPUSCH format 1.
Only certain value combinations are accepted, see 
"User-Defined Scheduling"
.
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
0  to  47
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
Example: 
See 
"Configuring User-Defined Channels"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Subcarriers, Start Subcarrier"
Top