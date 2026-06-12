# CONFigureNIOTSIGNiCONNectionUDEFinedDL[SETsetNr]

Module: NBIoT Signaling
Source: 2b3cf0c362554c89.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Scheduling Settings
 > 
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:DL[:SET<setNr>]
CONFigure:NIOT:SIGN<i>:CONNection:UDEFined:DL[:SET<setNr>] 
<Subcarriers>, <StartSubcarrier>, <MCSindex>, <Subframes>, <Repetitions>
Configures the downlink user-defined scheduling. Only certain value combinations are accepted, see 
"User-Defined Scheduling"
.
Suffix: 
<setNr>
1
For future use
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
MI6
<Subframes>
NSF01 |
 
 NSF02 |
 
 NSF03 |
 
 NSF04 |
 
 NSF05 |
 
 NSF06 |
 
 NSF08 |
 
 NSF10
Number of subframes
*RST:
NSF01
<Repetitions>
NR1 |
 
 NR2 |
 
 NR4 |
 
 NR8
Number of NPDSCH repetitions
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