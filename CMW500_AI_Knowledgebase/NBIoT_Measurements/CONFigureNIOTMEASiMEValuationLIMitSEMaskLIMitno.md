# CONFigureNIOTMEASiMEValuationLIMitSEMaskLIMitno

Module: NBIoT Measurements
Source: bf3ff855094540ea.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Spectrum
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no>
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:SEMask:LIMit<no> 
<Enable>, <FrequencyStart>, <FrequencyStop>, <PowerLevelStart>, <PowerLevelStop>
Defines the emission mask area <no>.
Suffix: 
<no>
1..12
Number of the emission mask area
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the check of these requirements
ON
: enables the check of these requirements
*RST:
ON for area 1 to 5, OFF for area 6 to 12
<FrequencyStart>
Start frequency of the area, relative to the edges of the channel bandwidth
Range: 
0 MHz  to  1.9 MHz
*RST:
depends on the area number
Default unit: 
Hz
<FrequencyStop>
Stop frequency of the area, relative to the edges of the channel bandwidth
Range: 
0 MHz  to  1.9 MHz
*RST:
depends on the area number
Default unit: 
Hz
<PowerLevelStart>
Upper limit at the <FrequencyStart>
Range: 
-256 dBm  to  256 dBm
*RST:
depends on the area number
Default unit: 
dBm
<PowerLevelStop>
Upper limit at the <FrequencyEnd>
Range: 
-256 dBm  to  256 dBm
*RST:
depends on the area number
Default unit: 
dBm
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top