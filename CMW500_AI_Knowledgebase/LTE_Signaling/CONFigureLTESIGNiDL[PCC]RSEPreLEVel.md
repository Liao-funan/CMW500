# CONFigureLTESIGNiDL[PCC]RSEPreLEVel

Module: LTE Signaling
Source: d66ac1bd31f34917.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Downlink Power Levels
 > 
CONFigure:LTE:SIGN<i>:DL[:PCC]:RSEPre:LEVel
CONFigure:LTE:SIGN<i>:DL[:PCC]:RSEPre:LEVel 
<Level>
CONFigure:LTE:SIGN<i>:DL:SCC<c>:RSEPre:LEVel 
<Level>
Defines the energy per resource element (EPRE) of the cell-specific reference signal (C-RS). The power levels of resource elements used for other channels/signals are defined relative to this power level.
The allowed value range depends basically on the used connector, the number of allocated resource blocks (specified via the cell bandwidth) and the external attenuation in the output path.
level
RS EPRE, min
 = level
connector, min
 - 10*log
10
(12*N
RB
) - ext att
out
level
RS EPRE, max
 = level
connector, max
 - 10*log
10
(12*N
RB
) - ext att
out
 - 15 dB
With level
connector, min
 = -130 dBm (-120 dBm), level
connector, max
 = -5 dBm (8 dBm) for RF COM (RF OUT). Notice also the ranges quoted in the data sheet.
The range is also affected by active AWGN ("Downlink Power Levels" parameter), internal fading (insertion loss value), external fading (baseband level), CSI-RS power, number of MIMO transmit antennas.
Suffix: 
<c>
1..4
Parameters:
<Level>
Range: 
see above
*RST:
-85 dBm/15kHz
Default unit: 
dBm/15kHz
Example: 
See 
"Configuring DL Power Levels"
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"RS EPRE"
Top