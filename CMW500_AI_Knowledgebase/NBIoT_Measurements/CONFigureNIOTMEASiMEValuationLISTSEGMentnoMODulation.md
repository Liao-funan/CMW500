# CONFigureNIOTMEASiMEValuationLISTSEGMentnoMODulation

Module: NBIoT Measurements
Source: 6a8549a9e5ca4805.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation 
<ModStatistics>, <ModEnable>, <EVMenable>, <MagErrorEnable>, <PhaseErrEnable>, <IBEenable>, <ModScheme>
Defines settings for modulation measurements in list mode for segment <no>.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<ModStatistics>
Statistical length in slots
Range: 
1  to  1000
*RST:
20
<ModEnable>
OFF |
 
 ON
Enables or disables the measurement of modulation results
ON
Modulation results are measured according to the other enable flags in this command. Modulation results for which there is no explicit enable flag are also measured (e.g. I/Q offset, frequency error and timing error).
OFF
No modulation results at all are measured. The other enable flags in this command are ignored.
*RST:
OFF
<EVMenable>
OFF |
 
 ON
Enables or disables the measurement of EVM
*RST:
OFF
<MagErrorEnable>
OFF |
 
 ON
Enables or disables the measurement of magnitude error
*RST:
OFF
<PhaseErrEnable>
OFF |
 
 ON
Enables or disables the measurement of phase error
*RST:
OFF
<IBEenable>
OFF |
 
 ON
Enables or disables the measurement of inband emissions
*RST:
OFF
<ModScheme>
BPSK |
 
 QPSK
Modulation scheme used by the NB-IoT uplink signal
*RST:
QPSK
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top