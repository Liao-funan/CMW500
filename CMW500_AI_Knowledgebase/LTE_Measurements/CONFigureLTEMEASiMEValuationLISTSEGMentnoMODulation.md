# CONFigureLTEMEASiMEValuationLISTSEGMentnoMODulation

Module: LTE Measurements
Source: 2d77a386d1104faf.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation 
<ModStatistics>, <ModEnable>, <EVMenable>, <MagErrorEnable>, <PhaseErrEnable>, <IBEenable>, <EqSpFlatEnable>, <ModScheme>
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
Enable or disable the measurement of modulation results
ON
: Modulation results are measured according to the other enable flags in this command. Modulation results for which there is no explicit enable flag are also measured (e.g. I/Q offset, frequency error and timing error).
OFF
: No modulation results at all are measured. The other enable flags in this command are ignored.
*RST:
OFF
<EVMenable>
OFF |
 
 ON
Enable or disable measurement of EVM
*RST:
OFF
<MagErrorEnable>
OFF |
 
 ON
Enable or disable measurement of magnitude error
*RST:
OFF
<PhaseErrEnable>
OFF |
 
 ON
Enable or disable measurement of phase error
*RST:
OFF
<IBEenable>
OFF |
 
 ON
Enable or disable measurement of inband emissions
*RST:
OFF
<EqSpFlatEnable>
OFF |
 
 ON
Enable or disable measurement of equalizer spectrum flatness results
*RST:
OFF
<ModScheme>
AUTO |
 
 QPSK |
 
 Q16 |
 
 Q64
Modulation scheme used by the LTE uplink signal
AUTO
: automatic detection
QPSK
: QPSK
Q16
: 16-QAM
Q64
: 64-QAM
*RST:
QPSK
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM012
Top